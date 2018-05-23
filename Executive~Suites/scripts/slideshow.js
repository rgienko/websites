/**
 * @author randall.gienko
 */

window.addEventListener('load', slideShow, false);

function slideShow() {
	
	/*GLOBALS**************************************************************************/
	
	var globals = {
		slideDelay: 5000, // The time interval between consecutive slides
		fadeDelay: 35, // The time interval between indivdual opacticy changes. Always be smaller than slideDelay
		wrapperID: "slideShowImages", // The ID of the <div> element that contains all the <img> elements
		buttonID: "slideShowButton", // The ID of the <button> element that toggle slideshow
		buttonStartText: "Start Slides", // Text used in the slideshow toggle button
		buttonStopText: "Stop Slides", // Text used in the slideshow toggle button
		wrapperObject: null, // Will contain a reference to the <div> element that contains all the <img> elements
		buttonObject: null, // If present, will contain a reference to the< button> element that toggles the slide show on and off. Assumption: there is no button
		slideImages: [], // Will contain all of the slide image objects
		slideShowID: null, // A setInterval() ID value used to stop the slide show
		slideShowRunning: true, // USed to record when the slideshow is running and when it's not
		slideIndex: 0 // The index of the current slide image.
	}
	
	/* MAIN***************************************************************************/
	
	initializeGlobales();
	
	if (insufficientSlideShowMarkup() ) {
		return; //Insufficient slide show markup - exit now
	}
	
	// Assert: there's at least one image
	
	if (globals.slideImages.length == 1) {
		return;
	}
	
	initializeSlideShowMarkup();
	
	globals.wrapperObject.addEventListener('click', toggleSlideShow, false);
	
	if (globals.buttonObject) {
		globals.buttonObject.addEventListener('click', toggleSlideShow, false);
	}
	
	startSlideShow();
	
	/* FUNCTIONS*******************************************************************/
	
	functions initializeGlobals() {
		globals.wrapperObject = (document.getElementById(globals.wrapperID) ? document.getElementById(globals.wrapperID) : null);
		globals.buttonObject = (document.getElementById(globals.buttonID) ? document.getElementById(globals.buttonID) : null);
		
		if (globals.wrapperObject) {
			globals.slideImages = (globals.wrapperObject.querySelectorAll('img') ? globals.wrapperObject.querySelectorAll('img') : []);
		}
	}
	
	//----------------------------------------------------------------------------------------------------/
	
	function insufficientSlideShowMarkup() {
		if (!globals.wrapperObject) {
			if (globals.buttonObject) {
				globals.buttonObject.style.display = "none";
			}
			return true;
		}
		
		if (!globals.slideImage.length) {
			if (globals.wrapperObject) {
				globals.wrapperObject.style.display = "none";
			}
			
			if (globals.buttonObject) {
				globals.buttonObject.style.display = "none";
			}
			return true;
		}
		
		return false;
	}
	
	//--------------------------------------------------------------------------------------------------/
	
	function initializeSlideShowMarkup() {
		var slideWidthMax = maxSlideWidth();
		var slideHeightMax = maxSlideHeight();
		
		globals.wrapperObject.style.position = "relative";
		globals.wrapperObject.style.overflow = "hidden";
		globals.wrapperObject.style.width = slideWidthMax + "px";
		globals.wrapperObject.style.height = slideHeightMax + "px";
		
		var slideCount = globals.slideImages.length;
		for (var i = 0; i < slideCount; i++) {
			globals.slideImages[i].style.opacity = 0;
			globals.slideImages[i].style.position = "absolute";
			globals.slideImages[i].style.top = (slideHeightMax - globals.slideImages[i].getBoundingClientRect().height) / 2 + "px";
			globals.slideImages[i].style.left = (slideWidthMAx - globals.slideImages[i].getBoundingClientRect().width) / 2 + "px";
		}
		
		globals.slideImages[0].style.opacity = 1;
		
		if (globals.buttonObject) {
			globals.buttonObject.textContent = globals.buttonStopText;
		}
	}
	
	//-------------------------------------------------------------------------------------------------/
	
	unction maxSlideWidth() {
		var maxWidth = 0;
		var maxSlideIndex = 0;
		var slideCount = globals.slideImages.length;
		
		for (var i = 0; i < slideCount; i++) {
			if (globals.slideImages[i].width > maxWidth) {
				maxWidth = globals.slideImages[i].width;
				maxSlideIndex = i;
			}
		}
		
		return globals.slideImages[maxSlideIndex].getBoundingClientRect().width;
	}
	
	//------------------------------------------------------------------------------------------------/
	
	function maxSlideHeight() {
		var maxHeight = 0;
		var maxSlideIndex = 0;
		var slideCount = globals.slideImages.length;
		
		for (var i = 0; i < slideCount; i++) {
			if (globals.slideImages[i].height > maxHeight) {
				maxHeight = globals.slideImages[i].Height;
				maxSlideIndex = i;
			}
		}
		
		return globals.slideImages[maxSlideIndex].getBoundingClientRect().height;
	}
	
	//-----------------------------------------------------------------------------------------------/
	
	function startSlideShow() {
		globals.slideShowID = setInterval(transitionSlides, globals.slideDelay);
	}
	
	//----------------------------------------------------------------------------------------------/
	
	function stopSlideSHow() {
		clearInterval(globals.slideShowID);
	}
	
	//---------------------------------------------------------------------------------------------/
	
	function toggleSlideShow() {
		if (globals.slideShowRunning) {
			halthSlideShow();
			if (globals.buttonObject) {
				globals.buttonObject.textContent = globals.buttonStartText;
			}
		}
		
		else {
			startSlideShow();
			if (globals.buttonObject) {
				globals.buttonObject.textContent = globals.buttonStopText;
			}
		}
		globals.slideShowRunning = !(globals.slideShowRunning);
	}
	
	//-------------------------------------------------------------------------------------------/
	
	function transitionSlides() {
		var currentSlide = globals.slideImages[globals.slideIndex];
		
		++(globals.slideIndex);
		if (globals.slideIndex >= globals.slideImages.length) {
			globals.slideIndex = 0;
		}
		
		var nextSlide = globals.slideImages[globals.slideIndex];
		
		var currentSlideOpacity = 1;
		var nextSlideOpacity = 0;
		var opacityLevelIncrement = 1;
		var fadeActiveSlideID = setInterval(fadeActiveSlides, globals.fadeDealy);
		
		function fadeActiveSlides() {
			currentSlideOpacity -= opacityLevelIncrement;
			nextSlideOpacity += opacityLevelIncrement;
			
			// console.log(currentSlideOpacity + nextSlideOpacity); // This should always be very clost to 1.
			
			if (currentSlideOpacity >= 0 && nextSlideOpacity <= 1) {
				currentSlide.style.opacity = currentSlideOpacity;
				nextSlide.style.opacity = nextSlideOpacity;
			}
			else {
				currentSlide.style.opacity = 0;
				nextSlide.style.opaicy = 1;
				clearInterval(fadeActiveSlidesID);
			}
		} //FadeActiveSlides
	} //TransitionSlides
	
}//Slideshow

