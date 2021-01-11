const fs = require("fs")
const readline = require('readline-sync')
class AddressBook{
   personDetails = {};
   AddDetails=()=>{
   let firstName = readline.question('Enter your First Name:') ;
   this.personDetails["FirstName"] = firstName;
   let LastName = readline.question('Enter your last name : ');
   this.personDetails["LastName"] = LastName;
   let PhoneNumber = readline.question('Enter your Phone Number : ');
   this.personDetails["PhoneNumber"] = PhoneNumber;
   let city = readline.question('Enter your City : ');
   this.personDetails["City"] = city;
   let State = readline.question('Enter your State name : ');
   this.personDetails["State"] = State;
   let ZipCode = readline.question('Enter your ZipCode name : ');
   this.personDetails["ZipCode"] = ZipCode;
   
   //stores in a new file
    let jsonData = JSON.stringify(this.personDetails).concat("\n");
    fs.writeFileSync('StoreAddressBookDetails.json',jsonData,{encoding:"utf8",flag:"a"});
      console.log(jsonData);
  }
}

  module.exports = new AddressBook();