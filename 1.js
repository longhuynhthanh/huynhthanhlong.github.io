document.addEventListener("DOMContentLoaded", function () {
	var menu = document.querySelectorAll('.dsmenu ul.menu li');
	var dsnoidung = document.querySelectorAll('.thongtinchitiet ul li');
	for (var i = 0; i < menu.length; i++) {
	 menu[i].addEventListener('click', function(){
	 	for (var k = 0; k < menu.length; k++) {
	 		menu[k].classList.remove('active');
	 		dsnoidung[k].classList.remove('active2');
	 		dsnoidung[k].classList.remove('chuyendong');
	 	}
	 	this.classList.add('active');
	 	var slidemuonchon = this;
	 	var k = 0;
	 	for (k = 0; slidemuonchon = slidemuonchon.previousElementSibling; k++) {}
	 	dsnoidung[k].classList.add('active2');
	    dsnoidung[k].classList.add('chuyendong');
	 })
	 }
	// body...
}, false)