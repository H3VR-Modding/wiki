declare function setScrollbarTheme(theme: string): void;

namespace Theme {
    export function init() {
        const themeSwitch = document.querySelector("#theme-switch");
        if (!themeSwitch) {
            return;
        }
        themeSwitch.addEventListener("click", e => {
            e.preventDefault();
            const html = document.documentElement;
    
            const isDark = html.classList.contains("dark");
            if (isDark) {
                html.classList.remove("dark");
                localStorage.theme = "light";
                setScrollbarTheme("light");
            } else {
                html.classList.add("dark");
                localStorage.theme = "dark";
                setScrollbarTheme("dark");
            }
        });
    }
}