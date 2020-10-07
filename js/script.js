var link1 = document.querySelector(".catalog-navigation-link");
var catalog_menu = document.querySelector(".catalog-navigation-wrapper");

var link2 = document.querySelector(".input-search");
var button = document.querySelector(".button-search");
var header_logo = document.querySelector(".main-header-logo");
var nav_wrapper = document.querySelector(".navigation-top-wrapper");
var site_nav = document.querySelector(".site-navigation");

var slider_link1 = document.querySelector(".slider-controls-item-1");
var slider_link2 = document.querySelector(".slider-controls-item-2");
var slider_link3 = document.querySelector(".slider-controls-item-3");
var slide1 = document.querySelector(".slider-item-1");
var slide2 = document.querySelector(".slider-item-2");
var slide3 = document.querySelector(".slider-item-3");

var slide4 = document.querySelector(".services-item-1");
var slide5 = document.querySelector(".services-item-2");
var slide6 = document.querySelector(".services-item-3");
var service_item1 = document.querySelector(".services-navigation-item-1");
var service_item2 = document.querySelector(".services-navigation-item-2");
var service_item3 = document.querySelector(".services-navigation-item-3");

var popup_link1 = document.querySelector(".contacts-button");
var popup1 = document.querySelector(".modal-write-us");
var close1 = document.querySelector(".modal-write-close");

var popup_link2 = document.querySelector(".map-link");
var popup2 = document.querySelector(".modal-map");
var close2 = document.querySelector(".modal-map-close"); 


link1.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	catalog_menu.classList.toggle("catalog-navigation-show");
});
link1.addEventListener("click", function(evt) {
	evt.preventDefault();
	catalog_menu.classList.remove("catalog-navigation-show");
});


link2.addEventListener("click", function(evt) {
	evt.preventDefault();
	button.classList.add("header-button-show");
	header_logo.classList.add("main-header-logo-pad");
	nav_wrapper.classList.add("navigation-top-wrapper-mar");
});
site_nav.addEventListener("click", function(evt) {
	evt.preventDefault();
	button.classList.remove("header-button-show");
});


slider_link1.addEventListener("click", function(evt) {
	slide1.classList.add("slider-show");
	slide2.classList.remove("slider-show");
	slide3.classList.remove("slider-show");
});
slider_link2.addEventListener("click", function(evt) {
	slide1.classList.remove("slider-show");
	slide2.classList.add("slider-show");
	slide3.classList.remove("slider-show");
});
slider_link3.addEventListener("click", function(evt) {
	slide1.classList.remove("slider-show");
	slide2.classList.remove("slider-show");
	slide3.classList.add("slider-show");
});


service_item1.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide4.classList.add("services-item-show");
	slide5.classList.remove("services-item-show");
	slide6.classList.remove("services-item-show");
	service_item1.classList.add("services-navigation-item-current");
	service_item2.classList.remove("services-navigation-item-current");
	service_item3.classList.remove("services-navigation-item-current");
});
service_item2.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide4.classList.remove("services-item-show");
	slide5.classList.add("services-item-show");
	slide6.classList.remove("services-item-show");
	service_item1.classList.remove("services-navigation-item-current");
	service_item2.classList.add("services-navigation-item-current");
	service_item3.classList.remove("services-navigation-item-current");
});
service_item3.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide4.classList.remove("services-item-show");
	slide5.classList.remove("services-item-show");
	slide6.classList.add("services-item-show");
	service_item1.classList.remove("services-navigation-item-current");
	service_item2.classList.remove("services-navigation-item-current");
	service_item3.classList.add("services-navigation-item-current");
});


popup_link1.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup1.classList.add("modal-write-us-show");
});
close1.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup1.classList.remove("modal-write-us-show");
})


popup_link2.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup2.classList.add("modal-map-show");
});
close2.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup2.classList.remove("modal-map-show");
});
