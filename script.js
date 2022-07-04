function addEmp()
{

    // employee object - key value pairs
    employee={

   
    id:eid.value,
    name:ename.value,
    designation:edesignation.value,
    experience:eexperience.value,
    salary:esalary.value,
    location:elocation.value
}


// to store this data into local storage
// to covert the object into string because of localstorage only support string value
// to check the id key is already added or not in the localstorage

if(employee.id in localStorage)
{

    alert("Already existing")
}else{
localStorage.setItem(employee.id,JSON.stringify(employee))
alert("Employee details added sucessfully")
}
}
function searchEmp()
{
    sid=searchKey.value

    if(sid in localStorage)
    {

      employee=JSON.parse( localStorage.getItem(sid))
    //  console.log(employee);
      output.innerHTML=`<p>Id:${employee.id}</p>
      <p>Name:${employee.name}</p>
      <p>Designation:${employee.designation}</p>
      <p>Experience:${employee.experience}</p>
      <p>Salary:${employee.salary}</p>
      <p>Location:${employee.location}</p>`

    }else{
        alert("Invalid key")
    }
}

