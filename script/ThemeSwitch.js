var greenLogo = "../images/Logo.png";
var blueLogo = "../images/blue/Logo.png";

var greenStyle = "../Styles/StyleGreen.css";
var blueStyle =  "../Styles/StyleBlue.css";

var css = document.getElementById("css");
var img = document.getElementById("Logo");

if(sessionStorage.getItem("theme") == "blue"){
	css.href = blueStyle;
	img.src = blueLogo;
}else if(sessionStorage.getItem("theme") == "green"){
	css.href = greenStyle;
	img.src = greenLogo;
}

document.getElementById("badge").onclick = function switchTheme(){
	if(sessionStorage.getItem("theme") == "green" || sessionStorage.getItem("theme") == null){
		css.href = blueStyle;
		img.src = blueLogo;
		sessionStorage.setItem("theme" , "blue");
	}else{
		css.href = greenStyle;
		img.src = greenLogo;
		sessionStorage.setItem("theme" , "green");
	}
};

