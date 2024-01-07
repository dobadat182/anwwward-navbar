document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav"),
        navItems = document.querySelector(".nav-items"),
        navHome = document.querySelector(".nav-home"),
        navTop = document.querySelector(".nav-top"),
        icon = document.querySelector(".hamburger i");

    let isOpen = false;

    gsap.set(nav, { height: "60px" });
    gsap.set(navTop, { opacity: 0, scale: 0.9, display: "none" });
    gsap.set(navItems, { opacity: 1, display: "flex" });
    gsap.set(navHome, { flexGrow: 0 });

    navHome.addEventListener("click", function () {
        if (!isOpen) {
            gsap.to(nav, {
                height: "370px",
                duration: 0.75,
                ease: "power4.inOut",
                immediateRender: false,
            });

            gsap.to(navTop, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                onStart: function () {
                    gsap.set(navTop, { display: "block" });
                },
                delay: 0.5,
                immediateRender: false,
            });

            gsap.to(navItems, {
                opacity: 0,
                duration: 0.1,
                onComplete: function () {
                    gsap.set(navItems, { display: "none" });
                },
                immediateRender: false,
            });

            gsap.to(navHome, {
                flexGrow: 1,
                duration: 0.2,
                ease: "power4.inOut",
                delay: 0,
                immediateRender: false,
                onComplete: function () {
                    icon.className = "ph-light ph-x";
                },
            });
        } else {
            gsap.to(nav, {
                height: "60px",
                duration: 0.75,
                ease: "power4.inOut",
                delay: 0.2,
                immediateRender: false,
            });

            gsap.to(navTop, {
                opacity: 0,
                scale: 0.9,
                duration: 0.2,
                onComplete: function () {
                    gsap.set(navTop, { display: "none" });
                },
                immediateRender: false,
            });

            gsap.to(navHome, {
                flexGrow: 0,
                duration: 0.2,
                ease: "power4.inOut",
                immediateRender: false,
                onComplete: function () {
                    icon.className = "ph-light ph-list";
                },
            });

            gsap.to(navItems, {
                opacity: 1,
                duration: 0.2,
                onStart: function () {
                    gsap.set(navItems, { display: "flex" });
                },
                delay: 0.5,
                immediateRender: false,
            });
        }

        isOpen = !isOpen;
    });
});
