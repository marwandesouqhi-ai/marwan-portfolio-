/* =========================================================
   MARWAN DESOWKY PORTFOLIO
   PREMIUM ANIMATIONS
   GSAP + SCROLLTRIGGER + LENIS
   ========================================================= */


/* =========================================================
   01. REGISTER GSAP PLUGIN
   ========================================================= */

gsap.registerPlugin(
    ScrollTrigger
);


/* =========================================================
   02. GLOBAL SETTINGS
   ========================================================= */

gsap.config({

    nullTargetWarn: false

});


/* =========================================================
   02B. SMOOTH SCROLL (LENIS)
   NOTE: requires Lenis to be loaded before this file:
   <script src="https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js"></script>
   ========================================================= */

let lenis = null;

if (typeof Lenis !== "undefined") {

    lenis = new Lenis({

        duration: 1.15,

        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

        smoothWheel: true,

        touchMultiplier: 1.2

    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {

        lenis.raf(time * 1000);

    });

    gsap.ticker.lagSmoothing(0);

    // keep in-page anchor links working with Lenis
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

        anchor.addEventListener("click", (e) => {

            const targetId = anchor.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                lenis.scrollTo(target, { offset: 0, duration: 1.2 });

            }

        });

    });

}


/* =========================================================
   03. PAGE LOAD MASTER TIMELINE
   ========================================================= */

const pageLoader =
    document.querySelector(
        ".page-loader"
    );


const heroTimeline =
    gsap.timeline({

        defaults: {

            ease:
                "power4.out"

        },

        onComplete: () => {

            document.body.classList.add(
                "animations-complete"
            );

            ScrollTrigger.refresh();

        }

    });


/* =========================================================
   04. LOADER EXIT
   ========================================================= */

if (pageLoader) {

    heroTimeline.to(
        pageLoader,
        {

            opacity:
                0,

            duration:
                0.8,

            delay:
                0.4,

            onComplete: () => {

                pageLoader.style.display =
                    "none";

            }

        }
    );

}


/* =========================================================
   05. HERO EYEBROW
   ========================================================= */

heroTimeline.fromTo(

    ".hero-eyebrow",

    {

        opacity:
            0,

        y:
            30

    },

    {

        opacity:
            1,

        y:
            0,

        duration:
            0.8

    },

    "-=0.3"

);


/* =========================================================
   06. HERO TITLE
   ========================================================= */

const heroTitleLines =
    document.querySelectorAll(
        ".hero-title-line"
    );


if (
    heroTitleLines.length
) {

    heroTimeline.to(

        heroTitleLines,

        {

            opacity:
                1,

            y:
                0,

            duration:
                1.1,

            stagger:
                0.13,

            ease:
                "power4.out"

        },

        "-=0.35"

    );

}


/* =========================================================
   07. HERO DESCRIPTION
   ========================================================= */

heroTimeline.to(

    ".hero-description",

    {

        opacity:
            1,

        y:
            0,

        duration:
            0.8

    },

    "-=0.65"

);


/* =========================================================
   08. HERO BUTTONS
   ========================================================= */

heroTimeline.to(

    ".hero-actions",

    {

        opacity:
            1,

        y:
            0,

        duration:
            0.7

    },

    "-=0.5"

);


/* =========================================================
   09. HERO SOCIALS
   ========================================================= */

heroTimeline.to(

    ".hero-socials",

    {

        opacity:
            1,

        y:
            0,

        duration:
            0.7

    },

    "-=0.45"

);


/* =========================================================
   10. HERO VISUAL
   ========================================================= */

heroTimeline.fromTo(

    ".profile-card",

    {

        opacity:
            0,

        scale:
            0.8,

        rotationY:
            -12,

        rotationX:
            8,

        y:
            50

    },

    {

        opacity:
            1,

        scale:
            1,

        rotationY:
            0,

        rotationX:
            0,

        y:
            0,

        duration:
            1.4,

        ease:
            "expo.out"

    },

    "-=1"

);


/* =========================================================
   11. HERO ORBITS
   ========================================================= */

heroTimeline.fromTo(

    ".hero-orbit",

    {

        opacity:
            0,

        scale:
            0.5,

        rotation:
            -45

    },

    {

        opacity:
            1,

        scale:
            1,

        rotation:
            0,

        duration:
            1.5,

        stagger:
            0.2,

        ease:
            "power3.out"

    },

    "-=1"

);


/* =========================================================
   12. FLOATING BADGES
   ========================================================= */

heroTimeline.fromTo(

    ".floating-badge",

    {

        opacity:
            0,

        scale:
            0.6,

        y:
            30

    },

    {

        opacity:
            1,

        scale:
            1,

        y:
            0,

        duration:
            0.7,

        stagger:
            0.15,

        ease:
            "back.out(1.7)"

    },

    "-=1"

);


/* =========================================================
   13. FLOATING INFO CARD
   ========================================================= */

heroTimeline.fromTo(

    ".floating-info-card",

    {

        opacity:
            0,

        x:
            50

    },

    {

        opacity:
            1,

        x:
            0,

        duration:
            0.8,

        ease:
            "power3.out"

    },

    "-=0.7"

);


/* =========================================================
   14. SCROLL INDICATOR
   ========================================================= */

heroTimeline.fromTo(

    ".scroll-indicator",

    {

        opacity:
            0,

        y:
            20

    },

    {

        opacity:
            1,

        y:
            0,

        duration:
            0.7

    },

    "-=0.4"

);


/* =========================================================
   15. HERO FLOATING ANIMATION
   ========================================================= */

gsap.to(

    ".profile-card",

    {

        y:
            -12,

        duration:
            3.5,

        repeat:
            -1,

        yoyo:
            true,

        ease:
            "sine.inOut"

    }

);


gsap.to(

    ".badge-top",

    {

        y:
            -10,

        duration:
            2.8,

        repeat:
            -1,

        yoyo:
            true,

        ease:
            "sine.inOut"

    }

);


gsap.to(

    ".badge-right",

    {

        y:
            12,

        duration:
            3.2,

        repeat:
            -1,

        yoyo:
            true,

        ease:
            "sine.inOut"

    }

);


gsap.to(

    ".badge-bottom",

    {

        y:
            -8,

        duration:
            3,

        repeat:
            -1,

        yoyo:
            true,

        ease:
            "sine.inOut"

    }

);


/* =========================================================
   16. ORBIT ROTATION
   ========================================================= */

gsap.to(

    ".orbit-one",

    {

        rotation:
            360,

        duration:
            30,

        repeat:
            -1,

        ease:
            "none"

    }

);


gsap.to(

    ".orbit-two",

    {

        rotation:
            -360,

        duration:
            22,

        repeat:
            -1,

        ease:
            "none"

    }

);


/* =========================================================
   17. SECTION REVEAL
   ========================================================= */

gsap.utils
    .toArray(
        ".section"
    )
    .forEach(
        (section) => {

            const heading =
                section.querySelector(
                    ".section-heading"
                );


            if (heading) {

                gsap.from(

                    heading,

                    {

                        scrollTrigger: {

                            trigger:
                                section,

                            start:
                                "top 80%",

                            once:
                                true

                        },

                        opacity:
                            0,

                        y:
                            60,

                        duration:
                            1,

                        ease:
                            "power4.out"

                    }

                );

            }

        }
    );


/* =========================================================
   18. ABOUT ANIMATION
   ========================================================= */

const aboutSection =
    document.querySelector(
        ".about"
    );


if (aboutSection) {

    const aboutContent =
        aboutSection.querySelector(
            ".about-content"
        );


    const aboutStats =
        aboutSection.querySelectorAll(
            ".stat-card"
        );


    gsap.from(

        aboutContent,

        {

            scrollTrigger: {

                trigger:
                    aboutSection,

                start:
                    "top 75%",

                once:
                    true

            },

            opacity:
                0,

            x:
                -70,

            duration:
                1.1,

            ease:
                "power4.out"

        }

    );


    gsap.from(

        aboutStats,

        {

            scrollTrigger: {

                trigger:
                    aboutSection,

                start:
                    "top 70%",

                once:
                    true

            },

            opacity:
                0,

            y:
                70,

            scale:
                0.9,

            duration:
                0.9,

            stagger:
                0.15,

            ease:
                "back.out(1.5)"

        }

    );

}


/* =========================================================
   19. SKILLS STAGGER
   ========================================================= */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


if (
    skillCards.length
) {

    gsap.from(

        skillCards,

        {

            scrollTrigger: {

                trigger:
                    ".skills",

                start:
                    "top 75%",

                once:
                    true

            },

            opacity:
                0,

            y:
                80,

            scale:
                0.9,

            duration:
                0.8,

            stagger:
                0.12,

            ease:
                "power4.out"

        }

    );

}


/* =========================================================
   20. SKILL ICON HOVER
   ========================================================= */

skillCards.forEach(

    (card) => {

        const icon =
            card.querySelector(
                ".skill-icon"
            );


        if (!icon) {

            return;

        }


        card.addEventListener(
            "mouseenter",
            () => {

                gsap.to(

                    icon,

                    {

                        rotation:
                            10,

                        scale:
                            1.12,

                        duration:
                            0.35,

                        ease:
                            "back.out(2)"

                    }

                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                gsap.to(

                    icon,

                    {

                        rotation:
                            0,

                        scale:
                            1,

                        duration:
                            0.35,

                        ease:
                            "power2.out"

                    }

                );

            }
        );

    }

);


/* =========================================================
   21. EXPERIENCE TIMELINE
   ========================================================= */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


if (
    timelineItems.length
) {

    timelineItems.forEach(

        (item, index) => {

            const content =
                item.querySelector(
                    ".timeline-content"
                );


            const dot =
                item.querySelector(
                    ".timeline-dot"
                );


            const date =
                item.querySelector(
                    ".timeline-date"
                );


            const direction =
                index % 2 === 0
                    ? -60
                    : 60;


            gsap.from(

                date,

                {

                    scrollTrigger: {

                        trigger:
                            item,

                        start:
                            "top 85%",

                        once:
                            true

                    },

                    opacity:
                        0,

                    x:
                        direction,

                    duration:
                        0.7,

                    ease:
                        "power3.out"

                }

            );


            gsap.from(

                dot,

                {

                    scrollTrigger: {

                        trigger:
                            item,

                        start:
                            "top 85%",

                        once:
                            true

                    },

                    opacity:
                        0,

                    scale:
                        0,

                    duration:
                        0.5,

                    ease:
                        "back.out(2)"

                }

            );


            gsap.from(

                content,

                {

                    scrollTrigger: {

                        trigger:
                            item,

                        start:
                            "top 82%",

                        once:
                            true

                    },

                    opacity:
                        0,

                    x:
                        -direction,

                    y:
                        40,

                    duration:
                        0.9,

                    ease:
                        "power4.out"

                }

            );

        }

    );

}


/* =========================================================
   22. PROJECT CARDS
   ========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


if (
    projectCards.length
) {

    gsap.from(

        projectCards,

        {

            scrollTrigger: {

                trigger:
                    ".projects-grid",

                start:
                    "top 78%",

                once:
                    true

            },

            opacity:
                0,

            y:
                100,

            scale:
                0.94,

            duration:
                1,

            stagger:
                0.15,

            ease:
                "power4.out"

        }

    );

}


/* =========================================================
   23. PROJECT IMAGE PARALLAX
   ========================================================= */

projectCards.forEach(

    (card) => {

        const image =
            card.querySelector(
                ".project-image img"
            );


        if (!image) {

            return;

        }


        gsap.to(

            image,

            {

                yPercent:
                    -8,

                ease:
                    "none",

                scrollTrigger: {

                    trigger:
                        card,

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        true

                }

            }

        );

    }

);


/* =========================================================
   24. PROJECT OVERLAY HOVER — UPGRADED
   Now includes: 3D tilt following the cursor, an image
   zoom + counter-parallax, and a soft radial "glow" that
   tracks the mouse (needs a <div class="project-glow"></div>
   inside each .project-card, positioned absolute/inset:0,
   pointer-events:none, and styled with a radial-gradient
   background using CSS custom properties --x / --y).
   ========================================================= */

projectCards.forEach(

    (card) => {

        const overlay =
            card.querySelector(
                ".project-overlay"
            );


        const link =
            card.querySelector(
                ".project-link"
            );


        const image =
            card.querySelector(
                ".project-image img"
            );


        const glow =
            card.querySelector(
                ".project-glow"
            );


        const isFinePointer =
            window.matchMedia(
                "(pointer: fine)"
            ).matches;


        if (
            !overlay ||
            !link
        ) {

            return;

        }


        card.style.transformStyle =
            "preserve-3d";

        card.style.transformPerspective =
            "900px";


        const hoverTimeline =
            gsap.timeline({

                paused:
                    true

            });


        hoverTimeline
            .to(

                overlay,

                {

                    opacity:
                        1,

                    duration:
                        0.35,

                    ease:
                        "power2.out"

                }

            )
            .fromTo(

                link,

                {

                    scale:
                        0.6,

                    rotation:
                        -20

                },

                {

                    scale:
                        1,

                    rotation:
                        0,

                    duration:
                        0.5,

                    ease:
                        "back.out(2)"

                },

                "-=0.15"

            );


        if (image) {

            hoverTimeline.to(

                image,

                {

                    scale:
                        1.12,

                    duration:
                        0.6,

                    ease:
                        "power2.out"

                },

                0

            );

        }


        if (glow) {

            hoverTimeline.to(

                glow,

                {

                    opacity:
                        1,

                    duration:
                        0.4

                },

                0

            );

        }


        card.addEventListener(
            "mouseenter",
            () => {

                hoverTimeline.play();

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                hoverTimeline.reverse();


                if (isFinePointer) {

                    gsap.to(

                        card,

                        {

                            rotateX:
                                0,

                            rotateY:
                                0,

                            duration:
                                0.7,

                            ease:
                                "power3.out"

                        }

                    );

                }

            }
        );


        if (isFinePointer) {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        (
                            x -
                            rect.width / 2
                        ) /
                        rect.width *
                        10;


                    const rotateX =
                        (
                            y -
                            rect.height / 2
                        ) /
                        rect.height *
                        -10;


                    gsap.to(

                        card,

                        {

                            rotateX:
                                rotateX,

                            rotateY:
                                rotateY,

                            duration:
                                0.5,

                            ease:
                                "power2.out",

                            overwrite:
                                "auto"

                        }

                    );


                    if (glow) {

                        gsap.set(

                            glow,

                            {

                                "--x":
                                    `${x}px`,

                                "--y":
                                    `${y}px`

                            }

                        );

                    }


                    if (image) {

                        gsap.to(

                            image,

                            {

                                x:
                                    (
                                        x -
                                        rect.width / 2
                                    ) * -0.03,

                                y:
                                    (
                                        y -
                                        rect.height / 2
                                    ) * -0.03,

                                duration:
                                    0.6,

                                ease:
                                    "power2.out",

                                overwrite:
                                    "auto"

                            }

                        );

                    }

                }
            );

        }

    }

);


/* =========================================================
   25. CONTACT SECTION
   ========================================================= */

const contactSection =
    document.querySelector(
        ".contact"
    );


if (contactSection) {

    const contactWrapper =
        contactSection.querySelector(
            ".contact-wrapper"
        );


    const contactTitle =
        contactSection.querySelector(
            ".contact-title"
        );


    const contactDescription =
        contactSection.querySelector(
            ".contact-description"
        );


    const contactEmail =
        contactSection.querySelector(
            ".contact-email"
        );


    const contactVisual =
        contactSection.querySelector(
            ".contact-visual"
        );


    gsap.from(

        contactWrapper,

        {

            scrollTrigger: {

                trigger:
                    contactSection,

                start:
                    "top 75%",

                once:
                    true

            },

            opacity:
                0,

            y:
                100,

            scale:
                0.95,

            duration:
                1.2,

            ease:
                "power4.out"

        }

    );


    gsap.from(

        [
            contactTitle,
            contactDescription,
            contactEmail
        ],

        {

            scrollTrigger: {

                trigger:
                    contactSection,

                start:
                    "top 65%",

                once:
                    true

            },

            opacity:
                0,

            y:
                40,

            duration:
                0.8,

            stagger:
                0.15,

            ease:
                "power3.out"

        }

    );


    gsap.from(

        contactVisual,

        {

            scrollTrigger: {

                trigger:
                    contactSection,

                start:
                    "top 65%",

                once:
                    true

            },

            opacity:
                0,

            scale:
                0.6,

            rotation:
                15,

            duration:
                1.2,

            ease:
                "back.out(1.4)"

        }

    );

}


/* =========================================================
   26. CONTACT ORBIT ANIMATION
   ========================================================= */

gsap.to(

    ".contact-orbit.orbit-one",

    {

        rotation:
            360,

        duration:
            25,

        repeat:
            -1,

        ease:
            "none"

    }

);


gsap.to(

    ".contact-orbit.orbit-two",

    {

        rotation:
            -360,

        duration:
            18,

        repeat:
            -1,

        ease:
            "none"

    }

);


/* =========================================================
   27. CONTACT CENTER FLOAT
   ========================================================= */

gsap.to(

    ".contact-center",

    {

        y:
            -12,

        duration:
            2.5,

        repeat:
            -1,

        yoyo:
            true,

        ease:
            "sine.inOut"

    }

);


/* =========================================================
   28. FOOTER REVEAL
   ========================================================= */

const footer =
    document.querySelector(
        ".site-footer"
    );


if (footer) {

    gsap.from(

        footer,

        {

            scrollTrigger: {

                trigger:
                    footer,

                start:
                    "top 90%",

                once:
                    true

            },

            opacity:
                0,

            y:
                40,

            duration:
                0.8,

            ease:
                "power3.out"

        }

    );

}


/* =========================================================
   29. GLOBAL PARALLAX DECORATIONS
   ========================================================= */

const parallaxElements =
    document.querySelectorAll(
        "[data-parallax]"
    );


parallaxElements.forEach(

    (element) => {

        const speed =
            parseFloat(
                element.dataset.parallax
            ) || 0.2;


        gsap.to(

            element,

            {

                yPercent:
                    speed * -100,

                ease:
                    "none",

                scrollTrigger: {

                    trigger:
                        element,

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        true

                }

            }

        );

    }

);


/* =========================================================
   30. TEXT REVEAL
   ========================================================= */

const textRevealElements =
    document.querySelectorAll(
        "[data-text-reveal]"
    );


textRevealElements.forEach(

    (element) => {

        const text =
            element.textContent.trim();


        const words =
            text.split(" ");


        element.innerHTML =
            words
                .map(
                    (word) => {

                        return `
              <span
                class="text-word"
                style="
                  display:inline-block;
                  overflow:hidden;
                  vertical-align:bottom;
                "
              >
                <span
                  style="
                    display:inline-block;
                  "
                >
                  ${word}
                </span>
              </span>
            `;

                    }
                )
                .join(" ");


        const innerWords =
            element.querySelectorAll(
                ".text-word > span"
            );


        gsap.from(

            innerWords,

            {

                scrollTrigger: {

                    trigger:
                        element,

                    start:
                        "top 85%",

                    once:
                        true

                },

                yPercent:
                    110,

                opacity:
                    0,

                duration:
                    0.8,

                stagger:
                    0.035,

                ease:
                    "power4.out"

            }

        );

    }

);


/* =========================================================
   31. MOUSE MOVE HERO PARALLAX
   ========================================================= */

const hero =
    document.querySelector(
        ".hero"
    );


if (
    hero &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    const heroVisual =
        hero.querySelector(
            ".hero-visual"
        );


    const heroContent =
        hero.querySelector(
            ".hero-content"
        );


    hero.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                0.5;


            if (heroVisual) {

                gsap.to(

                    heroVisual,

                    {

                        x:
                            x * 12,

                        y:
                            y * 8,

                        duration:
                            0.8,

                        ease:
                            "power2.out",

                        overwrite:
                            "auto"

                    }

                );

            }


            if (heroContent) {

                gsap.to(

                    heroContent,

                    {

                        x:
                            x * -5,

                        y:
                            y * -3,

                        duration:
                            1,

                        ease:
                            "power2.out",

                        overwrite:
                            "auto"

                    }

                );

            }

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            gsap.to(

                heroVisual,

                {

                    x:
                        0,

                    y:
                        0,

                    duration:
                        1,

                    ease:
                        "power3.out"

                }

            );


            gsap.to(

                heroContent,

                {

                    x:
                        0,

                    y:
                        0,

                    duration:
                        1,

                    ease:
                        "power3.out"

                }

            );

        }
    );

}


/* =========================================================
   32. 3D PROFILE CARD
   ========================================================= */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


if (
    profileCard &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    profileCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                profileCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    x -
                    rect.width / 2
                ) /
                rect.width *
                10;


            const rotateX =
                (
                    y -
                    rect.height / 2
                ) /
                rect.height *
                -10;


            gsap.to(

                profileCard,

                {

                    rotateX:
                        rotateX,

                    rotateY:
                        rotateY,

                    scale:
                        1.02,

                    duration:
                        0.4,

                    ease:
                        "power2.out",

                    overwrite:
                        "auto"

                }

            );

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            gsap.to(

                profileCard,

                {

                    rotateX:
                        0,

                    rotateY:
                        0,

                    scale:
                        1,

                    duration:
                        0.8,

                    ease:
                        "elastic.out(1,0.5)"

                }

            );

        }
    );

}


/* =========================================================
   33. BACK TO TOP MICRO ANIMATION
   ========================================================= */

const backTop =
    document.querySelector(
        ".back-to-top"
    );


if (backTop) {

    backTop.addEventListener(
        "mouseenter",
        () => {

            gsap.to(

                backTop,

                {

                    rotation:
                        -10,

                    scale:
                        1.1,

                    duration:
                        0.3,

                    ease:
                        "back.out(2)"

                }

            );

        }
    );


    backTop.addEventListener(
        "mouseleave",
        () => {

            gsap.to(

                backTop,

                {

                    rotation:
                        0,

                    scale:
                        1,

                    duration:
                        0.3

                }

            );

        }
    );

}


/* =========================================================
   36. CUSTOM CURSOR
   NOTE: requires two elements in the HTML, placed once,
   right before </body>:
   <div class="custom-cursor"></div>
   <div class="custom-cursor-dot"></div>
   Basic CSS: fixed position, pointer-events:none, z-index
   above everything, border-radius:50%, top:0; left:0;
   transform is handled entirely by GSAP below.
   ========================================================= */

const customCursor =
    document.querySelector(
        ".custom-cursor"
    );


const customCursorDot =
    document.querySelector(
        ".custom-cursor-dot"
    );


if (
    customCursor &&
    customCursorDot &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    document.body.classList.add(
        "has-custom-cursor"
    );


    const ringPos = {

        x:
            window.innerWidth / 2,

        y:
            window.innerHeight / 2

    };


    const mouse = {

        x:
            ringPos.x,

        y:
            ringPos.y

    };


    window.addEventListener(
        "mousemove",
        (event) => {

            mouse.x =
                event.clientX;

            mouse.y =
                event.clientY;


            gsap.set(

                customCursorDot,

                {

                    x:
                        mouse.x,

                    y:
                        mouse.y

                }

            );

        }
    );


    gsap.ticker.add(

        () => {

            ringPos.x +=
                (
                    mouse.x -
                    ringPos.x
                ) * 0.15;


            ringPos.y +=
                (
                    mouse.y -
                    ringPos.y
                ) * 0.15;


            gsap.set(

                customCursor,

                {

                    x:
                        ringPos.x,

                    y:
                        ringPos.y

                }

            );

        }

    );


    const interactiveSelectors =
        "a, button, .project-card, .skill-card, .magnetic, input, textarea";


    document.querySelectorAll(

        interactiveSelectors

    ).forEach(

        (element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    customCursor.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    customCursor.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        }

    );


    document.addEventListener(
        "mousedown",
        () => {

            customCursor.classList.add(
                "cursor-active"
            );

        }
    );


    document.addEventListener(
        "mouseup",
        () => {

            customCursor.classList.remove(
                "cursor-active"
            );

        }
    );

}


/* =========================================================
   37. MAGNETIC BUTTONS
   Add class="magnetic" to any button/link you want this
   effect on (e.g. hero CTAs, the contact email button,
   back-to-top). Works alongside the custom cursor above.
   ========================================================= */

document.querySelectorAll(

    ".magnetic"

).forEach(

    (element) => {

        const strength =
            parseFloat(
                element.dataset.magneticStrength
            ) || 0.4;


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


                gsap.to(

                    element,

                    {

                        x:
                            x * strength,

                        y:
                            y * strength,

                        duration:
                            0.5,

                        ease:
                            "power3.out",

                        overwrite:
                            "auto"

                    }

                );


                const label =
                    element.querySelector(
                        ".magnetic-label"
                    );


                if (label) {

                    gsap.to(

                        label,

                        {

                            x:
                                x * strength * 0.4,

                            y:
                                y * strength * 0.4,

                            duration:
                                0.5,

                            ease:
                                "power3.out",

                            overwrite:
                                "auto"

                        }

                    );

                }

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                gsap.to(

                    element,

                    {

                        x:
                            0,

                        y:
                            0,

                        duration:
                            0.7,

                        ease:
                            "elastic.out(1,0.4)"

                    }

                );


                const label =
                    element.querySelector(
                        ".magnetic-label"
                    );


                if (label) {

                    gsap.to(

                        label,

                        {

                            x:
                                0,

                            y:
                                0,

                            duration:
                                0.7,

                            ease:
                                "elastic.out(1,0.4)"

                        }

                    );

                }

            }
        );

    }

);


/* =========================================================
   34. REFRESH SCROLLTRIGGER
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                ScrollTrigger.refresh();

            },
            500
        );

    }
);


/* =========================================================
   35. REDUCED MOTION SUPPORT
   ========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (
    prefersReducedMotion
) {

    gsap.globalTimeline
        .timeScale(
            0
        );


    if (lenis) {

        lenis.destroy();

    }


    if (customCursor) {

        customCursor.style.display =
            "none";

    }


    if (customCursorDot) {

        customCursorDot.style.display =
            "none";

    }

}