abstract class Department {
  static fiscalYear = 2023
  protected employees: string[] = []

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string): {} {
    return { name }
  }

  abstract describe(): void

  addEmployee(employee: string): void {
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

  describe(): void {
    console.log(`Accounting Department - ID: ${this.id}`)
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

  describe(): void {
    console.log(`IT Department - ID: ${this.id}`)
  }
}

const accounting = new AccountingDepartment('d2', [])
accounting.describe()

const it = new ITDepartment('d1', ['Mano'])
it.describe()
