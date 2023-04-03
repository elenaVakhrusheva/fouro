let count = document.querySelector('.container-photo');

function toogleCount6() {
  if (count.classList.contains('count-photo-default') || count.classList.contains('count-photo-3')) {
    count.classList.remove('count-photo-default') || count.classList.remove('count-photo-3');
		count.classList.add('count-photo-6');       
	} else  {
    count.classList.add('count-photo-default'); 
  }
}
function toogleCount3() {
   if (count.classList.contains('count-photo-default') || count.classList.contains('count-photo-6')) {
    count.classList.remove('count-photo-default') || count.classList.remove('count-photo-6');
    count.classList.add('count-photo-3'); 
  } else {
    count.classList.add('count-photo-default'); 
  }
}