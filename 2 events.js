//events


// Mouse Events //


// ----- ON Click Event ----- //

// $('#btn1').click(function () {
//     alert('You Just Clicked Button 1');
// })

/* ----- Another Way ----- */

// $('#btn2').on('click', function () {
//     alert('You Just Clicked Button 2');
// })


// hide and show para using on click event with button
// $('#btn1').click(function () {
//     $('.para').hide();
// })

// $('#btn2').click(function () {
//     $('.para').show();
// })

// hide and show using same button which can be possible using toggle method
// $('#btn1').click(function () {
//     $('.para').toggle();
// })


// ----- ON DoubleClick Event ----- //
// $('#btn1').dblclick(function () {
// $('.para').toggle();
// })


// Hover , Mouse enter and Mouse leave these 3 events are having very similar functionality


// ----- ON Hover Event ----- //
// $('#btn1').hover(function () {
//     $('.para').toggle();
// })

// ----- Mouse Enter Event ----- //
// $('#btn1').on('mouseenter', function () {
//     $('.para').toggle();
// })

// ----- Mouse Leave Event ----- //
// $('#btn1').on('mouseleave', function () {
//     $('.para').toggle();
// })

// ----- Working With Target ----- //
// $('.para').click(function (e) {

// getting className of an element
// confirm('Class Name of the Paragraph is : ' + e.currentTarget.className)



// checking if an element has any atttribute like id then and only then it will print the id othe
// if (e.currentTarget.hasAttribute('id')) {
//     alert('Element Id Is : ' + e.currentTarget.id)
// } else {
//     alert('Element does not have any attribute id')
// }

//getting outer html
// in outer html the result will be return as the whole tag content
// alert(e.currentTarget.outerHTML)

//getting inner html
// in inner html the result will be what are the contents in the tag
// alert(e.currentTarget.innerHTML)

// })


// ----- Working With Form ----- //

// Printing Submitted On Console Using Form id and Submit Method
$('#form').submit(function (e) {
    e.preventDefault();
    console.log('submitted. :-)')
})

// Printing Name Field Variable Name On Console 
$('#form').submit(function (e) {
    e.preventDefault();
    var name = $(':text#name').val()
    console.log(name)
})