package eddilithium2_test

import (
	"encoding/binary"
	"testing"
)

func BenchmarkVerify(b *testing.B) {
	// Note that Dilithium precomputes quite a bit during Unpacking/Keygen
	// instead of at the moment of verification (as compared to the reference
	// implementation.  A fair comparison thus should sum verification
	// times with unpacking times.)
	var seed [32]byte
	var msg [8]byte
	var sig [SignatureSize]byte
	pk, sk := NewKeyFromSeed(&seed)
	SignTo(sk, msg[:], sig[:])
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		// We should generate a new signature for every verify attempt,
		// as this influences the time a little bit.  This difference, however,
		// is small and generating a new signature in between creates a lot
		// pressure on the allocator which makes an accurate measurement hard.
		Verify(pk, msg[:], sig[:])
	}
}

func BenchmarkSign(b *testing.B) {
	// Note that Dilithium precomputes quite a bit during Unpacking/Keygen
	// instead of at the moment of signing (as compared to the reference
	// implementation.  A fair comparison thus should sum sign times with
	// unpacking times.)
	var seed [32]byte
	var msg [8]byte
	var sig [SignatureSize]byte
	_, sk := NewKeyFromSeed(&seed)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		binary.LittleEndian.PutUint64(msg[:], uint64(i))
		SignTo(sk, msg[:], sig[:])
	}
}

func BenchmarkGenerateKey(b *testing.B) {
	var seed [32]byte
	for i := 0; i < b.N; i++ {
		binary.LittleEndian.PutUint64(seed[:], uint64(i))
		NewKeyFromSeed(&seed)
	}
}

func BenchmarkPublicFromPrivate(b *testing.B) {
	var seed [32]byte
	for i := 0; i < b.N; i++ {
		b.StopTimer()
		binary.LittleEndian.PutUint64(seed[:], uint64(i))
		_, sk := NewKeyFromSeed(&seed)
		b.StartTimer()
		sk.Public()
	}
}

func TestSignThenVerifyAndPkSkPacking(t *testing.T) {
	var seed [SeedSize]byte
	var sig [SignatureSize]byte
	var msg [8]byte
	var pkb [PublicKeySize]byte
	var skb [PrivateKeySize]byte
	var pk2 PublicKey
	var sk2 PrivateKey
	for i := uint64(0); i < 100; i++ {
		binary.LittleEndian.PutUint64(seed[:], i)
		pk, sk := NewKeyFromSeed(&seed)
		for j := uint64(0); j < 10; j++ {
			binary.LittleEndian.PutUint64(msg[:], j)
			SignTo(sk, msg[:], sig[:])
			if !Verify(pk, msg[:], sig[:]) {
				t.Fatal()
			}
		}
		pk.Pack(&pkb)
		pk2.Unpack(&pkb)
		if !pk.Equal(&pk2) {
			t.Fatal()
		}
		sk.Pack(&skb)
		sk2.Unpack(&skb)
		if !sk.Equal(&sk2) {
			t.Fatal()
		}
	}
}

func TestPublicFromPrivate(t *testing.T) {
	var seed [SeedSize]byte
	for i := uint64(0); i < 100; i++ {
		binary.LittleEndian.PutUint64(seed[:], i)
		pk, sk := NewKeyFromSeed(&seed)
		pk2 := sk.Public().(*PublicKey)
		var pkb1, pkb2 [PublicKeySize]byte
		pk.Pack(&pkb1)
		pk2.Pack(&pkb2)
		if pkb1 != pkb2 {
			t.Fatal()
		}
	}
}
