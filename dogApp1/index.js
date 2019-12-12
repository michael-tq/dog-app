'use strict';

function getDogImage(number) {
    if (number === '') {
        fetch('https://dog.ceo/api/breeds/image/random/3')
       .then(response => response.json())
       .then(responseJson => console.log(responseJson));
    }
    else if (number < 3 || number > 50) {
        alert('Number out of range!');
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
       .then(response => response.json())
       .then(responseJson => console.log(responseJson)); 
    }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let number = $('#dog-number').val();
    getDogImage(number);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});