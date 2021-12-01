

const footer = document.querySelector('.end');

function isInViewPort(e){
	const rect = e.getBoundingClientRect();
	return(
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

document.addEventListener('scroll',  function() {
	if (isInViewPort(footer) == true){
		document.querySelector('#myBtn').style.bottom = '65px';
	}
	else{
		document.querySelector('#myBtn').style.bottom = '20px';
	}
});



var mybutton = document.getElementById('myBtn');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if (document.documentElement.scrollTop > 100){
		mybutton.style.display = 'block';
	}else{
		mybutton.style.display = 'none';
	};
};
function topFunction(){
	document.documentElement.scroll({
		top: 0,
		behavior: 'smooth'
	});
};