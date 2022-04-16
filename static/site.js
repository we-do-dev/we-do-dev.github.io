// From https://bulma.io/documentation/components/navbar/
document.addEventListener('DOMContentLoaded', () => {
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    const navbarItems = document.querySelectorAll(".navbar-item");

    function toggleBurger(burger_el) {
        // Get the target from the "data-target" attribute
        const target = burger_el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        burger_el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    navbarBurgers.forEach(burger_el => {
        burger_el.addEventListener('click', () => {
            toggleBurger(burger_el)
        });
        navbarItems.forEach(item => {
            item.addEventListener("click", () => {
                toggleBurger(burger_el)
            });
        });
    });
});
