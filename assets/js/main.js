/*
*Copyright@2019
* Author: Zweli Mthethwa
*/
let state = 'home';
$( document ).ready(function() {
  $(".button-collapse").sideNav();

});


// change state helper function
function showContentDiv(div){
  var divs = ['about', 'home', 'men', 'women', 'contact'];
  var divIndex = divs.indexOf(div);
  for(var i = 0; i<divs.length; i++){
    if(i != divIndex){
      $('#' + divs[i]).addClass('hide');
    }
  }
  $('#'+div).removeClass('hide');
}
function changeState(state){
  switch(state){
    case 'home':
      showContentDiv('home');
      break;
    case 'about':
      showContentDiv('home');
      break;
    case 'men':
      showContentDiv('men');
      break;
    case 'women':
      showContentDiv('women');
      break;
    case 'home':
        showContentDiv('home');
        break;
    case 'contact':
        showContentDiv('contact');
        break;
    default:
      break;
}
