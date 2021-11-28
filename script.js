var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var mybutton = document.getElementById('myBtn');
var submit = document.getElementById('submit');
home.addEventListener('click', function(){
		window.scroll({
			top: 90,
			left: 0,
			behavior: 'smooth'
		});
});
about.addEventListener('click', function(){
		window.scroll({
			top: 1100,
			left: 0,
			behavior: 'smooth'
		});
});
contact.addEventListener('click', function(){
		window.scroll({
			top: 3200,
			left: 0,
			behavior: 'smooth'
		});
});
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		mybutton.style.display = 'block';
	}else{
		mybutton.style.display = 'none';
	}
}
function topFunction(){
	document.body.scroll ({
		top: 0,
		behavior: 'smooth'
	});
	document.documentElement.scroll({
		top: 0,
		behavior: 'smooth'
	});
};