
namespace Affix {
    interface AffixTocNode {
        level: number;
        items: AffixTocNode[];
        parent?: AffixTocNode;
        el?: Element;
    }

    enum ResizeStatus {
        None,
        Small,
        Large
    }

    function sanitize(str?: string | null) {
        return str?.replace(/[^\w. ]/gi, c => `&#${c.charCodeAt(0)};`);
    }

    function getAffixToc() {
        const mainEl = document.querySelector("main");
        const affixToc: AffixTocNode = { level: 0, items: [] };
        if (!mainEl) {
            return affixToc;
        }
        const headers = mainEl.querySelectorAll("h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]");
        const addItem = (item: AffixTocNode, node: AffixTocNode): boolean => {
            let result = false;
            if (node.level < item.level
                && (node.items.length == 0
                    || node.items.length != 0 && !(result = addItem(item, node.items[node.items.length - 1])))) {
                item.parent = node;
                node.items.push(item);
                return true;
            } else if (node.level > item.level && node.parent) {
                node.parent.items = [item];
                item.parent = node.parent;
                node.parent = item;
                return true;
            }
            return result;
        };
        for (const h of headers) {
            addItem({
                level: +h.tagName.substring(1),
                el: h,
                items: []
            }, affixToc);
        }
        return affixToc;
    }

    function binarySearch<T>(arr: T[], c: (a: T) => -1 | 0 | 1): T | undefined {
        if (arr.length == 0) {
            return undefined;
        }
        if (arr.length == 1) {
            return arr[0];
        }
        const search = (start: number, end: number): T => {
            const mid = Math.floor((start + end) / 2);
            if (mid == start || mid == end) {
                return arr[mid];
            }
            const comp = c(arr[mid]);
            if (comp == 0) {
                return arr[mid];
            }
            if (comp < 0) {
                return search(start, mid);
            }
            return search(mid, end);
        };
        return search(0, arr.length - 1);
    }

    export function init() {
        const toc = getAffixToc();
        const affixEl = document.querySelector("aside.affix > div > .affix-toc");

        if (!affixEl) {
            return;
        }
        if (toc.items.length == 0) {
            return;
        }
        const headers: Element[] = [];
        const tocAffixPrefix = "toc-affix-";
        const makeList = (node: AffixTocNode, level: number = 0): string => {
            if (node.items.length == 0) {
                return "";
            }
            if (0 < level && level < 3) {
                const sublist = (n: AffixTocNode) => n.items.length > 0 && level < 2;
                const renderItem = (n: AffixTocNode) => {
                    if (n.el) {
                        headers.push(n.el);
                    }
                    return sublist(n) ? `
                    <details>
                        <summary>
                            <a id="${tocAffixPrefix}${n.el?.id}" href="#${n.el?.id}">${sanitize(n.el?.textContent)}</a>
                        </summary>
                        <ul>
                            ${makeList(n, level + 1)}
                        </ul>
                    </details>
                ` : `<a id="${tocAffixPrefix}${n.el?.id}" href="#${n.el?.id}">${sanitize(n.el?.textContent)}</a>`;
                }
                return node.items.map(n => `<li>${renderItem(n)}</li>`).join("");
            } else {
                return node.items.map(n => makeList(n, level + 1)).join("");
            }
        }
        const res = makeList(toc);
        if (res.trim().length == 0) {
            return;
        }
        affixEl.innerHTML = `
            <h1>Contents</h1>
            <ul class="affixTocList">${res}</ul>
        `;

        let currentSelectedItem: Element | undefined = undefined;
        const selectCurrentAffixTocItem = () => {
            let current = binarySearch(headers, e => {
                const EPS = 0.5;
                const y = e.getBoundingClientRect().y;
                if (y < EPS) {
                    return 1;
                }
                if (y > EPS) {
                    return -1
                }
                return 0;
            });
            if (!current) {
                return;
            }
            if (current == headers[0] && current.getBoundingClientRect().y > 0) {
                current = undefined;
            }

            if (current == currentSelectedItem) {
                return;
            }

            const applyCurrent = (applyDetails: (n: HTMLDetailsElement) => void, applyAnchor: (n: HTMLAnchorElement) => void) => {
                if (!currentSelectedItem) {
                    return;
                }
                const a = (n: Element) => {
                    if (n == affixEl) {
                        return;
                    }
                    if (n instanceof HTMLDetailsElement) {
                        applyDetails(n);
                    }
                    if (n instanceof HTMLAnchorElement) {
                        applyAnchor(n);
                    }
                    if (n.parentElement) {
                        a(n.parentElement);
                    }
                };
                const tocItem = document.querySelector(`aside.affix a#${tocAffixPrefix}${currentSelectedItem.id}`);
                if (tocItem) {
                    a(tocItem);
                }
            };
            const applyOnFirstList = (n: HTMLElement, apply: (p: HTMLLIElement) => void) => {
                if (n instanceof HTMLLIElement) {
                    apply(n);
                } else if (n.parentElement) {
                    applyOnFirstList(n.parentElement, apply);
                }
            };
            applyCurrent(n => n.removeAttribute("open"), n => applyOnFirstList(n, p => p.classList.remove("active")));
            currentSelectedItem = current;
            applyCurrent(n => n.setAttribute("open", "open"), n => applyOnFirstList(n, p => p.classList.add("active")));
        };
        selectCurrentAffixTocItem();
        let resizeStatus = ResizeStatus.None;
        const handleResize = () => {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            if (vw < 1280 && (resizeStatus == ResizeStatus.None || resizeStatus == ResizeStatus.Large)) {
                document.removeEventListener("scroll", selectCurrentAffixTocItem);
                resizeStatus = ResizeStatus.Small;
            } else if (vw >= 1280 && (resizeStatus == ResizeStatus.None || resizeStatus == ResizeStatus.Small)) {
                document.addEventListener("scroll", selectCurrentAffixTocItem);
                resizeStatus = ResizeStatus.Large;
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
    }
}

