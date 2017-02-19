var popupButton = document.querySelector('.modal__header');
var popup = document.querySelector('.modal__popup');

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

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.9471509, lng: -111.6930732},
    zoom: 10,
    scrollwheel: false
  });
}
