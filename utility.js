  const fs = require("fs")
  const readline = require('readline-sync')
   //prints the json content    
  const Filedata = fs.readFileSync('StoreAddressBookDetails.json','utf8'); 
  const data =JSON.parse(Filedata);

class AddressBook{  
  firstNameValidator=()=> {
   let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
   let  fname = readline.question("Enter valid First name: ")
   if (NAME_PATTERN.test(fname)) {
       console.log("valid First Name:",fname);
   }
   else {
       console.log("Invalid First Name ");
       this.firstNameValidator();
      }
      return fname;
}
  lastNameValidator=()=> {
  let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  let lname = readline.question("Enter valid Last name: ")
  if (NAME_PATTERN.test(lname)) {
      console.log("valid Last Name: ",lname);
    }
  else {
      console.log("Invalid Last Name ");
      this.lastNameValidator();
    }
    return lname;
}
cityNameValidator=()=> {
  let CITY_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  let city_name = readline.question("Enter valid city name: ")
  if ( CITY_NAME_PATTERN.test(city_name)) {
      console.log("valid city Name: ",city_name);
    }
  else {
      console.log("Invalid city Name ");
      this.cityNameValidator();
    }
    return city_name;
}
stateNameValidator=()=> {
  let STATE_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  let state_name = readline.question("Enter valid state name: ")
  if ( STATE_NAME_PATTERN.test(state_name)) {
      console.log("valid state Name: ",state_name);
    }
  else {
      console.log("Invalid state Name ");
      this.stateNameValidator();
    }
    return state_name;
}
zipCodeValidator=()=> {
  let ZIP_CODE_PATTERN = new RegExp("^[0-9]{6}$");
  let zip = readline.question("Enter valid zipcode: ")
  if ( ZIP_CODE_PATTERN.test(zip)) {
      console.log("valid zip: ",zip);
    }
  else {
      console.log("Invalid zipcode ");
      this.zipCodeValidator();
    }
    return zip;
}
  emailValidator=()=>{
  let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
  let email = readline.question("Enter valid email : ");
  if (EMAIL_PATTERN.test(email)) {
      console.log("valid Email ",email);
  }
  else {
      console.log("Invalid Email ");
      this.emailValidator();
  }
  return email;
}
  phoneValidator=()=>{
  let PHONE_NUMBER_PATTERN = new RegExp("^91[ ]?[6-9]{1}[0-9]{9}$");
  let phoneNumber=readline.question("Enter valid Phone Number ");
  if (PHONE_NUMBER_PATTERN .test(phoneNumber)) {
      console.log("valid Phone Number ",phoneNumber);
  }
  else {
      console.log("Invalid Phone Number ");
      this.phoneValidator();
  }
  return phoneNumber;
}

  addDetails=()=>{
  console.log('Enter your first name : ');
  let firstName = this.firstNameValidator(); 
  console.log('Enter your last name : ');
  let LastName = this.lastNameValidator();
  console.log('Enter your City : ');
  let City = this.cityNameValidator();
  console.log('Enter your State name : ');
  let State =this.stateNameValidator();
  console.log('Enter your ZipCode name : ');
  let zipCode =this.zipCodeValidator();
  console.log('Enter your Phone Number : ');
  let PhoneNumber = this.phoneValidator();
  console.log('Enter your Email name : ');
  let Email = this.emailValidator();


  data["Person"].push({
    firstName:firstName,
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
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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
    console.log(data);
  console.log(data["Person"].sort(this.sortPersonByName));
  }

  sortPersonByName=(a,b)=>{
   
      let nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      let nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA<nameB) {
        return -1;
      }
      if (nameA>nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    };
    sortDetailsByZip=()=>{
      console.log(data);
      console.log(data["Person"].sort(this.sortPersonByZip));
    }
    sortPersonByZip=(a,b)=>{
      let zipA = a.ZipCode;
      let zipB = b.ZipCode
      if (zipA<zipB) {
        return -1;
      }
      if (zipA>zipB) {
        return 1;
      }
      return 0;
    }
  } 

  module.exports = new AddressBook();