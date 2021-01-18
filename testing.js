const utility=require('./utility')
const assert=require('chai').assert;


describe("test for first name ", function() {    
        it("should give true output", function() {    
            let firstname=utility.firstNameValidator('Avinash') ;
            assert.isTrue(firstname=='Avinash',"pass");
        });  
        it("should give flase output", function() {    
            let firstname=utility.firstNameValidator('avinash') ;
            assert.isNotTrue(firstname=='avinash',"pass");
        });  
    });
    describe("test for last name ", function() {    
        it("should give true output", function() {    
            let lastname=utility.lastNameValidator('Biradar') ;
            assert.isTrue(lastname=='Biradar',"pass");
        });  
        it("should give flase output", function() {    
            let lastname=utility.lastNameValidator('biradar') ;
            assert.isNotTrue(lastname=='biradar',"pass");
        });  
    });

describe("test for email ", function() {    
        it("should give true output", function() {    
            let Email=utility.emailValidator('Abc123.xyz@bl.co.in') ;
            assert.isNotNumber(Email=='Abc123.xyz@bl.co.in',"pass");
        });  
        it("should give true output", function() {    
            let Email=utility.emailValidator('Avinash123@gmail.com') ;
            assert.isNotNumber(Email=='Avinashb123@gmail.com',"pass");
        });  
        it("should give flase output", function() {    
            let Email=utility.emailValidator('avinashgmail.com') ;
            assert.isNotTrue(Email=='avinashgmail.com',"pass");
        });  
    });
describe("test for phone number  ", function() {    
        it("should give true output", function() {    
            let phoneNumber=utility.phoneValidator('91 9923886906') ;
            assert.isTrue(phoneNumber=='91 9923886906',"pass");
        });  
        it("should give true output", function() {    
            let phoneNumber=utility.phoneValidator('919923886906') ;
            assert.isTrue(phoneNumber=='919923886906',"pass");
        });  
        it("should give true output", function() {    
            let phoneNumber=utility.phoneValidator('91 6923886906') ;
            assert.isTrue(phoneNumber=='91 6923886906',"pass");
        });  
        it("should give flase output", function() {    
            let phoneNumber=utility.phoneValidator('91 1234567890') ;
            assert.isNotTrue(phoneNumber=='91 1234567890',"pass");
        });  
        it("should give flase output", function() {    
            let phoneNumber=utility.phoneValidator('91123') ;
            assert.isNotTrue(phoneNumber=='91123',"pass");
        });  
    });
    describe("test for city name ", function() {    
        it("should give true output", function() {    
            let cityname=utility.cityNameValidator('Solapur') ;
            assert.isTrue(cityname=='Solapur',"pass");
        });  
        it("should give flase output", function() {    
            let cityname=utility.cityNameValidator('solapur') ;
            assert.isNotTrue(cityname=='solapur',"pass");
        });  
    });
    describe("test for state name ", function() {    
        it("should give true output", function() {    
            let statename=utility.stateNameValidator('Maharashtra') ;
            assert.isTrue(statename=='maharashtra',"pass");
        });  
        it("should give flase output", function() {    
            let statename=utility.stateNameValidator('maharashtra') ;
            assert.isNotTrue(statename=='solapur',"pass");
        });  
    });
    describe("test for zipcode ", function() {    
        it("should give true output", function() {    
            let zipcode=utility.zipCodeValidator('413004') ;
            assert.isTrue(zipcode=='413004',"pass");
        });  
        it("should give flase output", function() {    
            let zipcode=utility.zipCodeValidator('41300456') ;
            assert.isNotTrue(zipcode=='41300456r',"pass");
        });  
    });

 
    