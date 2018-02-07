class Customer {
    constructor(name) {
        this.firstName = name.fname,
            this.lastName = name.lname;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
let obj = new Customer({ fname: "Mitto", lname: "Pal" });
document.write("Your Name is " + obj.getFullName());
