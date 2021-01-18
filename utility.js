  const fs = require("fs")
  const readline = require('readline-sync')
   //prints the json content    
  const Filedata = fs.readFileSync('StoreAddressBookDetails.json','utf8'); 
  const data =JSON.parse(Filedata);

  let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
 let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
 let PHONE_NUMBER_PATTERN = new RegExp("^91[ ]?[6-9]{1}[0-9]{9}$");
 

class AddressBook{  

firstNameValidator=(fname)=> {
  let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  let  firstname = fname;
  let result=NAME_PATTERN.test(firstname);
  console.log(result);
  return result;
 
   // let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  // // let  fname = readline.question("Enter valid First name: ")
  //  if (NAME_PATTERN.test(fname)) {
  //      console.log("valid First Name:",fname);
  //  }
  //  else {
  //      console.log("Invalid First Name ");
  //      this.firstNameValidator();
  //     }
  //     return fname;
}

  lastNameValidator=(lname)=> {
    let  lastname = lname;
    let result=NAME_PATTERN.test(lastname);
    console.log(result);
    return result;
  // let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  // let lname = readline.question("Enter valid Last name: ")
  // if (NAME_PATTERN.test(lname)) {
  //     console.log("valid Last Name: ",lname);
  //   }
  // else {
  //     console.log("Invalid Last Name ");
  //     this.lastNameValidator();
  //   }
  //   return lname;
}

cityNameValidator=(city)=> {
  let CITY_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  let  City = city;
    let result=CITY_NAME_PATTERN.test(City);
    console.log(result);
    return result;
  // let city_name = readline.question("Enter valid city name: ")
  // if ( CITY_NAME_PATTERN.test(city_name)) {
  //     console.log("valid city Name: ",city_name);
  //   }
  // else {
  //     console.log("Invalid city Name ");
  //     this.cityNameValidator();
  //   }
  //   return city_name;
}

stateNameValidator=(state)=> {
  let STATE_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
  let  State = state;
    let result=STATE_NAME_PATTERN.test(State);
    console.log(result);
    return result;

  // let state_name = readline.question("Enter valid state name: ")
  // if ( STATE_NAME_PATTERN.test(state_name)) {
  //     console.log("valid state Name: ",state_name);
  //   }
  // else {
  //     console.log("Invalid state Name ");
  //     this.stateNameValidator();
  //   }
  //   return state_name;
}

zipCodeValidator=(zipcode)=> {
  let ZIP_CODE_PATTERN = new RegExp("^[0-9]{6}$");
  let  ZipCode = zipcode;
  let result=ZIP_CODE_PATTERN.test(ZipCode);
  console.log(result);
  return result;
  // let zip = readline.question("Enter valid zipcode: ")
  // if ( ZIP_CODE_PATTERN.test(zip)) {
  //     console.log("valid zip: ",zip);
  //   }
  // else {
  //     console.log("Invalid zipcode ");
  //     this.zipCodeValidator();
  //   }
  //   return zip;
}

emailValidator=(email)=>{
  let  Email = email;
  let result=EMAIL_PATTERN.test(Email);
  console.log(result);
  return result;
  // let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
  // let email = readline.question("Enter valid email : ");
  // if (EMAIL_PATTERN.test(email)) {
  //     console.log("valid Email ",email);
  // }
  // else {
  //     console.log("Invalid Email ");
  //     this.emailValidator();
  // }
  // return email;
}

phoneValidator=(phone)=>{
  let  phoneNumber = phone;
  let result=PHONE_NUMBER_PATTERN.test(phoneNumber);
  console.log(result);
  return result;
  // let PHONE_NUMBER_PATTERN = new RegExp("^91[ ]?[6-9]{1}[0-9]{9}$");
  // let phoneNumber=readline.question("Enter valid Phone Number ");
  // if (PHONE_NUMBER_PATTERN .test(phoneNumber)) {
  //     console.log("valid Phone Number ",phoneNumber);
  // }
  // else {
  //     console.log("Invalid Phone Number ");
  //     this.phoneValidator();
  // }
  // return phoneNumber;
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
    this.displayContact();
    let Phone= readline.question('Enter name to update:');
    console.log(data["Person"].filter(find=>find.PhoneNumber===Phone));
    let input = readline.questionInt("1.FirstName 2.LastName  3.State 4.City 5.Zipcode 6.PhoneNumber 7.Email");
    let temp;
    switch (input) {
            case 1:
                temp=readline.question('Enter to update:');
               data["Person"].forEach(element => {
                 if(element.PhoneNumber==Phone){
                   element.firstName=temp;
                 }
               });
                    this.jsonWrite(data);
                    this.displayContact();
               break;
            case 2:
                temp=readline.question('Enter to update:');
               data["Person"].forEach(element => {
                 if(element.PhoneNumber==Phone){
                   element.LastName=temp;
                 }
               });
                    this.jsonWrite(data);
                    this.displayContact();
               break;
            case 3:
                temp=readline.question('Enter to update:');
               data["Person"].forEach(element => {
                 if(element.PhoneNumber==Phone){
                   element.State=temp;
                 }
               });
                    this.jsonWrite(data);
                    this.displayContact();
               break;
            case 4:
                temp=readline.question('Enter to update:');
               data["Person"].forEach(element => {
                 if(element.PhoneNumber==Phone){
                   element.City=temp;
                 }
               });
                    this.jsonWrite(data);
                    this.displayContact();
               break;
            case 5:
                 temp=readline.question('Enter to update:');
                data["Person"].forEach(element => {
                  if(element.PhoneNumber==Phone){
                    element.ZipCode=temp;
                  }
                });
                     this.jsonWrite(data);
                     this.displayContact();
                break;
            case 6:
                temp=readline.question('Enter to update:');
               data["Person"].forEach(element => {
                 if(element.PhoneNumber==Phone){
                   element.PhoneNumber=temp;
                 }
               });
                    this.jsonWrite(data);
                    this.displayContact();
               break;
           case 7:
                temp=readline.question('Enter to update:');
                data["Person"].forEach(element => {
                  if(element.PhoneNumber==Phone){
                    element.Email=temp;
                  }
                });
                     this.jsonWrite(data);
                     this.displayContact();
                break;
           default:
            break;

    }
  } 

Sort_by_FirstName_City_ZipCode_State=()=>{
  this.displayContact();
  console.log( "\n1.Sort Details by firstname:\n", "2.Sort Details by zipCode:\n", "3.Sort Details by City:\n", "4.Sort Details by State:\n");
  let input = readline.questionInt('Enter your choice->');
switch (input) {
    case 1:
        this.sortByName();
        break;
    case 2:
        this.sortByZip();
        break;
    case 3:
        this.sortByCity();
        break;
    case 4:
        this.sortByState();
        break;
   default:
          break;
   }
}


sortByState=()=>{
  console.log(data["Person"].sort(this.sortPersonByState));
  }

sortPersonByState=(a,b)=>{
      let nameA = a.State.toUpperCase(); // ignore upper and lowercase
      let nameB = b.State.toUpperCase(); // ignore upper and lowercase
      if (nameA<nameB) {
        return -1;
      }
      if (nameA>nameB) {
        return 1;
      }
      // names must be equal
      return 0;
 };


sortByName=()=>{
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
sortByZip=()=>{
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
 sortByCity=()=>{
      console.log(data);
      console.log(data["Person"].sort(this.sortPersonByCity));
    }
 sortPersonByCity=(a,b)=>{
      let CityA = a.City.toUpperCase();
      let CityB = b.City.toUpperCase();
      if (CityA<CityB) {
        return -1;
      }
      if (CityA>CityB) {
        return 1;
      }
      return 0;
    }
  
    jsonWrite=(data)=>{
      //stores in a new files
      const jsonData = JSON.stringify(data);
      fs.writeFileSync('StoreAddressBookDetails.json',jsonData);
      console.log(jsonData);
    }  
  } 

  module.exports = new AddressBook();