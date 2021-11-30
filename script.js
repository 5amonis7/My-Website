var mybutton = document.getElementById('myBtn');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if (document.documentElement.scrollTop > 100){
		mybutton.style.display = 'block';
	}else{
		mybutton.style.display = 'none';
	}
}
function topFunction(){
	document.documentElement.scroll({
		top: 0,
		behavior: 'smooth'
	});
};