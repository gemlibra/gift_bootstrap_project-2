

//JQUERY MODULE - MODULE CALLS JAVASCRIPT FUNCTION INSIDE JQUERY
//==============================================================

/*  $(window).load(function(){
       $("#btmsubmit").click(function() {
      formSubmit();  
       }); 
    });

OR  */

$(document).ready(function() {
    $("#btmsubmit").click(function() {
      formSubmit();
});
// Submit form after validating form input
//========================================
function formSubmit() { 

    if (formValidation()) {  // Calling validation function
        $("#myform").submit();  //form submission
        alert(`First Name: ${fname} Last Name: ${lname} Email: ${email}, Form Submitted Successfully......`);

        //NOATE:Above: using back-ticks to concatenate strings: begin string with tick "`" end the string with ticks"`".
        //Separate the strings with invisible spaces ('') by tabbig over, after each string.
        //NOTE: Use JQUERY selector ($) to select the values of classes or id from html to display.
         }
    };


// Name and Email validation Function.
//====================================
function formValidation() {
    var $fname = $('#fname');
    var $lname = $("#lname");
    var $emailpattern = $("#email").pattern;
   
    if ($fname == '' || $lname == '' || $email=='') {
        alert("Please fill all fields...!!!!!!");
        return false;
        } else {
        return true;
        };
    };
});
