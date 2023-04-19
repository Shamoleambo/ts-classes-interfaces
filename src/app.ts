class Department {
  private employees: string[] = []

  constructor(private readonly id: string, private name: string) {}

  describe() {
    console.log(`Department (${this.id}): + ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo(): void {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('d1', 'Accounting')

accounting.describe()
accounting.addEmployee('Mano')
accounting.addEmployee('Truta')

accounting.printEmployeeInfo()
