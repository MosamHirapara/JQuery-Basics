// DOM (Document Object Model) Manipulation


// **** sigle css property **** //
// $('p.para1').css('color', 'indigo')
// using DOM we can add multiple css property to a target
$('p.para1').css({ color: 'indigo', background: 'skyblue' })
// $('p.para2').addClass('myclass') // myclass has some css properties we addclass in jquery to the para 2 then those css properties will be applied to para 2
// $('p.para2').removeClass('myclass') // this method is to remove class
// toggle class can make work easy 
$('#btn1').click(function () {
    $('p.para2').toggleClass('myclass')
})

//adding text to the blank div
//$('#mydiv').text('JQuery DOM')

//add HTML code to the div tag
//this JQuery code overrides the above JQuery code
//$('#mydiv').html('<center><h4>This Line Is Added By JQuery</h4></center>')

// ----- adding item to the list ----- //
// by append method the item will be added to last element of list
$('ul').append('<li>append list</li>');

//by prepend method the item will be added as first element of list
$('ul').prepend('<li>Prepend List </li>');

// adding something before tag after page is ready
$('ul').before('<h5>Added Line Before using Before method in JQuery.')

//adding something after tag using after method
$('ul').after('<h5> Added Line After using After method in JQuery. </h5>')


// ----- DETACH and EMPTY method //

// difference between detach and empty method is that detach removes whole tag from the html document and empty removes all the elements inside the tag but tag is still present in html document
//make your list empty using empty method
$('ul').empty()
//we can remove whole tag from html using detach method
$('ul').detach()