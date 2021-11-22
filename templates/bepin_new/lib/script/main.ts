/// <reference path="affix.ts" />
/// <reference path="theme.ts" />
/// <reference path="tabGroup.ts" />
/// <reference path="toc.ts" />
/// <reference path="versioning.ts" />
/// <reference path="mainMenu.ts" />

function main() {
    hljs.initHighlighting();
    Versioning.init();
    Theme.init();
    Affix.init();
    TabGroup.init();
    TOC.init();
    MainMenu.init();
}

main();