/**
 * @author randall.gienko
 */

 function goHome() {
     "use strict";
     window.open("index.html", "_top");
 }

 function showServices() {
     "use strict";
     document.getElementById("dropDown").classList.toggle("show");
 }

 function getServices() {
     "use strict";
     window.open("services.htm", "_top");
 }

 
 function getFacility() {
     "use strict";
     window.open("facility.htm", "_top");
 }

 function getAbout() {
     "use strict";
     window.open("about.htm", "_top");
 }

 function getContact() {
     "use strict";
     window.open("contact.htm", "_top");
 }

function serButtonEvent() {
    "use strict";
    document.getElementById("serButton").style.borderBottom = "4px solid green";
} 

function facButtonEvent() {
    "use strict";
    document.getElementById("facilityButton").style.borderBottom = "4px solid green";
}

function abtButtonEvent() {
    "use strict";
    document.getElementById("abtButton").style.borderBottom = "4px solid green";
}

function conButtonEvent() {
    "use strict";
    document.getElementById("contactButton").style.borderBottom = "4px solid green";
}


function included() {
    "use strict";
        var x, i, content;
        
        x = virtualContainer.getElementsByTagName("div")
        for (i = 0; i < x.length; i++) {
            if (x[i].className === "hvr-fade") {
                x[i].innerHTML = "INCLUDED";
                x[i].style.display = '';
                x[i].style.color = "white";
                x[i].style.backgroundColor = "green";
	            x[i].style.fontSize = "12pt";
                x[i].style.lineHeight = "75px";
                x[i].style.border = "1px solid #2098d1";
            } else {
                x[i].style.display = '';
            }
        }
    }

function revIncluded() {
    "use strict";
    var x, i;

    x = virtualContainer.getElementsByTagName("div")

    for (i = 0; i < x.length; i++) {
        if (x[i].id === "vOne") {
            x[i].innerHTML = "Telephone Ansering Services";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
            x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vTwo") {
            x[i].innerHTML = "Mail Forwarding";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px"
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vThree") {
            x[i].innerHTML = "Call Forwarding";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vFour") {
            x[i].innerHTML = "Mailbox";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vFive") {
            x[i].innerHTML = "Conference Room Access";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vSix") {
            x[i].innerHTML = "Receptionist";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vSeven") {
            x[i].innerHTML = "Local Number with Voicemail";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vEight") {
            x[i].innerHTML = "Business Address";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        } else if (x[i].id === "vNine") {
            x[i].innerHTML = "Executive Suites";
            x[i].style.display = '';
	        x[i].style.color = "black";
	        x[i].style.fontSize = "12pt";
	        x[i].style.lineHeight = "75px";
            x[i].style.backgroundColor = "";
            x[i].style.border = "1px solid black";
        }
    }
}    