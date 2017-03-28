var menu_btn = document.querySelector(".main-header__menu-toggle");
var mobile_menu = document.querySelector(".main-nav");


menu_btn.addEventListener("click", function(event) {
	event.preventDefault();
	var header = document.querySelector(".main-header");
	var intro__bg = document.querySelector(".intro__bg");
	if(menu_btn.classList.contains("main-header__menu-open")){
		menu_btn.classList.remove("main-header__menu-open");
		mobile_menu.classList.add("main-nav--open");
		menu_btn.classList.add("main-header__menu-close");
		header.classList.add("main-header--mobile");
		intro__bg.classList.add("intro__bg--menu-open");
	}
	else {
		menu_btn.classList.add("main-header__menu-open");
		mobile_menu.classList.remove("main-nav--open");
		menu_btn.classList.remove("main-header__menu-close");
		header.classList.remove("main-header--mobile");
		intro__bg.classList.remove("intro__bg--menu-open");
	}
});
