package pki_test

import (
	"testing"

	"github.com/cloudflare/circl/sign/schemes"
)

func TestPEM(t *testing.T) {
	for _, scheme := range schemes.All() {
		t.Run(scheme.Name(), func(t *testing.T) {
			if scheme == nil {
				t.Fatal()
			}

			_, ok := scheme.(CertificateScheme)
			if !ok {
				return
			}

			pk, sk, err := scheme.GenerateKey()
			if err != nil {
				t.Fatal(err)
			}

			packedPk, err := MarshalPEMPublicKey(pk)
			if err != nil {
				t.Fatal(err)
			}

			pk2, err := UnmarshalPEMPublicKey(packedPk)
			if err != nil {
				t.Fatal(err)
			}
			if !pk.Equal(pk2) {
				t.Fatal()
			}

			packedSk, err := MarshalPEMPrivateKey(sk)
			if err != nil {
				t.Fatal(err)
			}

			sk2, err := UnmarshalPEMPrivateKey(packedSk)
			if err != nil {
				t.Fatal(err)
			}

			if !sk.Equal(sk2) {
				t.Fatal()
			}
		})
	}
}
