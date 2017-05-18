$(onReady); //shorthand for document.ready

function onReady() {
  console.log('loaded JS');

// create button that makes square box when clicked



$('#createBox').on('click', newBox);
function newBox() {
  var newBoxes = $('.boxes').append('<div class="box" style="background-color:#' + (Math.random()*0xFFFFFF<<0).toString(16) + '"> <button type="button" name="button" class="x">X</button>');
  console.log( newBoxes.children() );
}

$('.boxes').on('click', '.box', makeBlack);
function makeBlack() {
$(this).css('background', 'black');
  }

function randomColorChange() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

//   $('.boxes').on('click', '.x', removeBox);
// function removeBox () {
//     $('.box').remove();
//   }

$( ".boxes" ).on("click", ".x", function() {
$(this).parent().remove();
});
}
