
    $(document).ready(function(){
        // Smooth scrolling for navigation link
        $("#nav-projects").on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000, function() {
                $(".animate-left").addClass("slide-in");
                $(".animate-right").addClass("slide-in");
            });
        });

        //Handle scroll events with debouncing
        $(window).on('scroll', _.debounce(function() {
            var scrollPosition = $(window).scrollTop();
    
            if (scrollPosition <= 0) {
                $(".animate-left-out").removeClass("slide-out-left").addClass("animate-left fade-out");
                $(".animate-right-out").removeClass("slide-out-right").addClass("animate-right fade-out");
            }
        },200));

        // Animation handling for skill section
        var skillsSection = $('#skills');
        var languagesOval = $('#languages-oval');
        var technologiesOval = $('#technologies-oval');
        var skillsContainer = $('.skills-container');
    
        var hasAnimated = false; // Flag to track if animations have played
    
        // Function to check if an element is in view
        function isElementInView(element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();
    
            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    
        // Function to handle animations
        function handleAnimations() {
            if (isElementInView(skillsSection, false) && !hasAnimated) {
                // If skills section is in view and not already animated, animate the ovals
                languagesOval.addClass('animate-left');
                technologiesOval.addClass('animate-right');
    
                // Set the flag to true to prevent further animations
                hasAnimated = true;
    
                // Remove animations after they finish
                setTimeout(function() {
                    languagesOval.removeClass('animate-left');
                    technologiesOval.removeClass('animate-right');
                    skillsContainer.addClass('all-together'); // Add a class to keep them together
                }, 1000); // Wait for 1 second (animation duration) before removing classes
            }
        }
    
        // Call handleAnimations() on scroll
        $(window).on('scroll', function() {
            handleAnimations();
        });
    });
    
    $(document).ready(function() {
        // Toggle blur layer and about me section
        $("#show-about-me").click(function() {
            $(".blur-layer").fadeIn();
        });
    
        $("#close-about-me").click(function() {
            $(".blur-layer").fadeOut();
        });
    
        // Scroll animations
        $(window).scroll(function() {
            // Projects section animation
            if ($(this).scrollTop() > $("#projects").offset().top - $(window).height()) {
                $("#projects.animate-left").addClass("animated");
                $("#additional-projects.animate-right").addClass("animated");
            }
            // Skills section animation
            if ($(this).scrollTop() > $("#skills").offset().top - $(window).height()) {
                $(".oval-card.languages").addClass("animate-left");
                $(".oval-card.technologies").addClass("animate-right");
            }
        });
    });
    

    $(document).ready(function() {
        // Open modal when button is clicked
        $(".btn-open-modal").click(function() {
          var modalId = $(this).data("modal-id");
          $("#" + modalId).fadeIn();
        });
      
        // Close modal when close button or overlay is clicked
        $(".modal .modal-close").click(function() {
          $(this).closest(".modal").fadeOut();
        });
      
        $(window).click(function(event) {
          if (event.target.className === "modal") {
            $(event.target).fadeOut();
          }
        });
      });
      

   // Open Project Modal
function openProjectModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Close Project Modal
function closeProjectModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Open Experience Modal
function openExperienceModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Close Experience Modal
function closeExperienceModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// JavaScript for background image change on scroll
document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var scrollPosition = window.scrollY;
    var initialBackgroundImage = "url('/assets/portfolio-banner.png')";
    var newBackgroundImage = "url('/assets/portfolio-bg-img.png')";
    var textColorLight = "#2CCED2";
    var textColorDark = "#333333";
    

    // Function to update background image
    function updateBackgroundImage() {
        if (window.scrollY > scrollPosition) {
            // Scrolling down, change background image
            body.style.backgroundImage = newBackgroundImage;
            body.style.backgroundPosition = "100% 0" // start fromt the right
            setTextColor(textColorLight);

        } else if(window.scrollY === 0) {
                    // At the top, revert to the initial background image
                    setTimeout(function(){
                        body.style.backgroundImage = initialBackgroundImage;
                        setTextColor(textColorDark);
                    }, 500);
                    body.style.backgroundPosition = "center"
        }
        // Update scroll position
        scrollPosition = window.scrollY;
    }

    function setTextColor(color) {
        var allTextElements = document.querySelectorAll('*');
        allTextElements.forEach(function (element) {
            // Check if the element has text content to avoid affecting non-text elements
            if (element.nodeType === Node.ELEMENT_NODE && element.textContent.trim() !== '') {
                element.style.color = color;
            }
        });
    }

    // Listen for scroll events
    window.addEventListener("scroll", updateBackgroundImage);

    //initial text color setup
    setTextColor(textColorDark);
});

document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector('.navbar');

    function updateNavbar() {
        // Add or remove 'dark-mode' class based on your condition
        if (window.scrollY > scrollPosition) {
            // Scrolling down, enable dark mode
            body.classList.add('dark-mode');
        } else if (window.scrollY === 0) {
            // At the top, revert to light mode
            body.classList.remove('dark-mode');
        }

        // Update scroll position
        scrollPosition = window.scrollY;
    }

    // Listen for scroll events
    window.addEventListener("scroll", updateNavbar);

    // Initial setup
    updateNavbar();
});
    
