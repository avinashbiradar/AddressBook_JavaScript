  const fs = require("fs")
  const readline = require('readline-sync')
   //prints the json content    
  const Filedata = fs.readFileSync('StoreAddressBookDetails.json','utf8'); 
  const data =JSON.parse(Filedata);

class AddressBook{     
  
  AddDetails=()=>{
  let fName = readline.question('Enter your First Name:') ;
  let LastName = readline.question('Enter your last name : ');
  let City = readline.question('Enter your City : ');
  let State = readline.question('Enter your State name : ');
  let zipCode = readline.question('Enter your ZipCode name : ');
  let PhoneNumber = readline.question('Enter your Phone Number : ');
  let Email = readline.question('Enter your Email name : ');

  data["Person"].push({
    firstName:fName,
    LastName:LastName,
    City:City,
    State:State,
    ZipCode:zipCode,
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
    let inputPhoneNumber=readline.question("Enter valid PhoneNumber to delete contact:  ")
    let tempArray=[];
    tempArray=data["Person"];
    let index = tempArray.map((item)=>
    {
      return item.PhoneNumber
    }).indexOf(inputPhoneNumber);
    console.log(index);
    data["Person"].splice(index,1);
     console.log(data);
     this.jsonWrite(data);
  }

  editContactDetails=()=>{
    let inputPhoneNumber=readline.question("Enter valid PhoneNumber to edit contact:  ")
    let tempArray=[];
    tempArray=data["Person"];
    let index = tempArray.map((item)=>{
      return item.PhoneNumber
    }).indexOf(inputPhoneNumber);
    console.log(index);
    data["Person"].splice(index,1,this.AddDetails());
     console.log(data);
     this.jsonWrite(data);
  }
    
  sortByName=()=>{
  console.log(data["Person"].sort(this.sortPersonByName));
  }

  sortPersonByName =(a,b)=>{
      let nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      let nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA<nameB) {
        return -1;
      }
      if (nameA>nameB) {
        return 1;
      }
      return 0;
    };
   

}
  module.exports = new AddressBook();
