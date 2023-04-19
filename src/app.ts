interface Person {
  name: string
  age: number

  greet(phrase: string): void
}

let user1: Person

user1 = {
  name: 'Tiago',
  age: 28,
  greet(phrase: string) {
    console.log(phrase)
  }
}

user1.greet('Olá')
