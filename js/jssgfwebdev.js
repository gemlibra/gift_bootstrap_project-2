


//VARIABLES DECLARATIONS
const formsubmit = document.getElementById("myform");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const emailaddress = document.getElementById("email");
const emailpattern = document.getElementById("email");
const submitbtn = document.getElementById("btnsubmit");


//Adding Event Listener to button click. [NOTE: EROR: MODAL CLOSES IMMEDIATELY AFTER SHOWING, WITHOUT CLOSE BUTTON].
//================================================================================================================

/* THIS MODULE WORKS
//===================
 submitbtn.addEventListener("click", validateForm);

    function validateForm() {      
        if (firstname.value == '' || lastname.value == '' || emailaddress.value=='') {
            alert("Please fill-in all fields...!!!!!!");
            return false;
        } else {                
            $(formsubmit).submit(); 
          //  $("#gxModal").modal('show');   
             $("#gxModal").modal({ backdrop: 'static',keyboard: true});
        };
    }; 

*/

//TEST MODULE-2: THIS WORKS
//==========================


submitbtn.addEventListener("click", function() {
          validateForm();
      });
  
    function validateForm(event) {      
        if (firstname.value == '' || lastname.value == '' || emailaddress.value=='') {
            alert("Please fill-in all fields...!!!!!!");
            return false;
          } else {                
            $(formsubmit).submit(); 
          //  $("#gxModal").modal('show');   
             $("#gxModal").modal({ backdrop: 'static',keyboard: true});
         // event.preventDefault();
        };
  };  
  




//NOTE BELOW - DOCUMENTATION: using back-ticks to concatenate strings: begin string with tick "`" end the string with ticks"`".
//Separate the strings with invisible spaces ('') by tabbig over, after each string.
//NOTE: Use JQUERY selector ($) to select the values of classes or id from html to display.

// alert(" First Name : " + fname + " Last Name : " +  lname + " Email : " + email  + document.getElementById("myform") + "Form Submitted Successfully......");

