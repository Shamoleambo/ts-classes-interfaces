class Department {
  name: string
  private employees: string[] = []

  constructor(n: string) {
    this.name = n
  }

  describe() {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo(): void {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')

accounting.describe()
accounting.addEmployee('Mano')
accounting.addEmployee('Truta')

accounting.printEmployeeInfo()
