---
title: 'Memahami Strategy Pattern dengan Go'
publishDate: 2025-01-11
description: 'Pelajari tentang pola desain Strategy, kelebihan dan kekurangannya, dengan contoh praktis dalam Go.'
author: 'Febriansyah NR'
image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066'
tags: ['golang', 'design-patterns', 'architecture']
language: 'id'
---

## Apa itu Strategy Pattern?

Strategy Pattern adalah pola desain perilaku yang memungkinkan Anda mendefinisikan sekelompok algoritma, mengenkapsulasi masing-masing algoritma, dan membuatnya dapat saling dipertukarkan. Pola ini memungkinkan algoritma bervariasi secara independen dari klien yang menggunakannya.

## Kelebihan

1. **Fleksibilitas**: Mudah beralih antara algoritma berbeda saat runtime
2. **Enkapsulasi**: Setiap algoritma terisolasi dan dapat dimodifikasi secara independen
3. **Kemudahan Pengujian**: Algoritma dapat diuji secara terpisah
4. **Menghilangkan Kondisional Kompleks**: Menggantikan pernyataan if-else kompleks dengan perilaku polimorfik
5. **Prinsip Open/Closed**: Strategi baru dapat ditambahkan tanpa mengubah kode yang ada

## Kekurangan

1. **Peningkatan Kompleksitas**: Dapat memperumit masalah sederhana
2. **Overhead Memori**: Setiap strategi adalah objek terpisah
3. **Klien Harus Memahami Strategi**: Klien perlu memahami perbedaan antar strategi
4. **Overhead Komunikasi**: Objek Strategy dan Context mungkin perlu berbagi data
5. **Potensi Berlebihan**: Mungkin tidak diperlukan untuk aplikasi dengan sedikit algoritma

## Implementasi dalam Go

Berikut contoh praktis mengimplementasikan berbagai strategi pembayaran:

```go
package payment

// PaymentStrategy mendefinisikan interface untuk metode pembayaran
type PaymentStrategy interface {
    Pay(amount float64) error
}

// CreditCardPayment mengimplementasikan PaymentStrategy
type CreditCardPayment struct {
    CardNumber string
    CVV        string
    ExpiryDate string
}

func (c *CreditCardPayment) Pay(amount float64) error {
    // Implementasi untuk pembayaran kartu kredit
    fmt.Printf("Membayar %.2f menggunakan Kartu Kredit %s\n", amount, c.CardNumber)
    return nil
}

// PayPalPayment mengimplementasikan PaymentStrategy
type PayPalPayment struct {
    Email string
}

func (p *PayPalPayment) Pay(amount float64) error {
    // Implementasi untuk pembayaran PayPal
    fmt.Printf("Membayar %.2f menggunakan akun PayPal %s\n", amount, p.Email)
    return nil
}

// CryptoPayment mengimplementasikan PaymentStrategy
type CryptoPayment struct {
    WalletAddress string
}

func (b *CryptoPayment) Pay(amount float64) error {
    // Implementasi untuk pembayaran crypto
    fmt.Printf("Membayar %.2f menggunakan dompet Crypto %s\n", amount, b.WalletAddress)
    return nil
}

// PaymentContext menyimpan strategi pembayaran
type PaymentContext struct {
    strategy PaymentStrategy
}

func NewPaymentContext(strategy PaymentStrategy) *PaymentContext {
    return &PaymentContext{
        strategy: strategy,
    }
}

func (pc *PaymentContext) SetStrategy(strategy PaymentStrategy) {
    pc.strategy = strategy
}

func (pc *PaymentContext) ExecutePayment(amount float64) error {
    return pc.strategy.Pay(amount)
}
```

## Contoh Penggunaan

Berikut cara menggunakan strategi pembayaran:

```go
func main() {
    // Membuat strategi pembayaran
    creditCard := &CreditCardPayment{
        CardNumber: "1234-5678-9012-3456",
        CVV:        "123",
        ExpiryDate: "12/25",
    }
    
    paypal := &PayPalPayment{
        Email: "user@example.com",
    }
    
    crypto := &CryptoPayment{
        WalletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    }
    
    // Membuat context pembayaran
    context := NewPaymentContext(creditCard)
    
    // Eksekusi pembayaran dengan strategi berbeda
    context.ExecutePayment(100.00) // Menggunakan kartu kredit
    
    context.SetStrategy(paypal)
    context.ExecutePayment(50.00) // Menggunakan PayPal
    
    context.SetStrategy(crypto)
    context.ExecutePayment(75.00) // Menggunakan crypto
}
```

## Aplikasi Dunia Nyata

1. **Pemrosesan Pembayaran**: Berbagai metode pembayaran seperti contoh di atas
2. **Kompresi Data**: Berbagai algoritma kompresi
3. **Autentikasi**: Beberapa metode autentikasi
4. **Algoritma Pengurutan**: Strategi pengurutan berbeda berdasarkan karakteristik data
5. **Ekspor File**: Berbagai strategi ekspor format file

## Praktik Terbaik

1. **Jaga Kesederhanaan**: Gunakan hanya ketika Anda memiliki sekelompok algoritma serupa
2. **Pertimbangkan Desain Interface**: Buat interface strategi yang fokus dan kohesif
3. **Dokumentasikan Strategi**: Dokumentasikan dengan jelas kapan setiap strategi sesuai
4. **Penanganan Error**: Implementasikan penanganan error yang konsisten di semua strategi
5. **Pemilihan Strategi**: Berikan panduan untuk memilih strategi yang sesuai

## Kesimpulan

Strategy Pattern sangat kuat ketika Anda perlu beralih antara algoritma serupa secara dinamis. Meskipun menambah kompleksitas, pola ini memberikan fleksibilitas dan kemudahan pemeliharaan yang sangat baik untuk sistem dengan berbagai pendekatan algoritmik. Dalam Go, pola ini bekerja sangat baik dengan interface dan mendorong kode yang bersih dan modular.
