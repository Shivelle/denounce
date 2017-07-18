

	// grab stuff
    const scrollLine = document.querySelector('.scroll-line');
    const mainContent = document.querySelector('.main-content'); 


    // functions
    function fillScrollLine() {
      scrollLine.style.display = "block"; 
      const windowHeight    = window.innerHeight;
      // const fullHeight      = document.body.clientHeight;
      const fullHeight 		= mainContent.clientHeight; 
      const scrolled        = window.scrollY;
      const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 50;
      scrollLine.style.width = `${percentScrolled}%`;
    }

    // event listeners
    window.addEventListener('scroll', debounce(fillScrollLine));


    // vendor functions
    	// debounce function for scrollLine
	    function debounce(func, wait = 15, immediate) {
	      var timeout;
	      return function() {
	        var context = this, args = arguments;
	        var later = function() {
	          timeout = null;
	          if (!immediate) func.apply(context, args);
	        };
	        var callNow = immediate && !timeout;
	        clearTimeout(timeout);
	        timeout = setTimeout(later, wait);
	        if (callNow) func.apply(context, args);
	      };
	    } 



    // some hello msg
	console.log("woof!");