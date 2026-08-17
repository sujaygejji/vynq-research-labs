// =========================================================
// VYNQ RESEARCH LABS
// MAIN JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // ELEMENTS
    // =====================================================

    const navbar =
        document.querySelector(".navbar");

    const navMenu =
        document.querySelector(".nav-menu");

    const mobileButton =
        document.querySelector(".mobile-menu-button");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');



    // =====================================================
    // MOBILE MENU
    // =====================================================

    if (mobileButton) {

        mobileButton.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("active");

                const icon =
                    mobileButton.querySelector("i");


                if (
                    navMenu.classList.contains("active")
                ) {

                    icon.classList.remove("fa-bars");

                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }
        );

    }



    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(targetId);


                    if (target) {

                        event.preventDefault();


                        const navbarHeight =
                            navbar
                                ? navbar.offsetHeight
                                : 0;


                        const targetPosition =
                            target.getBoundingClientRect().top +
                            window.scrollY;


                        window.scrollTo({

                            top:
                                targetPosition -
                                navbarHeight,

                            behavior: "smooth"

                        });

                    }


                    if (navMenu) {

                        navMenu.classList.remove("active");

                    }


                    if (mobileButton) {

                        const icon =
                            mobileButton.querySelector("i");


                        icon.classList.remove("fa-xmark");

                        icon.classList.add("fa-bars");

                    }

                }

            }
        );

    });



    // =====================================================
    // NAVBAR SHADOW
    // =====================================================

    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 25) {

            navbar.style.boxShadow =
                "0 7px 25px rgba(16, 35, 63, 0.08)";

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
    // ACTIVE NAVIGATION
    // =====================================================

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNavigation() {

        let currentSection = "home";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 140;


            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
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



    // =====================================================
    // PIPELINE HOVER
    // =====================================================

    const pipelineSteps =
        document.querySelectorAll(".pipeline-step");


    pipelineSteps.forEach(function (step) {

        step.addEventListener(
            "mouseenter",
            function () {

                const marker =
                    step.querySelector(".pipeline-marker");


                if (marker) {

                    marker.style.transform =
                        "scale(1.05)";

                }

            }
        );


        step.addEventListener(
            "mouseleave",
            function () {

                const marker =
                    step.querySelector(".pipeline-marker");


                if (marker) {

                    marker.style.transform =
                        "scale(1)";

                }

            }
        );

    });



    // =====================================================
    // CONTACT FORM
    // =====================================================

    const contactForm =
        document.querySelector(".contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    contactForm
                        .querySelector(
                            'input[name="name"]'
                        )
                        .value
                        .trim();


                const email =
                    contactForm
                        .querySelector(
                            'input[name="email"]'
                        )
                        .value
                        .trim();


                const message =
                    contactForm
                        .querySelector(
                            'textarea[name="message"]'
                        )
                        .value
                        .trim();


                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    alert(
                        "Please fill in all required fields."
                    );

                    return;

                }


                alert(
                    "Thank you. Your message has been received."
                );


                contactForm.reset();

            }
        );

    }

});
