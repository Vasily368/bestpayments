
/*----------menu-anchors--------*/

const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
	anchor.addEventListener('click',function(e){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID ).scrollIntoView({
			behavior:'smooth',
			block: 'start' 
		})
	})
}


/*-------------------аккордеон---------------------*/

$(document).ready(function(){
	$('.accordeon__content-top').click(function(event){
		$(this).toggleClass('active').next().slideToggle(300);
	});
});






/*---------------burger-menu-btn появляется--------------------*/

window.onscroll = function() {
    let intro = window.document.getElementById("intro").offsetTop;
    let fixed = document.querySelector(".fixed-element");
    let scrolled = window.pageYOffset;

    if(scrolled > intro) {
        fixed.style = 'display: block';
    } else {
        fixed.style = 'display: none';
    }
};

/*---------------------burger-menu--------------------------*/

function burgerMenu(selector){
	let menu = $(selector);
	let button = $('.burger__menu-btn');
	let links = $('.menu__hidden-link');
	let overlay =$('.overlay');

	button.on('click',(e)=>{
		e.preventDefault();
		toggleMenu();
	});
	links.on('click',()=>toggleMenu());
	overlay.on('click',()=>toggleMenu());

	function toggleMenu(){
		menu.toggleClass('burger__menu-active');
		if (menu.hasClass('burger__menu-active')){
			$('body').css('overflow','hidden');
		}else{
			$('body').css('overflow','visible');
		}
	}
}
burgerMenu('.menu__hidden-box');



/*-------------скрыть блок-----------*/


const button = document.querySelector('#off')

const content = document.querySelector('#content')


button.addEventListener('click',function(){

	content.classList.toggle('block__hidden-content')
})







