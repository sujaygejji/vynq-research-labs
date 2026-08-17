// =========================================================
// VYNQ RESEARCH LABS
// MAIN JAVASCRIPT
// =========================================================


// Wait until the complete HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // 1. SELECT IMPORTANT ELEMENTS
    // =====================================================

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelectorAll(
            ".nav-menu a, .hero-buttons a, .footer-links a"
        );

    const navMenu =
        document.querySelector(".nav-menu");

    const mobileMenuButton =
        document.querySelector(".mobile-menu-btn");



    // =====================================================
    // 2. SMOOTH SCROLLING WITH NAVBAR OFFSET
    // =====================================================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            // Only process internal links
            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                event.preventDefault();


                const targetSection =
                    document.querySelector(targetId);


                if (targetSection) {

                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    const sectionPosition =
                        targetSection.getBoundingClientRect().top +
                        window.scrollY;


                    window.scrollTo({

                        top:
                            sectionPosition -
                            navbarHeight,

                        behavior: "smooth"

                    });

                }


                // Close mobile menu
                if (navMenu) {

                    navMenu.classList.remove("active");

                }

            }

        });

    });



    // =====================================================
    // 3. MOBILE NAVIGATION
    // =====================================================

    if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("active");


                const icon =
                    mobileMenuButton.querySelector("i");


                if (
                    navMenu.classList.contains("active")
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }
        );

    }



    // =====================================================
    // 4. NAVBAR SHADOW WHEN SCROLLING
    // =====================================================

    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(16, 35, 63, 0.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar
    );


    updateNavbar();



    // =====================================================
    // 5. CONTACT FORM
    // =====================================================

    const contactForm =
        document.querySelector(".contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    contactForm.querySelector(
                        'input[name="name"]'
                    ).value;


                const email =
                    contactForm.querySelector(
                        'input[name="email"]'
                    ).value;


                const message =
                    contactForm.querySelector(
                        'textarea[name="message"]'
                    ).value;


                if (
                    name.trim() === "" ||
                    email.trim() === "" ||
                    message.trim() === ""
                ) {

                    alert(
                        "Please fill in the required fields."
                    );

                    return;

                }


                /*
                    The form currently has no backend.

                    Later you can connect this form to:

                    - Web3Forms
                    - Formspree
                    - Your own backend
                    - Google Forms
                    - Email API
                */


                alert(
                    "Thank you. Your message has been recorded for this demo."
                );


                contactForm.reset();

            }
        );

    }



    // =====================================================
    // 6. RESEARCH ITEM HOVER INTERACTION
    // =====================================================

    const researchItems =
        document.querySelectorAll(
            ".research-item"
        );


    researchItems.forEach(function (item) {

        item.addEventListener(
            "mouseenter",
            function () {

                const arrow =
                    item.querySelector("i");


                if (arrow) {

                    arrow.style.transform =
                        "translate(3px, -3px)";

                }

            }
        );


        item.addEventListener(
            "mouseleave",
            function () {

                const arrow =
                    item.querySelector("i");


                if (arrow) {

                    arrow.style.transform =
                        "translate(0, 0)";

                }

            }
        );

    });



    // =====================================================
    // 7. UPDATE ACTIVE NAVIGATION ITEM
    // =====================================================

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop -
                150;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


});
