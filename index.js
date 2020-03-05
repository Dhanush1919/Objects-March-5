const obj ={
  getEmpId : function()
  {
    return this.EmpId;
  },
  setEmpId : function(EmpId)
  {
    this.EmpId = EmpId;
  },
  getName : function()
  {
    return this.Name;
  },
  setName : function(Name)
  {
    this.Name = Name;
  },
  getAge : function()
  {
    return this.Age;
  },
  setAge : function(Age)
  {
    this.Age = Age;
  },
  getdob : function()
  {
    return this.dob;
  },
  setdob : function(dob)
  {
    this.dob = dob;
  },
  getlocation : function()
  {
    return this.location;
  },
  setlocation : function(location)
  {
    this.location = location;
  },
  getCountry : function()
  {
    return this.Country;
  },
  setCountry : function(Country)
  {
    this.Country = Country;
  },
}

let ID=prompt('Enter ID')
let name=prompt('Enter name')
let age=prompt('Enter Age')
let dob=prompt('Enter dob')
let loc=prompt('Enter location')
let cou=prompt('Enter Country')
console.log(obj.setEmpId(ID))
console.log(obj.getEmpId())
console.log(obj.setName(name))
console.log(obj.getName())
console.log(obj.setAge(age))
console.log(obj.getAge())
console.log(obj.setdob(dob))
console.log(obj.getdob())
console.log(obj.setlocation(loc))
console.log(obj.getlocation())
console.log(obj.setCountry(cou))
console.log(obj.getCountry())

