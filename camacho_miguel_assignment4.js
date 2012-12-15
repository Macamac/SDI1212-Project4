/*
Miguel Camacho
SDI 1212
Project 4
Code Library Functions
*/

var myLib = function(){
	var inputPhone=window.prompt("Please enter your phone number \nin XXX-XXX-XXXX format","469-286-6809");
	var inputEmail=window.prompt("Please enter your email address.","mcamacho@fullsail.edu");
	//Validate 123-456-7890 pattern?
	/*	Pattern = /^ \					Open expression, This input pattern must match:
				(?([0-9]{3})\) 			The first three digits where each number is bewteen 0-9, 
<<<<<<< HEAD
				?[-. ]				Where a hyphen is optional
				?([0-9]{3})			The second three digits where each number is bewteen 0-9,
				[-. ]				Again, another hypen after this set is optional
				?([0-9]{4})			The thrid set of numbers must have four digits where each number is bewteen 0-9, 
				$/				End of the input.*/
	
=======
				?[-]					Where a hyphen is required
				?([0-9]{3})				The second three digits where each number is bewteen 0-9,
				[-]						Again, another hypen after this set is required
				?([0-9]{4})				The thrid set of numbers must have four digits where each number is bewteen 0-9, 
				$/						End of the input.*/
>>>>>>> Project 4 Update
	var validPhone = function(checkPhone){
		var valPhone = inputPhone,
		pattern = /^\(?([0-9]{3})\)?[-]([0-9]{3})?[-]([0-9]{4})$/;
			if (pattern.test(valPhone)) {
				return true;
			} else {
				return false;
			}
		};
	//Validate aaa@bbb.ccc email pattern?
	var validEmail = function(checkEmail){
		var valEmail = inputEmail,
		pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
			if (pattern.test(valEmail)) {
				return true;
			} else {
				return false;
			}
		};
	
//Below info is for notes, delete before turning in assignment
//IF LOST POINTS USE: //Extra Credit: lost points on project 1 for conditionals
//EC on lost points or messed up flow chart
//Whole library beeds to be built in the one function, one Library!!
//Each function below is a method of the library, so with newLib, calling a 
//Check Numeric function

	var checkNumeric = function(val){
		if (isNaN(val)){
			return false;
		} else{
			return true;
		}
	};
 

//Name function
	var areYouMC = function(val){
		if (val === "MC"){ 
			return true;
		} else {
			return false;
		}
	};

//Check Pattern function
	var checkString = function(val) {
		var strLen = val.length; //.lenght, no (), so it's a property of object
		for (var i=0; 1 <= strLen; i++) { 
			if (val.substring(i,i+1) === "-"){ //but here .length has () so it's a method o
				return i;
			}
		}
	};
	
	
	
	
	//return bracket same line with return
	return {
		"inputPhone":inputPhone,
		"validPhone":validPhone,
		"inputEmail":inputEmail,
		"validEmail":validEmail,
		"checkNumeric":checkNumeric,
		"areYouMC": areYouMC,
		"checkString": checkString
	}
	
	

//End Function	
};
var newLib = new myLib();

console.log("Is this a number? " + newLib.checkNumeric(122)); //the method is after the ., so here is method.function
console.log("Is This Miguel? " + newLib.areYouMC("MC"));
console.log("This dash is in position " + newLib.checkString("123-456-789"));
console.log("Is " + newLib.inputPhone + " a valid phone number? " + newLib.validPhone(newLib.inputPhone));
<<<<<<< HEAD
=======
console.log("Is " + newLib.inputEmail + " a valid email address? " + newLib.validEmail(newLib.inputEmail));
>>>>>>> Project 4 Update
