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
  private lastReport: string

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting Department')
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  getReport() {
    console.log(this.reports)
  }

  addEmployee(name: string) {
    if (name === 'Mano') return
    this.employees.push(name)
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No Report Found')
  }
  set mostRecentReport(report: string) {
    if (!report) throw new Error('Please provide a valid report')
    this.addReport(report)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }
}

const accounting = new AccountingDepartment('d1', [])

accounting.mostRecentReport = 'Deu Certo, é nois'
console.log(accounting.mostRecentReport)

accounting.getReport()

accounting.addEmployee('Truta')
accounting.printEmployeeInfo()
