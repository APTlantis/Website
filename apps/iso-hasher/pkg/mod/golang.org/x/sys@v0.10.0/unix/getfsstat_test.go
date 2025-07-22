// Copyright 2022 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build darwin || dragonfly || freebsd || openbsd
// +build darwin dragonfly freebsd openbsd

package unix_test

import (
	"os/exec"
	"testing"
)

func TestGetfsstat(t *testing.T) {
	n, err := Getfsstat(nil, MNT_NOWAIT)
	if err != nil {
		t.Fatal(err)
	}

	data := make([]Statfs_t, n)
	n2, err := Getfsstat(data, MNT_NOWAIT)
	if err != nil {
		t.Fatal(err)
	}
	if n != n2 {
		t.Errorf("Getfsstat(nil) = %d, but subsequent Getfsstat(slice) = %d", n, n2)
	}
	for i, stat := range data {
		if stat == (Statfs_t{}) {
			t.Errorf("index %v is an empty Statfs_t struct", i)
		}
	}
	if t.Failed() {
		for i, stat := range data[:n2] {
			t.Logf("data[%v] = %+v", i, stat)
		}
		mount, err := exec.Command("mount").CombinedOutput()
		if err != nil {
			t.Logf("mount: %v\n%s", err, mount)
		} else {
			t.Logf("mount: %s", mount)
		}
	}
}
