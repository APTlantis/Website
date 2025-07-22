// Copyright 2013 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build aix || darwin || dragonfly || freebsd || linux || netbsd || openbsd || solaris
// +build aix darwin dragonfly freebsd linux netbsd openbsd solaris

package unix_test

import (
	"testing"
)

func testSetGetenv(t *testing.T, key, value string) {
	err := Setenv(key, value)
	if err != nil {
		t.Fatalf("Setenv failed to set %q: %v", value, err)
	}
	newvalue, found := Getenv(key)
	if !found {
		t.Fatalf("Getenv failed to find %v variable (want value %q)", key, value)
	}
	if newvalue != value {
		t.Fatalf("Getenv(%v) = %q; want %q", key, newvalue, value)
	}
}

func TestEnv(t *testing.T) {
	testSetGetenv(t, "TESTENV", "AVALUE")
	// make sure TESTENV gets set to "", not deleted
	testSetGetenv(t, "TESTENV", "")
}

func TestUname(t *testing.T) {
	var utsname Utsname
	err := Uname(&utsname)
	if err != nil {
		t.Fatalf("Uname: %v", err)
	}

	t.Logf("OS: %s/%s %s", utsname.Sysname[:], utsname.Machine[:], utsname.Release[:])
}

// Test that this compiles. (Issue #31735)
func TestStatFieldNames(t *testing.T) {
	var st Stat_t
	var _ *Timespec
	_ = &st.Atim
	_ = &st.Mtim
	_ = &st.Ctim
	_ = int64(st.Mtim.Sec)
	_ = int64(st.Mtim.Nsec)
}
