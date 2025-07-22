package bls_test

import (
	"bytes"
	"crypto/rand"
	"crypto/rsa"
	"encoding"
	"fmt"
	"testing"

	"github.com/cloudflare/circl/internal/test"
)

func TestBls(t *testing.T) {
	t.Run("G1/API", testBls[G1])
	t.Run("G2/API", testBls[G2])
	t.Run("G1/Marshal", testMarshalKeys[G1])
	t.Run("G2/Marshal", testMarshalKeys[G2])
	t.Run("G1/Errors", testErrors[G1])
	t.Run("G2/Errors", testErrors[G2])
	t.Run("G1/Aggregation", testAggregation[G1])
	t.Run("G2/Aggregation", testAggregation[G2])
}

func testBls[K KeyGroup](t *testing.T) {
	const testTimes = 1 << 7
	msg := []byte("hello world")
	keyInfo := []byte("KeyInfo for BLS")
	salt := [32]byte{}
	ikm := [32]byte{}
	_, _ = rand.Reader.Read(ikm[:])
	_, _ = rand.Reader.Read(salt[:])

	for i := 0; i < testTimes; i++ {
		_, _ = rand.Reader.Read(ikm[:])

		priv, err := KeyGen[K](ikm[:], salt[:], keyInfo)
		test.CheckNoErr(t, err, "failed to keygen")
		signature := Sign(priv, msg)
		pub := priv.Public().(*PublicKey[K])
		test.CheckOk(Verify(pub, msg, signature), "failed verification", t)
	}
}

func testMarshalKeys[K KeyGroup](t *testing.T) {
	ikm := [32]byte{}
	priv, err := KeyGen[K](ikm[:], nil, nil)
	test.CheckNoErr(t, err, "failed to keygen")
	pub := priv.PublicKey()

	auxPriv := new(PrivateKey[K])
	auxPub := new(PublicKey[K])

	t.Run("PrivateKey", func(t *testing.T) {
		testMarshal[K](t, priv, auxPriv)
		test.CheckOk(priv.Equal(auxPriv), "private keys do not match", t)
	})
	t.Run("PublicKey", func(t *testing.T) {
		testMarshal[K](t, pub, auxPub)
		test.CheckOk(pub.Equal(auxPub), "public keys do not match", t)
	})
}

func testMarshal[K KeyGroup](
	t *testing.T,
	left, right interface {
		encoding.BinaryMarshaler
		encoding.BinaryUnmarshaler
	},
) {
	want, err := left.MarshalBinary()
	test.CheckNoErr(t, err, "failed to marshal")

	err = right.UnmarshalBinary(want)
	test.CheckNoErr(t, err, "failed to unmarshal")

	got, err := right.MarshalBinary()
	test.CheckNoErr(t, err, "failed to marshal")

	if !bytes.Equal(got, want) {
		test.ReportError(t, got, want)
	}

	err = right.UnmarshalBinary(nil)
	test.CheckIsErr(t, err, "should fail: empty input")
}

func testErrors[K KeyGroup](t *testing.T) {
	// Short IKM
	_, err := KeyGen[K](nil, nil, nil)
	test.CheckIsErr(t, err, "should fail: short ikm")

	// Bad Signature size
	ikm := [32]byte{}
	priv, err := KeyGen[K](ikm[:], nil, nil)
	test.CheckNoErr(t, err, "failed to keygen")
	pub := priv.PublicKey()
	test.CheckOk(Verify(pub, nil, nil) == false, "should fail: bad signature", t)

	// Bad public key
	msg := []byte("hello")
	sig := Sign[K](priv, msg)
	pub = new(PublicKey[K])
	test.CheckOk(pub.Validate() == false, "should fail: bad public key", t)
	test.CheckOk(Verify(pub, msg, sig) == false, "should fail: bad signature", t)

	// Bad private key
	priv = new(PrivateKey[K])
	test.CheckOk(priv.Validate() == false, "should fail: bad private key", t)
	err = test.CheckPanic(func() { Sign(priv, msg) })
	test.CheckNoErr(t, err, "sign should panic")

	// Wrong comparisons
	test.CheckOk(priv.Equal(new(rsa.PrivateKey)) == false, "should fail: bad private key types", t)
	test.CheckOk(pub.Equal(new(rsa.PublicKey)) == false, "should fail: bad public key types", t)

	// Aggregate nil
	_, err = Aggregate[K](*new(K), nil)
	test.CheckIsErr(t, err, "should fail: empty signatures")

	// VerifyAggregate nil
	test.CheckOk(VerifyAggregate([]*PublicKey[K]{}, nil, nil) == false, "should fail: empty keys", t)

	// VerifyAggregate empty signature
	test.CheckOk(VerifyAggregate([]*PublicKey[K]{pub}, [][]byte{msg}, nil) == false, "should fail: empty signature", t)
}

func testAggregation[K KeyGroup](t *testing.T) {
	const N = 3

	ikm := [32]byte{}
	_, _ = rand.Reader.Read(ikm[:])

	msgs := make([][]byte, N)
	sigs := make([]Signature, N)
	pubKeys := make([]*PublicKey[K], N)

	for i := range sigs {
		priv, err := KeyGen[K](ikm[:], nil, nil)
		test.CheckNoErr(t, err, "failed to keygen")
		pubKeys[i] = priv.PublicKey()

		msgs[i] = []byte(fmt.Sprintf("Message number: %v", i))
		sigs[i] = Sign(priv, msgs[i])
	}

	aggSig, err := Aggregate(*new(K), sigs)
	test.CheckNoErr(t, err, "failed to aggregate")

	ok := VerifyAggregate(pubKeys, msgs, aggSig)
	test.CheckOk(ok, "failed to verify aggregated signature", t)
}

func BenchmarkBls(b *testing.B) {
	b.Run("G1", benchmarkBls[G1])
	b.Run("G2", benchmarkBls[G2])
}

func benchmarkBls[K KeyGroup](b *testing.B) {
	msg := []byte("hello world")
	keyInfo := []byte("KeyInfo for BLS")
	salt := [32]byte{}
	ikm := [32]byte{}
	_, _ = rand.Reader.Read(ikm[:])
	_, _ = rand.Reader.Read(salt[:])

	priv, _ := KeyGen[K](ikm[:], salt[:], keyInfo)

	const N = 3
	msgs := make([][]byte, N)
	sigs := make([]Signature, N)
	pubKeys := make([]*PublicKey[K], N)

	for i := range sigs {
		pubKeys[i] = priv.PublicKey()

		msgs[i] = []byte(fmt.Sprintf("Message number: %v", i))
		sigs[i] = Sign(priv, msgs[i])
	}

	b.Run("Keygen", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			_, _ = rand.Reader.Read(ikm[:])
			_, _ = KeyGen[K](ikm[:], salt[:], keyInfo)
		}
	})

	b.Run("Sign", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			_ = Sign(priv, msg)
		}
	})

	b.Run("Verify", func(b *testing.B) {
		pub := priv.PublicKey()
		signature := Sign(priv, msg)

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			Verify(pub, msg, signature)
		}
	})

	b.Run("Aggregate3", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			_, _ = Aggregate(*new(K), sigs)
		}
	})

	b.Run("VerifyAggregate3", func(b *testing.B) {
		aggSig, _ := Aggregate(*new(K), sigs)

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			_ = VerifyAggregate(pubKeys, msgs, aggSig)
		}
	})
}
