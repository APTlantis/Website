// Copyright 2012 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build windows
// +build windows

package eventlog_test

import (
	"testing"
)

func TestLog(t *testing.T) {
	if testing.Short() {
		t.Skip("skipping test in short mode - it modifies system logs")
	}

	const name = "mylog"
	const supports = Error | Warning | Info
	err := InstallAsEventCreate(name, supports)
	if err != nil {
		t.Fatalf("Install failed: %s", err)
	}
	defer func() {
		err = Remove(name)
		if err != nil {
			t.Fatalf("Remove failed: %s", err)
		}
	}()

	l, err := Open(name)
	if err != nil {
		t.Fatalf("Open failed: %s", err)
	}
	defer l.Close()

	err = l.Info(1, "info")
	if err != nil {
		t.Fatalf("Info failed: %s", err)
	}
	err = l.Warning(2, "warning")
	if err != nil {
		t.Fatalf("Warning failed: %s", err)
	}
	err = l.Error(3, "error")
	if err != nil {
		t.Fatalf("Error failed: %s", err)
	}
}
