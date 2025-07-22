// Copyright 2018 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package unix_test

import (
	"os"
	"testing"
)

// stringsFromByteSlice converts a sequence of attributes to a []string.
// On NetBSD, each entry consists of a single byte containing the length
// of the attribute name, followed by the attribute name.
// The name is _not_ NULL-terminated.
func stringsFromByteSlice(buf []byte) []string {
	var result []string
	i := 0
	for i < len(buf) {
		next := i + 1 + int(buf[i])
		result = append(result, string(buf[i+1:next]))
		i = next
	}
	return result
}

func TestIoctlPtmget(t *testing.T) {
	fd, err := Open("/dev/ptmx", O_NOCTTY|O_RDWR, 0666)
	if err != nil {
		t.Skip("failed to open /dev/ptmx, skipping test")
	}
	defer Close(fd)

	ptm, err := IoctlGetPtmget(fd, TIOCPTSNAME)
	if err != nil {
		t.Fatalf("IoctlGetPtmget: %v\n", err)
	}

	t.Logf("sfd = %v, ptsname = %v", ptm.Sfd, ByteSliceToString(ptm.Sn[:]))
}

func TestStatvfs(t *testing.T) {
	defer chtmpdir(t)()
	touch(t, "file1")

	var statvfs1, statvfs2 Statvfs_t
	err := Statvfs("file1", &statvfs1)
	if err != nil {
		t.Fatalf("Statvfs: %v", err)
	}

	f, err := os.Open("file1")
	if err != nil {
		t.Fatal(err)
	}
	defer f.Close()

	err = Fstatvfs(int(f.Fd()), &statvfs2)
	if err != nil {
		t.Fatalf("Fstatvfs: %v", err)
	}

	if statvfs2.Fsid != statvfs1.Fsid {
		t.Errorf("Fstatvfs: got fsid %v, expected %v", statvfs2.Fsid, statvfs1.Fsid)
	}
	if statvfs2.Owner != statvfs1.Owner {
		t.Errorf("Fstatvfs: got owner %v, expected %v", statvfs2.Owner, statvfs1.Owner)
	}
	if statvfs2.Fstypename != statvfs1.Fstypename {
		t.Errorf("Fstatvfs: got fstypename %s, expected %s", statvfs2.Fstypename, statvfs1.Fstypename)
	}
}
