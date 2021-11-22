
namespace TabGroup {
    const tabGroups: [HTMLAnchorElement, HTMLSelectElement][][] = [];

    export function init() {
        const tabGroupEls = document.querySelectorAll(".tabGroup");

        for (const tabGroup of tabGroupEls) {
            const tabLinks = [...tabGroup.querySelectorAll("ul[role='tablist'] a")] as HTMLAnchorElement[];
            const tabs = tabLinks.map<[HTMLAnchorElement, HTMLSelectElement]>(a => [a, document.getElementById(a.getAttribute("href")!.substring(1)) as HTMLSelectElement]);

            tabLinks.forEach(a => a.addEventListener("click", e => {
                e.preventDefault();
                const bb1 = a.getBoundingClientRect();
                selectTab(a.dataset.tab!);
                const bb2 = a.getBoundingClientRect();
                window.scrollBy(0, bb2.top - bb1.top);
            }));

            tabGroups.push(tabs);
        }

        const urlParams = new URLSearchParams(window.location.search);
        const selectedTabs = new Set(urlParams.get("tabs")?.split(","));
        for (const selectedTab of selectedTabs) {
            selectTab(selectedTab, false);
        }
    }

    function selectTab(tabName: string, update = true) {
        const selectedTabs = new Set<string>();
        selectedTabs.add(tabName);

        for (const tabGroup of tabGroups) {
            const tabNames = tabGroup.map(([a, _]) => a.dataset.tab);
            const selectedTabIndex = tabNames.findIndex(t => tabName == t);
            if (selectedTabIndex < 0) {
                const selectedTab = tabGroup.find(([_, select]) => !select.hidden);
                if (selectedTab && selectedTab[0].dataset.tab) {
                    selectedTabs.add(selectedTab[0].dataset.tab);
                }
                continue;
            }

            for (const [i, [a, select]] of tabGroup.entries()) {
                select.hidden = i != selectedTabIndex;
                select.setAttribute("aria-hidden", (i != selectedTabIndex).toString());
                a.setAttribute("aria-selected", (i == selectedTabIndex).toString());
                a.setAttribute("tabindex", i == selectedTabIndex ? "0" : "-1");
            }
        }

        if (update) {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("tabs", [...selectedTabs].join(","));
            history.pushState(null, "", `${window.location.pathname}?${searchParams.toString()}`);
        }
    }
}


