/*
      Project 01_06_01

      Author: Conner Duncan
      Date:   08.15.18

      Filename: script.js
*/

"use strict";

// global variables
var formValidity = true;

//Manages form submittion and calls validation functions
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    validateRequired();
    //    validateNumbers();

    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }

}

//Checks if required inputs are filled
function validateRequired() {
    var inputElements = document.getElementsByTagName("input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var elementCount = null;
    var currentElement = null;
    try {
        for (var i = 0; i < inputElements.length; i++) {
            if (inputElements[i].value === "") {
                inputElements[i].style.background = "rgb(255, 233, 233)";
                fieldsetValidity = false;
            } else {
                inputElements[i].style.background = "white";
            }
        }
        if (fieldsetValidity === false) {
            formValidity = false;
            throw "Please fill in all parts of the form.";
        } else {
            formValidity = true;
        }

        //        throw "I'm winging it";
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;

    }

}

//sets event listeners to call functions
function createEventListeners() {
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
    }
    if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm);
    }
}

// Calls function on load
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}

/*if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}*/
