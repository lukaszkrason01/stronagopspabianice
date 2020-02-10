document.getElementById("menubutton").onclick = function() {showMenu()};
document.getElementById("fonta").onclick = function() {changeFont(1)};
document.getElementById("fontaa").onclick = function() {changeFont(2)};
document.getElementById("fontaaa").onclick = function() {changeFont(3)};
document.getElementById("contrast").onclick = function() {changeContrast()};
document.getElementById("showborder").onclick = function(){markLinks()};

var linkmarked = false;

function markLinks()
{
	
	var links = document.getElementsByTagName("a");
	if(linkmarked == false){
		for (var i = 0 ; i < links.length ; ++i)
			links[i].style.border = "solid 5px blue";
		
		linkmarked = true;
	}
	else{
		for (var i = 0 ; i < links.length ; ++i)
			links[i].style.border = "";
		
		linkmarked = false;
	}
}
function showMenu() {
	var x = document.getElementById("leftnav");
	if (x.style.display === "none") 
	{
		x.style.display = "block";
	} else 
	{
		x.style.display = "none";
	}
}


function changeFont(mod)
{
	var oldlink = document.getElementsByTagName("link").item(0);
	var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
	if(mod == 1) newlink.setAttribute("href", "assets/css/fonta.css");
	if(mod == 2) newlink.setAttribute("href", "assets/css/fontaa.css");
	if(mod == 3) newlink.setAttribute("href", "assets/css/fontaaa.css");
	
	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function changeContrast(){
	
	var oldlink = document.getElementsByTagName("link").item(1);
	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
		
	var element = document.getElementById("contrast");
	var htmlstring = element.innerHTML;

	  // use the native .trim() if it exists
	  //   otherwise use a regular expression  
	htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
	if(htmlstring == 'Wersja czarno-żółta') {
		newlink.setAttribute("href", "assets/css/morecontrast.css");
		element.innerHTML="Wersja czarno-biała";
	}
	else if(htmlstring == 'Wersja czarno-biała') {
		newlink.setAttribute("href", "assets/css/blackwhite.css");
		element.innerHTML="Wersja zwykła";
	}
	else{
		newlink.setAttribute("href", "assets/css/lesscontrast.css");
		element.innerHTML='Wersja czarno-żółta';
	}
	
	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}