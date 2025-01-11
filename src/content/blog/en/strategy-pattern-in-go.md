---
title: 'Understanding the Strategy Pattern with Go'
publishDate: 2025-01-11
description: 'Learn about the Strategy design pattern, its advantages and disadvantages, with practical examples in Go.'
author: 'Febriansyah NR'
image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066'
tags: ['golang', 'design-patterns', 'architecture']
language: 'en'
---

## What is the Strategy Pattern?

The Strategy Pattern is a behavioral design pattern that enables you to define a family of algorithms, encapsulate each one, and make them interchangeable. It lets the algorithm vary independently from clients that use it.

## Advantages

1. **Flexibility**: Easily switch between different algorithms at runtime
2. **Encapsulation**: Each algorithm is isolated and can be modified independently
3. **Testability**: Algorithms can be tested separately
4. **Eliminates Complex Conditionals**: Replaces complex if-else statements with polymorphic behavior
5. **Open/Closed Principle**: New strategies can be added without modifying existing code

## Disadvantages

1. **Increased Complexity**: Can overcomplicate simple problems
2. **Memory Overhead**: Each strategy is a separate object
3. **Client Must Know Strategies**: Clients need to understand the differences between strategies
4. **Communication Overhead**: Strategy and Context objects may need to share data
5. **Potential Overkill**: May be unnecessary for applications with few algorithms

## Implementation in Go

Here's a practical example implementing different payment strategies:

```go
package payment

// PaymentStrategy defines the interface for payment methods
type PaymentStrategy interface {
    Pay(amount float64) error
}

// CreditCardPayment implements PaymentStrategy
type CreditCardPayment struct {
    CardNumber string
    CVV        string
    ExpiryDate string
}

func (c *CreditCardPayment) Pay(amount float64) error {
    // Implementation for credit card payment
    fmt.Printf("Paid %.2f using Credit Card %s\n", amount, c.CardNumber)
    return nil
}

// PayPalPayment implements PaymentStrategy
type PayPalPayment struct {
    Email string
}

func (p *PayPalPayment) Pay(amount float64) error {
    // Implementation for PayPal payment
    fmt.Printf("Paid %.2f using PayPal account %s\n", amount, p.Email)
    return nil
}

// CryptoPayment implements PaymentStrategy
type CryptoPayment struct {
    WalletAddress string
}

func (b *CryptoPayment) Pay(amount float64) error {
    // Implementation for crypto payment
    fmt.Printf("Paid %.2f using Crypto wallet %s\n", amount, b.WalletAddress)
    return nil
}

// PaymentContext holds the payment strategy
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

## Usage Example

Here's how to use the payment strategies:

```go
func main() {
    // Create payment strategies
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
    
    // Create payment context
    context := NewPaymentContext(creditCard)
    
    // Execute payments with different strategies
    context.ExecutePayment(100.00) // Uses credit card
    
    context.SetStrategy(paypal)
    context.ExecutePayment(50.00) // Uses PayPal
    
    context.SetStrategy(crypto)
    context.ExecutePayment(75.00) // Uses crypto
}
```

## Real-World Applications

1. **Payment Processing**: Different payment methods as shown above
2. **Data Compression**: Various compression algorithms
3. **Authentication**: Multiple authentication methods
4. **Sorting Algorithms**: Different sorting strategies based on data characteristics
5. **File Export**: Various file format export strategies

## Best Practices

1. **Keep It Simple**: Use only when you have a family of similar algorithms
2. **Consider Interface Design**: Make strategy interfaces focused and cohesive
3. **Document Strategies**: Clearly document when each strategy is appropriate
4. **Error Handling**: Implement consistent error handling across strategies
5. **Strategy Selection**: Provide guidance for selecting appropriate strategies

## Conclusion

The Strategy Pattern is powerful when you need to switch between similar algorithms dynamically. While it adds some complexity, it provides excellent flexibility and maintainability for systems with multiple algorithmic approaches. In Go, it works particularly well with interfaces and encourages clean, modular code.