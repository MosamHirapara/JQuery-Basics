//selectors


// hiding all tags name h1
// $('h1').hide();

// hiding all tags whose id is heading1
// $('h1#heading1').hide();
// OR
// $('#heading1').hide();

// hiding all tags whose class is heading2
// $('h1.heading2').hide();
// OR
// $('.heading2').hide();

// changing color of span under p tag
$('p span').css('color', 'blue');
// this is the css selector which takes two arguments that which type of css property you want to change.


//change color of first elemet of list
// $('#list li:first').css('color', 'red')
// OR
$('ul#list li:first').css('color', 'red')

//change color of last element of list
// $('#list li:last').css('color', 'green')
// OR
$('ul#list li:last').css('color', 'green')

//change background of odd elements
// $('#list li:odd').css('background', 'orange')
// OR
$('ul#list li:odd').css('background', 'orange')
//since it takes index no. to apply the selector and every elements starts with 0 so in our point of view the second element is counted as odd no.

//change background of even elements
// $('#list li:even').css('background', 'orange')
// OR
$('ul#list li:even').css('background', 'aqua')

//change color of child using parent class

//changing color of perticular child using nth child method
$("ul.parent li:nth-child(2)").css('color', 'red')

//we can change the color of first child and last child directly using first-child and last-child selector
$("ul.parent li:first-child").css('color', 'red')






// ----- SELECTING INPUT TYPE  ------
//hiding the button by selecting its input type button
$(":button").hide();

//hiding the button by selecting its input type submit
$(":submit").hide();

//adding class to the form input by selecting its input type and then applying the css property using its classname
$(":text").addClass("forminput my-3");
$('.forminput').css('background', 'black');

//adding class to link by selecting its attribute (href) and changing some css properties of that links using jquery
$("[href]").addClass("btn btn-info");
$(".btn").css('background', 'yellow'); // changed the background color of link using its class
$(".btn").css('border', 'yellow'); // changed the border of the button

//hide everything in page
// $('*').hide();