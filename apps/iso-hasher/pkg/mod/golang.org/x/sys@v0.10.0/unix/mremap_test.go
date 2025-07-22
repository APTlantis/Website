// Copyright 2023 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build linux
// +build linux

package unix_test

import (
	"testing"
)

func TestMremap(t *testing.T) {
	b, err := Mmap(-1, 0, Getpagesize(), PROT_NONE, MAP_ANON|MAP_PRIVATE)
	if err != nil {
		t.Fatalf("Mmap: %v", err)
	}
	if err := Mprotect(b, PROT_READ|PROT_WRITE); err != nil {
		t.Fatalf("Mprotect: %v", err)
	}

	b[0] = 42

	bNew, err := Mremap(b, Getpagesize()*2, MREMAP_MAYMOVE)
	if err != nil {
		t.Fatalf("Mremap2: %v", err)
	}
	bNew[Getpagesize()+1] = 84 // checks

	if bNew[0] != 42 {
		t.Fatal("first element value was changed")
	}
	if len(bNew) != Getpagesize()*2 {
		t.Fatal("new memory len not equal to specified len")
	}
	if cap(bNew) != Getpagesize()*2 {
		t.Fatal("new memory cap not equal to specified len")
	}

	_, err = Mremap(b, Getpagesize(), MREMAP_FIXED)
	if err != EINVAL {
		t.Fatalf("unix.MREMAP_FIXED should be forbidden")
	}
}
