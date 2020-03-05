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

//let ID=prompt('Enter ID')
//let name=prompt('Enter name')
//let age=prompt('Enter Age')
//let dob=prompt('Enter dob')
//let loc=prompt('Enter location')
//let cou=prompt('Enter Country')
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

//
function person(id){
  let id=id;
  this.name='hi';
  this.setid=function(id)
  {
    id=id;
  }
  this.getid=function()
  {
    return id;
  }
}
const person = new person('10');
person.setid(2)
console.log(person.getid())

//Total - Marks : Morning Task March 05
<html>
<head>
<script>
let n=prompt('Enter the Name');
let a=prompt('Enter the Mark 1');
let b=prompt('Enter the Mark 2');
let c=prompt('Enter the Mark 3');
if((a<=100 && a>=0 || b<=100 && b>=0 || c<=100 && c>=0) && (parseInt(a)=='number' && parseInt(b)=='number' && parseInt(c)=='number'))
{
const obj={Name:n,Mark1:a,Mark2:b,Mark3:c}
const obj2={Name:n,Total:Number(a)+Number(b)+Number(c)}
const obj3={Avg:obj2.Total/3}
const obj4={Name:n,Mark1:a,Mark2:b,Mark3:c,Avg:obj3.Avg}
console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)
}
else
{
   alert("Invalid");
}
</script>
</head>
</html>
