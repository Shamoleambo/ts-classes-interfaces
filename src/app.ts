interface Aged {
  readonly age: number
}

interface Named {
  readonly name: string
}

interface Greetable extends Named, Aged {
  greet(phrase: string): void
}

class Person implements Greetable {
  name: string
  age = 30

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(`${this.name} says "${phrase}"`)
  }
}

let user1: Greetable

user1 = new Person('Tiago')

user1.greet('Olá')
