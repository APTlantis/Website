// Copyright 2018 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package unix_test

import (
	"bytes"
	"io/ioutil"
	"net"
	"os"
	"path"
	"testing"
)

var testData = []byte("This is a test\n")

// stringsFromByteSlice converts a sequence of attributes to a []string.
// On Darwin, each entry is a NULL-terminated string.
func stringsFromByteSlice(buf []byte) []string {
	var result []string
	off := 0
	for i, b := range buf {
		if b == 0 {
			result = append(result, string(buf[off:i]))
			off = i + 1
		}
	}
	return result
}

func createTestFile(t *testing.T, dir string) (f *os.File, cleanup func() error) {
	file, err := ioutil.TempFile(dir, t.Name())
	if err != nil {
		t.Fatal(err)
	}

	_, err = file.Write(testData)
	if err != nil {
		t.Fatal(err)
	}

	err = file.Close()
	if err != nil {
		t.Fatal(err)
	}

	return file, func() error {
		return os.Remove(file.Name())
	}
}

func TestClonefile(t *testing.T) {
	file, cleanup := createTestFile(t, "")
	defer cleanup()

	clonedName := file.Name() + "-cloned"
	err := Clonefile(file.Name(), clonedName, 0)
	if err == ENOSYS || err == ENOTSUP {
		t.Skip("clonefile is not available or supported, skipping test")
	} else if err != nil {
		t.Fatal(err)
	}
	defer os.Remove(clonedName)

	clonedData, err := ioutil.ReadFile(clonedName)
	if err != nil {
		t.Fatal(err)
	}

	if !bytes.Equal(testData, clonedData) {
		t.Errorf("Clonefile: got %q, expected %q", clonedData, testData)
	}
}

func TestClonefileatWithCwd(t *testing.T) {
	file, cleanup := createTestFile(t, "")
	defer cleanup()

	clonedName := file.Name() + "-cloned"
	err := Clonefileat(AT_FDCWD, file.Name(), AT_FDCWD, clonedName, 0)
	if err == ENOSYS || err == ENOTSUP {
		t.Skip("clonefileat is not available or supported, skipping test")
	} else if err != nil {
		t.Fatal(err)
	}
	defer os.Remove(clonedName)

	clonedData, err := ioutil.ReadFile(clonedName)
	if err != nil {
		t.Fatal(err)
	}

	if !bytes.Equal(testData, clonedData) {
		t.Errorf("Clonefileat: got %q, expected %q", clonedData, testData)
	}
}

func TestClonefileatWithRelativePaths(t *testing.T) {
	srcDir, err := ioutil.TempDir("", "src")
	if err != nil {
		t.Fatal(err)
	}
	defer os.RemoveAll(srcDir)

	dstDir, err := ioutil.TempDir("", "dest")
	if err != nil {
		t.Fatal(err)
	}
	defer os.RemoveAll(dstDir)

	srcFd, err := Open(srcDir, O_RDONLY|O_DIRECTORY, 0)
	if err != nil {
		t.Fatal(err)
	}
	defer Close(srcFd)

	dstFd, err := Open(dstDir, O_RDONLY|O_DIRECTORY, 0)
	if err != nil {
		t.Fatal(err)
	}
	defer Close(dstFd)

	srcFile, cleanup := createTestFile(t, srcDir)
	defer cleanup()

	dstFile, err := ioutil.TempFile(dstDir, "TestClonefileat")
	if err != nil {
		t.Fatal(err)
	}
	err = os.Remove(dstFile.Name())
	if err != nil {
		t.Fatal(err)
	}

	src := path.Base(srcFile.Name())
	dst := path.Base(dstFile.Name())
	err = Clonefileat(srcFd, src, dstFd, dst, 0)
	if err == ENOSYS || err == ENOTSUP {
		t.Skip("clonefileat is not available or supported, skipping test")
	} else if err != nil {
		t.Fatal(err)
	}

	clonedData, err := ioutil.ReadFile(dstFile.Name())
	if err != nil {
		t.Fatal(err)
	}

	if !bytes.Equal(testData, clonedData) {
		t.Errorf("Clonefileat: got %q, expected %q", clonedData, testData)
	}
}

func TestFclonefileat(t *testing.T) {
	file, cleanup := createTestFile(t, "")
	defer cleanup()

	fd, err := Open(file.Name(), O_RDONLY, 0)
	if err != nil {
		t.Fatal(err)
	}
	defer Close(fd)

	dstFile, err := ioutil.TempFile("", "TestFclonefileat")
	if err != nil {
		t.Fatal(err)
	}
	os.Remove(dstFile.Name())

	err = Fclonefileat(fd, AT_FDCWD, dstFile.Name(), 0)
	if err == ENOSYS || err == ENOTSUP {
		t.Skip("clonefileat is not available or supported, skipping test")
	} else if err != nil {
		t.Fatal(err)
	}

	clonedData, err := ioutil.ReadFile(dstFile.Name())
	if err != nil {
		t.Fatal(err)
	}

	if !bytes.Equal(testData, clonedData) {
		t.Errorf("Fclonefileat: got %q, expected %q", clonedData, testData)
	}
}

func TestFcntlFstore(t *testing.T) {
	f, err := ioutil.TempFile("", t.Name())
	if err != nil {
		t.Fatal(err)
	}
	defer os.Remove(f.Name())
	defer f.Close()

	fstore := &Fstore_t{
		Flags:   F_ALLOCATEALL,
		Posmode: F_PEOFPOSMODE,
		Offset:  0,
		Length:  1 << 10,
	}
	err = FcntlFstore(f.Fd(), F_PREALLOCATE, fstore)
	if err == EOPNOTSUPP {
		t.Skipf("fcntl with F_PREALLOCATE not supported, skipping test")
	} else if err != nil {
		t.Fatalf("FcntlFstore: %v", err)
	}

	st, err := f.Stat()
	if err != nil {
		t.Fatal(err)
	}

	if st.Size() != 0 {
		t.Errorf("FcntlFstore: got size = %d, want %d", st.Size(), 0)
	}

}

func TestGetsockoptXucred(t *testing.T) {
	fds, err := Socketpair(AF_LOCAL, SOCK_STREAM, 0)
	if err != nil {
		t.Fatalf("Socketpair: %v", err)
	}

	srvFile := os.NewFile(uintptr(fds[0]), "server")
	cliFile := os.NewFile(uintptr(fds[1]), "client")
	defer srvFile.Close()
	defer cliFile.Close()

	srv, err := net.FileConn(srvFile)
	if err != nil {
		t.Fatalf("FileConn: %v", err)
	}
	defer srv.Close()

	cli, err := net.FileConn(cliFile)
	if err != nil {
		t.Fatalf("FileConn: %v", err)
	}
	defer cli.Close()

	cred, err := GetsockoptXucred(fds[1], SOL_LOCAL, LOCAL_PEERCRED)
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("got: %+v", cred)
	if got, want := cred.Uid, os.Getuid(); int(got) != int(want) {
		t.Errorf("uid = %v; want %v", got, want)
	}
	if cred.Ngroups > 0 {
		if got, want := cred.Groups[0], os.Getgid(); int(got) != int(want) {
			t.Errorf("gid = %v; want %v", got, want)
		}
	}
}

func TestSysctlKinfoProc(t *testing.T) {
	pid := Getpid()
	kp, err := SysctlKinfoProc("kern.proc.pid", pid)
	if err != nil {
		t.Fatalf("SysctlKinfoProc: %v", err)
	}
	if got, want := int(kp.Proc.P_pid), pid; got != want {
		t.Errorf("got pid %d, want %d", got, want)
	}
}

func TestSysctlKinfoProcSlice(t *testing.T) {
	kps, err := SysctlKinfoProcSlice("kern.proc.all")
	if err != nil {
		t.Fatalf("SysctlKinfoProc: %v", err)
	}
	if len(kps) == 0 {
		t.Errorf("SysctlKinfoProcSlice: expected at least one process")
	}

	uid := Getuid()
	kps, err = SysctlKinfoProcSlice("kern.proc.uid", uid)
	if err != nil {
		t.Fatalf("SysctlKinfoProc: %v", err)
	}
	if len(kps) == 0 {
		t.Errorf("SysctlKinfoProcSlice: expected at least one process")
	}

	for _, kp := range kps {
		if got, want := int(kp.Eproc.Ucred.Uid), uid; got != want {
			t.Errorf("process %d: got uid %d, want %d", kp.Proc.P_pid, got, want)
		}
	}
}
