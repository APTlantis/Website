package eddilithium2_test

import (
	"fmt"
)

func Example() {
	// Generates a keypair.
	pk, sk, err := GenerateKey(nil)
	if err != nil {
		panic(err)
	}

	// (Alternatively one can derive a keypair from a seed,
	// see NewKeyFromSeed().)

	// Packs public and private key
	var packedSk [PrivateKeySize]byte
	var packedPk [PublicKeySize]byte
	sk.Pack(&packedSk)
	pk.Pack(&packedPk)

	// Load it again
	var sk2 PrivateKey
	var pk2 PublicKey
	sk2.Unpack(&packedSk)
	pk2.Unpack(&packedPk)

	// Creates a signature on our message with the generated private key.
	msg := []byte("Some message")
	var signature [SignatureSize]byte
	SignTo(&sk2, msg, signature[:])

	// Checks whether a signature is correct
	if !Verify(&pk2, msg, signature[:]) {
		panic("incorrect signature")
	}

	fmt.Printf("O.K.")

	// Output:
	// O.K.
}
