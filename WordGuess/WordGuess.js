function nextPage() {
	document.getElementById('first-page').style.display = "none";
	secondPageReveal();
}
function secondPageReveal(){
	document.getElementById('second-page').style.display = "block";
}
function thirdPageReveal(){
	document.getElementById('third-page').style.display = "block";
	secondPageHide();
}
function secondPageHide(){
	document.getElementById('second-page').style.display = "none";
}









