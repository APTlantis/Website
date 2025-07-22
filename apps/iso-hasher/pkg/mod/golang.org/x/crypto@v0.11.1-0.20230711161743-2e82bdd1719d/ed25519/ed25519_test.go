// Copyright 2019 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package ed25519_test

import (
	ed25519std "crypto/ed25519"
	"testing"
)

func TestTypeAlias(t *testing.T) {
	public, private, _ := ed25519std.GenerateKey(nil)

	message := []byte("test message")
	sig := Sign(private, message)
	if !Verify(public, message, sig) {
		t.Errorf("valid signature rejected")
	}
}
