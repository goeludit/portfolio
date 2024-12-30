jQuery(document).ready(function($) {

   if ($('.ds-testimonials-section').length) {
		$('.ds-testimonials-slider').slick({
		  	infinite: true,
		  	arrows: true,
		  	autoplay: true,
		  	autoplaySpeed: 4000,
		  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
		  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>"
		});
    }
   

});



// Select all sections and navigation links (highlights the section in view)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Callback function for Intersection Observer
function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the link that matches the visible section
            const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
            activeLink.classList.add('active');
        }
    });
}

// Create an Intersection Observer
const observerOptions = {
    root: null,        // Use the viewport as the root
    threshold: 0.6,    // Trigger when 60% of the section is in view
};

const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Observe each section
sections.forEach(section => observer.observe(section));
