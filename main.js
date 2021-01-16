const utility = require('./utility');
const readline = require('readline-sync');
let relaunch;
do{
console.log( "\n1.Add Details:\n", "2.Display Details:\n", "3.Delete Details:\n", "4.Edit Details:\n", "5.Find person:\n","6.Sorting:\n");
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
        utility.findPerson();
        break;
    case 6:
        utility.Sort_by_FirstName_City_ZipCode_State();
        break;
    default:
        break;  
}

 relaunch = readline.question('Do you want to continue?(Y/N)->') 
}while(relaunch=='Y'||relaunch=='y');



