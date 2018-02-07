class Employee {
    constructor(_fname, _lname, _salary) {
        this._fname = _fname;
        this._lname = _lname;
        this._salary = _salary;
        this.fname = _fname;
        this.lname = _lname;
        this.salary = (_salary < 0) ? 0 : _salary;
    }
    EmployeeTest() {
        return "Name : " + this.fname + " " + this.lname + " and Salary :" + this.salary;
    }
    applySalaryIncrement(n) {
        this.salary += this.salary * (n / 100);
    }
    printEmployeeYearlyPackage() {
        return "Yearly package of " + this.fname + " " + this.lname + " is " + (12 * this.salary);
    }
}
let obj1 = new Employee("Mike", "Tyre", 25000);
document.write("First Employee " + obj1.EmployeeTest());
document.write("<br>");
let obj2 = new Employee("Micky", "Mouse", 50000);
document.write("Second Employee " + obj2.EmployeeTest());
document.write("<br><br>");
document.write("<br> After 10% salary increments<br>");
obj1.applySalaryIncrement(10);
obj2.applySalaryIncrement(10);
document.write(obj1.EmployeeTest() + "<br>");
document.write(obj2.EmployeeTest() + "<br>");
document.write("<br><br>");
document.write(obj1.printEmployeeYearlyPackage());
document.write("<br>");
document.write(obj2.printEmployeeYearlyPackage());
