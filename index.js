// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//Objects
const obj ={
  EmpId: 1090037,
  Name: 'Dhanush',
  Age: 20,
  dob:12/03/1999,
  location:Chennai,
  Country:India,
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
    return this.getAge;
  },
  setAge : function(Age)
  {
    this.Age = Age;
  },
  getdob : function()
  {
    return this.getdob;
  },
  setdob : function(dob)
  {
    this.dob = dob;
  }
}

console.log(obj.setEmpId(37))
console.log(obj.getEmpId())
console.log(obj.setName('Dhanush'))
console.log(obj.getName())
console.log(obj.setAge(20))
console.log(obj.getAge())
console.log(obj.setdob('12/03/1999'))
console.log(obj.getdob())
console.log(obj.setlocation('Chennai'))
console.log(obj.getlocation())
console.log(obj.setCountry('India'))
console.log(obj.getCountry())
