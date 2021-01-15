const utility = require('./utility');
const readline = require('readline-sync');
let relaunch;
do{
console.log(
    "\n1.Add Details:\n",
    "2.Display Details:\n",
    "3.Delete Details:\n",
    "4.Edit Details:\n",
    "5.Sort by First Name:\n",
    "6.Sort by Zip:\n",
    "7.Find person:");
let input = readline.questionInt('Enter your choice->');
switch (input) {
    case 1:
        utility.addDetails();
        break;
    case 2:
        utility.displayContact();
        break;
    case 3:
        utility.deleteContactDetails();
        break;
    case 4:
        utility.editContactDetails();
        break;
    case 5:
        utility.sortByName();
        break;
    case 6:
        utility.sortDetailsByZip();
        break;
    case 7:
        utility.findPerson();
        break;
    default:
        break;  
}

 relaunch = readline.question('Do you want to continue?(Y/N)->') 
}while(relaunch=='Y'||relaunch=='y');



