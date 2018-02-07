interface IName{
    fname:string,
    lname:string
}

class Customer
{
  firstName:string;
  lastName:string;
  constructor(name:IName)
  {
      this.firstName=name.fname,
      this.lastName=name.lname
  }
  getFullName():string
  {
      return this.firstName+" "+this.lastName;
  }
}

let obj:Customer=new Customer({fname:"Mitto",lname:"Pal"});
document.write("Your Name is "+obj.getFullName());