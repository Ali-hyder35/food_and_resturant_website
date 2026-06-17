/* === Active Navbar on Scroll === */

document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector(".navigation-wrap");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;

        const speed = target / 100;

        function updateCounter() {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    });
});
