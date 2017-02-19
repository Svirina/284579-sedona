var popupButton = document.querySelector('.modal__header');
var popup = document.querySelector('.modal__popup');
/*
var minusAdult = document.querySelector('#minusAdult');
var plusAdult = document.querySelector('#plusAdult');
var minusChild = document.querySelector('#minusChild');
var plusChild = document.querySelector('#plusChild');
var numAdult = document.querySelector('#numAdult').value;
var numChild = document.querySelector('#numChild').value;
*/
var map;

popupButton.classList.toggle('modal__header--clicked');
popup.classList.remove('modal__popup--active');
popup.classList.add('modal__popup--nonactive');
popup.classList.add('modal__popup--noanimation');

popupButton.addEventListener('click', function(event) {
	event.preventDefault();
    popupButton.classList.toggle('modal__header--clicked');
    popup.classList.remove('modal__popup--noanimation');
    popup.classList.toggle('modal__popup--active');
    popup.classList.toggle('modal__popup--nonactive');
});
/*
minusAdult.addEventListener('click', function(event) {
    event.preventDefault();
    if (numAdult > 0) {
        numAdult--;
        document.querySelector('#numAdult').value = numAdult;
    }
});

plusAdult.addEventListener('click', function(event) {
    event.preventDefault();
    numAdult++;
    document.querySelector('#numAdult').value = numAdult;
});

minusChild.addEventListener('click', function(event) {
    event.preventDefault();
    if (numChild > 0) {
        numChild--;
        document.querySelector('#numChild').value = numChild;
    }
});

plusChild.addEventListener('click', function(event) {
    event.preventDefault();
    numChild++;
    document.querySelector('#numChild').value = numChild;
});
*/
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.9471509, lng: -111.6930732},
    zoom: 10,
    scrollwheel: false
  });
}
