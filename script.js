var mybutton = document.getElementById('myBtn');

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