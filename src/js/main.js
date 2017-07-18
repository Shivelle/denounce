

	// grab stuff
    const scrollLine  	= document.querySelector('.scroll-line'), 
          mainContent 	= document.querySelector('.main-content'), 
          canvas 	  	= document.querySelector('#canvas'),  
          greeting    	= document.querySelector('.greeting'),  
          hi 		  	= document.querySelector('.hi'),  
          welcome		= document.querySelector('.welcome'), 
          time 		 	= new Date();  


    console.log(canvas)

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

    function displayGreeting() {

    	if(time.getHours() >= 0 && time.getHours() < 6) {
    		greeting.innerHTML 	= 'Na, Sie Nachteule?'; 
    		hi.innerHTML 		= 'Gute, aktive Nacht!';
    		welcome.innerHTML	= 'Sie haben sich also mitten in der Nacht auf meine Website verirrt.'; 


    	} else if (time.getHours() >= 6 && time.getHours() < 12) {
    		greeting.innerHTML	= 'Morgenstund hat Gold im Mund!';
    		hi.innerHTML 		= 'Guten Morgen!'; 
    		welcome.innerHTML 	= 'Morgens, vor 12, und Sie haben meine Website gefunden.'; 


    	} else if (time.getHours() >= 12 && time.getHours() < 18) {
    		greeting.innerHTML 	= 'Lass die Sonne in dein Herz!'; 
    		hi.innerHTML		= 'Guten Tag!'; 
    		welcome.innerHTML 	= 'Na, schon Mittagpause gehabt? Schön, dass Sie meine Website besuchen.'; 



    	} else {
    		greeting.innerHTML 	= 'Feierabend, wie das duftet!';  
    		hi.innerHTML 		= 'Guten Abend!'; 
    		welcome.innerHTML 	= 'Noch schnell zum Feierabend auf meiner Website vorbeischauen? Finde ich gut!'; 

    	}
    } 

    // event listeners
    window.addEventListener('scroll', debounce(fillScrollLine));
    window.addEventListener('load', displayGreeting); 

    // vendor functions ================================================
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

		// compiled typescript -> es5 -> es6
		(() => {
		  let COLORS;
		  let Confetti;
		  let NUM_CONFETTI;
		  let PI_2;
		  let canvas;
		  let confetti;
		  let context;
		  let drawCircle;
		  let drawCircle2;
		  let drawCircle3;
		  let i;
		  let range;
		  let xpos;

		  NUM_CONFETTI = 60;

		  COLORS = [[255, 255, 255], [255, 144, 0], [255, 255, 255], [255, 144, 0], [0, 277, 235]];

		  PI_2 = 2 * Math.PI;

		  canvas = document.getElementById("canvas");

		  context = canvas.getContext("2d");

		  window.w = 0;

		  window.h = 0;

		  window.resizeWindow = () => {
		    window.w = canvas.width = window.innerWidth;
		    return window.h = canvas.height = window.innerHeight;
		  };

		  window.addEventListener('resize', resizeWindow, false);

		  window.onload = () => setTimeout(resizeWindow, 0);

		  range = (a, b) => (b - a) * Math.random() + a;

		  drawCircle = (x, y, r, style) => {
		    context.beginPath();
		    context.moveTo(x, y);
		    context.lineTo(x + 2, y);
		    context.lineTo(x + 2, y - 2);
		    context.lineTo(x, y);
		    context.closePath();
		    context.fillStyle = style;
		    return context.fill();
		  };

		  drawCircle2 = (x, y, r, style) => {
		    context.beginPath();
		    context.moveTo(x, y);
		    context.lineTo(x + 2, y);
		    context.lineTo(x + 2, y - 2);
		    context.lineTo(x, y);
		    context.closePath();
		    context.fillStyle = style;
		    return context.fill();
		  };

		  drawCircle3 = (x, y, r, style) => {
		    context.beginPath();
		    context.moveTo(x, y);
		    context.lineTo(x + 2, y);
		    context.lineTo(x + 2, y - 2);
		    context.lineTo(x, y);
		    context.closePath();
		    context.fillStyle = style;
		    return context.fill();
		  };

		  xpos = 0.9;

		  document.onmousemove = e => xpos = e.pageX / w;

		  window.requestAnimationFrame = ((() => window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || (callback => window.setTimeout(callback, 100 / 20))))();

		  Confetti = ((() => {
		    class Confetti {
		      constructor() {
		        this.style = COLORS[~~range(0, 5)];
		        this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
		        this.r = ~~range(2, 6);
		        this.r2 = 2 * this.r;
		        this.replace();
		      }

		      replace() {
		        this.opacity = 0;
		        this.dop = 0.03 * range(1, 4);
		        this.x = range(-this.r2, w - this.r2);
		        this.y = range(-20, h - this.r2);
		        this.xmax = w - this.r;
		        this.ymax = h - this.r;
		        this.vx = range(0, 2) + 8 * xpos - 5;
		        return this.vy = 0.7 * this.r + range(-1, 1);
		      }

		      draw() {
		        let ref;
		        this.x += this.vx;
		        this.y += this.vy;
		        this.opacity += this.dop;
		        if (this.opacity > 1) {
		          this.opacity = 1;
		          this.dop *= -1;
		        }
		        if (this.opacity < 0 || this.y > this.ymax) {
		          this.replace();
		        }
		        if (!((0 < (ref = this.x) && ref < this.xmax))) {
		          this.x = (this.x + this.xmax) % this.xmax;
		        }
		        drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
		        drawCircle3(~~this.x * 0.5, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
		        return drawCircle2(~~this.x * 1.5, ~~this.y * 1.5, this.r, `${this.rgb},${this.opacity})`);
		      }
		    }

		    return Confetti;
		  }))();

		  confetti = ((() => {
		    let j;
		    let ref;
		    let results;
		    results = [];
		    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
		      results.push(new Confetti);
		    }
		    return results;
		  }))();

		  window.step = () => {
		    let c;
		    let j;
		    let len;
		    let results;
		    requestAnimationFrame(step);
		    context.clearRect(0, 0, w, h);
		    results = [];
		    for (j = 0, len = confetti.length; j < len; j++) {
		      c = confetti[j];
		      results.push(c.draw());
		    }
		    return results;
		  };

		  step();
		}).call(this);


    // some hello msg
	console.log("woof!");