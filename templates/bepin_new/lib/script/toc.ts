namespace TOC {
    export function init() {
        const tocMenuButton = document.querySelector(".toc-menu-button");
        const tocItems = document.querySelector(".toc-items");
        if (!tocMenuButton || !tocItems) {
            return;
        }

        tocMenuButton.addEventListener("click", () => {
            if (tocItems.classList.contains("open")) {
                tocItems.classList.remove("open");
            } else {
                tocItems.classList.add("open");
            }
        });
    }
}