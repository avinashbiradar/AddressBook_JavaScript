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
    this.displayContact();
    this.jsonWrite(data);
  }
  jsonWrite=(data)=>{
    //stores in a new files
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('StoreAddressBookDetails.json',jsonData);
    console.log(jsonData);
  }  
  displayContact=()=>{
    console.log( data["Person"]);
  }
  findPerson=()=>{
    let input = readline.question("1.find by firstName 2.find by PhoneNumber")
    if(input==1){
       let firstName = readline.question("First name: ")
       console.log(data["Person"].filter(find=>find.firstName===firstName));
      }
      else if(input==2){let PhoneNumber = readline.question("Phone Number: ")
      console.log(data["Person"].filter(find=>find.PhoneNumber===PhoneNumber));
    } 
  }
  deleteContactDetails=()=>{
    let inputPhoneNumber=readline.question("Enter valid PhoneNumber:  ")
    let tempArray=[];
    tempArray=data["Person"];
    let index = tempArray.map((item)=>{
      return item.PhoneNumber
    }).indexOf(inputPhoneNumber);
    console.log(index);
    data["Person"].splice(index,1);
     console.log(data);
     this.jsonWrite(data);
  }

}

  module.exports = new AddressBook();