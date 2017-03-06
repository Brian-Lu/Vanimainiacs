var svg = document.getElementById("svg");
var h = $(window).height();
var w = $(window).width();
var rid = 0;
var circleButton = document.getElementById("b_circle");
var dvdButton = document.getElementById("b_dvd");
var stopButton = document.getElementById("b_stop");

//STOP
var stop = function(e) {
    window.cancelAnimationFrame(rid);
};
stopButton.addEventListener("click", stop);

var hypnosis = function(e) {
    window.cancelAnimationFrame(rid);
    var r = 0;
    var grow = true;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", w/2);
    c.setAttribute("cy", h/2);
    c.setAttribute("r", r);
    c.setAttribute("fill","pink");
    var circle = function() {
        while (svg.lastChild) {
	        svg.removeChild(svg.lastChild);
        }
	    svg.appendChild(c);
	    c.setAttribute("r", r);
	    if (r >= 0 && r <= 0.15*w) {
            if (grow){
		        r += 1;
	        }
	        else {
		        r -= 1;
	        }
	    }
	    if (r >= 0.15*w) {
	        r -= 1;
	        grow = false;
	    }
	    if (r == 0) {
	        grow = true;
	    }
	    rid = window.requestAnimationFrame(circle);
    };
    circle();
};

circleButton.addEventListener("click", hypnosis);

var dvd = function(e){
    window.cancelAnimationFrame(rid);
    var rh = 100;
    var rw = 200;
    var rx = Math.floor(Math.random() * (w - rw));
    var ry = Math.floor(Math.random() * (h - rh));
    var dx = 2.5;
    var dy = 2.5;
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", rw);
    rect.setAttribute("height", rh);
    rect.setAttribute("style", "fill:pink;");
    var drift = function() {
	    while (svg.lastChild) {
	        svg.removeChild(svg.lastChild);
        }
	    svg.appendChild(rect);
	    rect.setAttribute("x", rx);
	    rect.setAttribute("y", ry);
	    if (rx < 0 || rx > (w-rw)) {
	        dx = -1 * dx;
	    }
	    if (ry < 0 || ry > (h-rh)) {
	        dy = -1 * dy;
	    }
	    rx += dx;
	    ry += dy;
	    rid = window.requestAnimationFrame(drift);
    };
    drift();
};

dvdButton.addEventListener("click", dvd);