/* =========================================================
   MARWAN DESOWKY PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =======================================================
       01. ELEMENTS
       ======================================================= */

    const body = document.body;

    const header =
        document.querySelector(".site-header");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    const navItems =
        document.querySelectorAll(".nav-link");

    const scrollProgress =
        document.querySelector(".scroll-progress");

    const backToTop =
        document.querySelector(".back-to-top");

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorOutline =
        document.querySelector(".cursor-outline");

    const sections =
        document.querySelectorAll("section[id]");

    const magneticElements =
        document.querySelectorAll(
            ".btn, .nav-cv, .social-link"
        );

    const counterElements =
        document.querySelectorAll(
            "[data-counter]"
        );


    /* =======================================================
       02. PAGE LOADER
       ======================================================= */

    const pageLoader =
        document.querySelector(".page-loader");

    const loaderLine =
        document.querySelector(".loader-line span");


    if (loaderLine) {

        setTimeout(() => {

            loaderLine.style.width = "100%";

        }, 100);

    }


    window.addEventListener("load", () => {

        setTimeout(() => {

            if (pageLoader) {

                pageLoader.style.opacity = "0";
                pageLoader.style.visibility = "hidden";
                pageLoader.style.pointerEvents = "none";

            }

            document.body.classList.add(
                "page-loaded"
            );

        }, 700);

    });


    /* =======================================================
       03. MOBILE MENU
       ======================================================= */

    function openMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

        menuToggle.classList.add("active");

        navLinks.classList.add("open");

        body.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closeMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

        menuToggle.classList.remove("active");

        navLinks.classList.remove("open");

        body.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    function toggleMenu() {

        if (
            navLinks &&
            navLinks.classList.contains("open")
        ) {

            closeMenu();

        } else {

            openMenu();

        }

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            toggleMenu
        );

    }


    navItems.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* =======================================================
       04. NAVBAR SCROLL EFFECT
       ======================================================= */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    updateHeader();


    /* =======================================================
       05. SCROLL PROGRESS
       ======================================================= */

    function updateScrollProgress() {

        if (!scrollProgress) {
            return;
        }

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement
                .scrollHeight;

        const windowHeight =
            window.innerHeight;

        const scrollableHeight =
            documentHeight -
            windowHeight;

        if (scrollableHeight <= 0) {

            scrollProgress.style.width =
                "0%";

            return;

        }

        const progress =
            (scrollTop /
                scrollableHeight) *
            100;

        scrollProgress.style.width =
            `${Math.min(
                progress,
                100
            )}%`;

    }


    /* =======================================================
       06. BACK TO TOP
       ======================================================= */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }

        if (window.scrollY > 700) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =======================================================
       07. ACTIVE NAVIGATION
       ======================================================= */

    function updateActiveNavigation() {

        if (!sections.length) {
            return;
        }

        const currentPosition =
            window.scrollY +
            180;

        let currentSection =
            "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    currentPosition >=
                    sectionTop &&
                    currentPosition <
                    sectionTop +
                    sectionHeight
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navItems.forEach(
            (link) => {

                const href =
                    link.getAttribute(
                        "href"
                    );

                link.classList.remove(
                    "active"
                );

                if (
                    href ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    /* =======================================================
       08. SMOOTH ANCHOR SCROLL
       ======================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {

                        return;

                    }

                    event.preventDefault();

                    const headerOffset =
                        header
                            ? header.offsetHeight
                            : 0;

                    const targetPosition =
                        target.offsetTop -
                        headerOffset;

                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =======================================================
       09. CUSTOM CURSOR
       ======================================================= */

    const supportsFinePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (
        supportsFinePointer &&
        cursorDot &&
        cursorOutline
    ) {

        let mouseX = 0;

        let mouseY = 0;

        let outlineX = 0;

        let outlineY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            }
        );


        function animateCursor() {

            outlineX +=
                (
                    mouseX -
                    outlineX
                ) *
                0.12;

            outlineY +=
                (
                    mouseY -
                    outlineY
                ) *
                0.12;


            cursorOutline.style.left =
                `${outlineX}px`;

            cursorOutline.style.top =
                `${outlineY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const hoverTargets =
            document.querySelectorAll(
                "a, button, .project-card, .skill-card, .stat-card"
            );


        hoverTargets.forEach(
            (element) => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursorOutline.classList.add(
                            "hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursorOutline.classList.remove(
                            "hover"
                        );

                    }
                );

            }
        );

    }


    /* =======================================================
       10. MAGNETIC BUTTONS
       ======================================================= */

    if (supportsFinePointer) {

        magneticElements.forEach(
            (element) => {

                element.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            element.getBoundingClientRect();

                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;

                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        element.style.transform =
                            `translate(
                ${x * 0.18}px,
                ${y * 0.18}px
              )`;

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        element.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =======================================================
       11. COUNTER ANIMATION
       ======================================================= */

    function animateCounter(
        element
    ) {

        const target =
            parseInt(
                element.dataset.counter,
                10
            );


        if (
            Number.isNaN(target)
        ) {

            return;

        }


        const duration =
            1600;

        const startTime =
            performance.now();


        function updateCounter(
            currentTime
        ) {

            const elapsed =
                currentTime -
                startTime;

            const progress =
                Math.min(
                    elapsed /
                    duration,
                    1
                );


            const easedProgress =
                1 -
                Math.pow(
                    1 - progress,
                    4
                );


            const currentValue =
                Math.floor(
                    easedProgress *
                    target
                );


            element.textContent =
                currentValue;


            if (
                progress <
                1
            ) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                element.textContent =
                    target;

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    }


    if (
        counterElements.length
    ) {

        const counterObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                animateCounter(
                                    entry.target
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold:
                        0.5
                }
            );


        counterElements.forEach(
            (counter) => {

                counterObserver.observe(
                    counter
                );

            }
        );

    }


    /* =======================================================
       12. REVEAL ELEMENTS
       ======================================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        revealElements.length
    ) {

        const revealObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "revealed"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold:
                        0.12,

                    rootMargin:
                        "0px 0px -50px 0px"

                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    }


    /* =======================================================
       13. TILT EFFECT
       ======================================================= */

    const tiltElements =
        document.querySelectorAll(
            ".profile-card, .skill-card, .project-card"
        );


    if (
        supportsFinePointer
    ) {

        tiltElements.forEach(
            (element) => {

                element.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            element.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        const rotateX =
                            (
                                y -
                                centerY
                            ) /
                            centerY *
                            -4;


                        const rotateY =
                            (
                                x -
                                centerX
                            ) /
                            centerX *
                            4;


                        element.style.transform =
                            `perspective(1000px)
               rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)
               translateY(-5px)`;

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        element.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =======================================================
       14. PARTICLES
       ======================================================= */

    const particlesContainer =
        document.querySelector(
            ".particles"
        );


    if (
        particlesContainer
    ) {

        const particleCount =
            window.innerWidth < 700
                ? 20
                : 45;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "particle";


            particle.style.left =
                `${Math.random() * 100}%`;


            particle.style.top =
                `${Math.random() * 100}%`;


            particle.style.opacity =
                `${Math.random() * 0.6 + 0.2}`;


            const duration =
                Math.random() *
                8 +
                6;


            const delay =
                Math.random() *
                -10;


            particle.animate(

                [

                    {
                        transform:
                            "translate3d(0, 0, 0)",

                        opacity:
                            0.15

                    },

                    {

                        transform:
                            `translate3d(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px,
                0
              )`,

                        opacity:
                            0.7

                    },

                    {

                        transform:
                            "translate3d(0, 0, 0)",

                        opacity:
                            0.15

                    }

                ],

                {

                    duration:
                        duration *
                        1000,

                    delay:
                        delay *
                        1000,

                    iterations:
                        Infinity,

                    easing:
                        "ease-in-out"

                }

            );


            particlesContainer.appendChild(
                particle
            );

        }

    }


    /* =======================================================
       15. PARALLAX BACKGROUND
       ======================================================= */

    const ambientGlows =
        document.querySelectorAll(
            ".ambient-glow"
        );


    if (
        supportsFinePointer &&
        ambientGlows.length
    ) {

        window.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth
                    ) -
                    0.5;


                const y =
                    (
                        event.clientY /
                        window.innerHeight
                    ) -
                    0.5;


                ambientGlows.forEach(
                    (
                        glow,
                        index
                    ) => {

                        const intensity =
                            (
                                index +
                                1
                            ) *
                            15;


                        glow.style.transform =
                            `translate(
                ${x * intensity}px,
                ${y * intensity}px
              )`;

                    }
                );

            }
        );

    }


    /* =======================================================
       16. PROJECT IMAGE LAZY LOADING
       ======================================================= */

    const lazyImages =
        document.querySelectorAll(
            "img[data-src]"
        );


    if (
        lazyImages.length
    ) {

        const imageObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                const image =
                                    entry.target;


                                image.src =
                                    image.dataset.src;


                                image.removeAttribute(
                                    "data-src"
                                );


                                imageObserver.unobserve(
                                    image
                                );

                            }

                        }
                    );

                },
                {
                    rootMargin:
                        "200px 0px"

                }
            );


        lazyImages.forEach(
            (image) => {

                imageObserver.observe(
                    image
                );

            }
        );

    }


    /* =======================================================
       17. IMAGE ERROR FALLBACK
       ======================================================= */

    document
        .querySelectorAll(
            "img"
        )
        .forEach(
            (image) => {

                image.addEventListener(
                    "error",
                    () => {

                        image.classList.add(
                            "image-error"
                        );

                        image.style.objectFit =
                            "contain";

                        image.style.padding =
                            "30px";

                        image.alt =
                            "Image unavailable";

                    }
                );

            }
        );


    /* =======================================================
       18. RESIZE HANDLER
       ======================================================= */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        if (
                            window.innerWidth >
                            900
                        ) {

                            closeMenu();

                        }

                    },
                    200
                );

        }
    );


    /* =======================================================
       19. MAIN SCROLL HANDLER
       ======================================================= */

    let ticking =
        false;


    function handleScroll() {

        if (!ticking) {

            window.requestAnimationFrame(
                () => {

                    updateHeader();

                    updateScrollProgress();

                    updateBackToTop();

                    updateActiveNavigation();

                    ticking =
                        false;

                }
            );


            ticking =
                true;

        }

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive:
                true
        }
    );


    /* =======================================================
       20. INITIALIZE
       ======================================================= */

    updateHeader();

    updateScrollProgress();

    updateBackToTop();

    updateActiveNavigation();


    console.log(
        "%cMarwan Desowky Portfolio",
        "color:#4f8cff;font-size:20px;font-weight:bold;"
    );


    console.log(
        "%cPortfolio system initialized successfully.",
        "color:#00d9ff;font-size:12px;"
    );

});