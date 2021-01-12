  const fs = require("fs")
  const readline = require('readline-sync')
  //prints the json content    
  const Filedata = fs.readFileSync('StoreAddressBookDetails.json','utf8'); 
  const data =JSON.parse(Filedata);
  console.log(data["Person"]);

class AddressBook{
   AddDetails=()=>{
   let firstName = readline.question('Enter your First Name:') ;
   let LastName = readline.question('Enter your last name : ');
   let City = readline.question('Enter your City : ');
   let State = readline.question('Enter your State name : ');
   let ZipCode = readline.question('Enter your ZipCode name : ');
   let PhoneNumber = readline.question('Enter your Phone Number : ');
   let Email = readline.question('Enter your Email name : ');
  
   data.Person.push({
     firstName:firstName,
     LastName:LastName,
     City:City,
     State:State,
     ZipCode:ZipCode,
     PhoneNumber:PhoneNumber,
     Email:Email
   });
   console.log( data["Person"]);
    //stores in a new file
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('StoreAddressBookDetails.json',jsonData);
    console.log(jsonData);
  }          
}


  module.exports = new AddressBook();
