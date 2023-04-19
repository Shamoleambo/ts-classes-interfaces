class Department {
  protected employees: string[] = []

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

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting Department')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  getReport() {
    console.log(this.reports)
  }

  addEmployee(name: string) {
    if (name === 'Mano') return
    this.employees.push(name)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }
}

const accounting = new AccountingDepartment('d1', [])

accounting.addEmployee('Truta')
accounting.printEmployeeInfo()
