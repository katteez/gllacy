/********** Модальное окно "Обратная связь" **********/
var btnOpenFeedback = document.querySelector("#button-open-feedback");
var popupFeedback = document.querySelector(".modal-feedback");
var btnCloseFeedback = document.querySelector(".modal-feedback .button-close");
var overlay = document.querySelector(".modal-overlay");

if (btnOpenFeedback && popupFeedback && btnCloseFeedback) {
  var form = popupFeedback.querySelector("form");
  var fieldName = popupFeedback.querySelector("#user-name");
  var fieldEmail = popupFeedback.querySelector("#feedback-email");
  var fieldText = popupFeedback.querySelector("#user-feedback");
  btnOpenFeedback.addEventListener("click", function (event) {
    event.preventDefault();
    popupFeedback.classList.add("show");
    overlay.classList.add("show");
    fieldName.focus();
  });
  form.addEventListener("submit", function (event) {
    if (!fieldName.value || !fieldEmail.value || !fieldText.value) {
      event.preventDefault();
      popupFeedback.classList.remove("modal-error");
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      popupFeedback.classList.add("modal-error");
    }
  });
  btnCloseFeedback.addEventListener("click", function (event) {
    event.preventDefault();
    popupFeedback.classList.remove("show");
    overlay.classList.remove("show");
    popupFeedback.classList.remove("modal-error");
  });
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popupFeedback.classList.contains("show")) {
        popupFeedback.classList.remove("show");
        overlay.classList.remove("show");
        popupFeedback.classList.remove("modal-error");
      }
    }
  });
}

/********** Карта **********/
window.onload = function () {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9389, 30.3259)
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9385, 30.3229);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}