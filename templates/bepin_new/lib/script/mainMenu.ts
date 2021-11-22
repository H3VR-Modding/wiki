namespace MainMenu {
    export function init() {
        let menuButton = document.getElementById("menu-switch");
        let nav = document.querySelector("header > nav");

        if (!menuButton) {
            return;
        }

        menuButton.addEventListener("click", e => {
            e.preventDefault();

            if (!nav) {
                return;
            }

            if (nav.classList.contains("open")) {
                nav.classList.remove("open");
            } else {
                nav.classList.add("open");
            }
        });

    }
}