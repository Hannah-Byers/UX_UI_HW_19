$(document).ready(function() {
    // jQuery code for the button interaction
    $('#viewProjectButton').click(function() {
        $(this).css('background-color', 'pink'); // Change background color to pink on click
    });
});

function scrollToSection(myWork) {
    var section = document.getElementById(myWork);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}