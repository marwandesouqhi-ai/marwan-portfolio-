(() => {
    "use strict";

    // Check GSAP
    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger === "undefined") {
        console.error("ScrollTrigger is not loaded.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Helpers
    const $ = (selector, parent = document) => {
        return parent.querySelector(selector);
    };

    const $$ = (selector, parent = document) => {
        return [...parent.querySelectorAll(selector)];
    };

    const initAnimations = () => {

        gsap.config({
            force3D: true,
            nullTargetWarn: false
        });

        // Device size
        const width = window.innerWidth;

        let device = "desktop";

        if (width <= 480) {
            device = "mobile";
        } else if (width <= 768) {
            device = "tablet";
        } else if (width <= 1200) {
            device = "laptop";
        }

        // Responsive settings
        const settings = {
            mobile: {
                revealY: 20,
                duration: 0.55,
                stagger: 0.04,
                portraitY: -8,
                orbRotation: 90,
                magnetic: 0.07
            },

            tablet: {
                revealY: 25,
                duration: 0.6,
                stagger: 0.05,
                portraitY: -12,
                orbRotation: 120,
                magnetic: 0.10
            },

            laptop: {
                revealY: 35,
                duration: 0.7,
                stagger: 0.06,
                portraitY: -16,
                orbRotation: 150,
                magnetic: 0.13
            },

            desktop: {
                revealY: 45,
                duration: 0.8,
                stagger: 0.07,
                portraitY: -20,
                orbRotation: 180,
                magnetic: 0.17
            }
        };

        const config = settings[device];

        // ============================================
        // LOADER
        // ============================================

        const loaderTimeline = gsap.timeline();

        if ($(".loader")) {

            if ($(".loader-line span")) {
                loaderTimeline.to(".loader-line span", {
                    width: "100%",
                    duration: 1,
                    ease: "power2.inOut"
                });
            }

            if ($(".loader-mark")) {
                loaderTimeline.to(".loader-mark", {
                    scale: 1.15,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.out"
                });
            }

            loaderTimeline.to(".loader", {
                yPercent: -100,
                duration: 0.9,
                ease: "power4.inOut"
            });
        }

        // ============================================
        // NAV
        // ============================================

        if ($(".nav")) {
            loaderTimeline.from(".nav", {
                y: -60,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            }, "-=0.4");
        }

        // ============================================
        // HERO REVEAL
        // ============================================

        const revealElements = $$(".hero-copy .reveal");

        if (revealElements.length > 0) {
            loaderTimeline.from(revealElements, {
                y: config.revealY,
                opacity: 0,
                duration: config.duration,
                stagger: config.stagger,
                ease: "power3.out"
            }, "-=0.25");
        }

        // ============================================
        // HERO TITLE
        // ============================================

        if ($(".hero-title")) {
            loaderTimeline.from(".hero-title", {
                y: config.revealY + 10,
                opacity: 0,
                scale: 0.97,
                duration: 0.9,
                ease: "power4.out"
            }, "-=0.55");
        }

        // ============================================
        // PORTRAIT
        // ============================================

        if ($(".portrait-wrap")) {
            loaderTimeline.from(".portrait-wrap", {
                scale: 0.85,
                opacity: 0,
                rotate: 4,
                duration: 1,
                ease: "power3.out"
            }, "-=0.65");
        }

        // ============================================
        // CODE CARD / AVAILABILITY
        // ============================================

        const heroCards = $$(".code-card, .availability");

        if (heroCards.length > 0) {
            loaderTimeline.from(heroCards, {
                y: 25,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.4");
        }

        // ============================================
        // SECTION ANIMATIONS
        // ============================================

        $$(".section:not(#home)").forEach((section) => {

            const elements = section.querySelectorAll(
                ".section-label, h2, p, .skill-card, .stat, .timeline article, .project-card, .contact-card"
            );

            if (!elements.length) {
                return;
            }

            gsap.from(elements, {
                y: config.revealY,
                opacity: 0,
                duration: config.duration,
                stagger: config.stagger,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    once: true
                }
            });
        });

        // ============================================
        // PORTRAIT PARALLAX
        // ============================================

        if ($(".portrait-wrap") && $(".hero")) {

            gsap.to(".portrait-wrap", {
                y: config.portraitY,
                ease: "none",

                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }

        // ============================================
        // ORB
        // ============================================

        if ($(".orb-one") && $(".hero")) {

            gsap.to(".orb-one", {
                rotation: config.orbRotation,
                ease: "none",

                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 2
                }
            });
        }

        // ============================================
        // SCROLL PROGRESS
        // ============================================

        const progress = $(".progress");

        if (progress) {

            ScrollTrigger.create({
                start: 0,
                end: "max",

                onUpdate: (self) => {
                    progress.style.width =
                        (self.progress * 100) + "%";
                }
            });
        }

        // ============================================
        // NAV ACTIVE SECTION
        // ============================================

        const navLinks = $$(".nav-links a");

        const sections = navLinks
            .map((link) => {

                const href = link.getAttribute("href");

                if (!href || !href.startsWith("#")) {
                    return null;
                }

                return document.querySelector(href);
            })
            .filter(Boolean);

        const setActive = (index) => {

            navLinks.forEach((link, i) => {
                link.classList.toggle(
                    "active",
                    i === index
                );
            });
        };

        sections.forEach((section, index) => {

            ScrollTrigger.create({
                trigger: section,
                start: "top 45%",
                end: "bottom 45%",

                onEnter: () => setActive(index),
                onEnterBack: () => setActive(index)
            });
        });

        // ============================================
        // MAGNETIC EFFECT
        // ============================================

        $$(".magnetic").forEach((element) => {

            let animation = null;

            element.addEventListener("mousemove", (event) => {

                const rect =
                    element.getBoundingClientRect();

                const x =
                    (event.clientX -
                        rect.left -
                        rect.width / 2) *
                    config.magnetic;

                const y =
                    (event.clientY -
                        rect.top -
                        rect.height / 2) *
                    config.magnetic;

                if (animation) {
                    animation.kill();
                }

                animation = gsap.to(element, {
                    x: x,
                    y: y,
                    duration: 0.25,
                    ease: "power2.out",
                    overwrite: true
                });
            });

            element.addEventListener("mouseleave", () => {

                if (animation) {
                    animation.kill();
                }

                animation = gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.4)",
                    overwrite: true
                });
            });

            // Touch support
            element.addEventListener(
                "touchmove",
                (event) => {

                    const touch = event.touches[0];

                    const rect =
                        element.getBoundingClientRect();

                    const x =
                        (touch.clientX -
                            rect.left -
                            rect.width / 2) *
                        config.magnetic;

                    const y =
                        (touch.clientY -
                            rect.top -
                            rect.height / 2) *
                        config.magnetic;

                    gsap.to(element, {
                        x: x,
                        y: y,
                        duration: 0.25,
                        ease: "power2.out",
                        overwrite: true
                    });
                },
                {
                    passive: true
                }
            );

            element.addEventListener("touchend", () => {

                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.4)"
                });
            });
        });

        // ============================================
        // MOBILE MENU
        // ============================================

        const menuToggle = $(".menu-toggle");
        const navContainer = $(".nav-links");

        if (menuToggle && navContainer) {

            menuToggle.addEventListener("click", () => {

                const isOpen =
                    navContainer.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            });

            navLinks.forEach((link) => {

                link.addEventListener("click", () => {

                    navContainer.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                });
            });
        }

        // ============================================
        // BACK TO TOP
        // ============================================

        const topButton = $(".top-btn");

        if (topButton) {

            const updateTopButton = () => {

                topButton.classList.toggle(
                    "show",
                    window.scrollY > 600
                );
            };

            window.addEventListener(
                "scroll",
                updateTopButton,
                {
                    passive: true
                }
            );

            updateTopButton();

            topButton.addEventListener("click", () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }

        // ============================================
        // RESIZE
        // ============================================

        let resizeTimer;

        window.addEventListener("resize", () => {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200);

        });

        // Final refresh
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    };

    // ============================================
    // START
    // ============================================

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initAnimations,
            { once: true }
        );

    } else {

        initAnimations();

    }

})();