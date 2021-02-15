// let isMobile = {
// 	Android: function() {return navigator.userAgent.match(/Android/i);},
// 	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
// 	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
// 	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
// 	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
// 	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
// };
// 		let body=document.querySelector('body');
// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.arrow');
// 	for(i=0; i<arrow.length; i++){
// 			let thisLink=arrow[i].previousElementSibling;
// 			let subMenu=arrow[i].nextElementSibling;
// 			let thisArrow=arrow[i];

// 			thisLink.classList.add('parent');
// 		arrow[i].addEventListener('click', function(){
// 			subMenu.classList.toggle('open');
// 			thisArrow.classList.toggle('active');
// 		});
// 	}
// }else{
// 	body.classList.add('mouse');
// }


$(document).ready(function () {
// Плавная прокрутка для всех ссылок: добавить класс go_to нужным ссылкам
$(".go_to").click(function () {
	var _href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
	return false;
});

	// добавление тени у шапки я. Прописать класс shadow
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$(".bluebg").addClass("shadow");
		}
		if ($(window).scrollTop() > 50) {
			$(".up").addClass("shadow");
		}
		else {
			$('.shadow').removeClass("shadow");
		}
	});



});