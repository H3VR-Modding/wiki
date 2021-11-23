declare var docsVersion: string;

interface IVersionsData {
    versions: { version: string, tag: string }[];
    latestTag: string;
}

namespace Versioning {
    function compareVersions(a: string, b: string) {
        const pad = (v: number[]) => {
            if (v.length < 3) {
                const to = 3 - v.length;
                for (let i = 0; i < to; i++) {
                    v.push(0);
                }
            }
            return v;
        };
        const verA = pad(a.split(".").map(v => Number.parseInt(v)));
        const verB = pad(b.split(".").map(v => Number.parseInt(v)));

        for (let i = 0; i < 3; i++) {
            const va = verA[i];
            const vb = verB[i];
            if (va < vb) {
                return 1;
            }
        }

        return -1;
    }

    export async function init() {
        let data: IVersionsData;
        try {
            const result = await fetch("/versions.json");
            data = await result.json() as IVersionsData;
        } catch (e) {
            return;
        }
        
        const versionPickerDiv = document.getElementById("version-picker");
        if (!versionPickerDiv) {
            return;
        }

        const selectEl = document.createElement("select");

        data.versions = data.versions.sort((a, b) => {
            if (a.tag == "master") {
                return -1;
            }
            if (b.tag == "master") {
                return 1;
            }
            return compareVersions(a.version, b.version);
        });

        for (const ver of data.versions) {
            const verOpt = document.createElement("option");
            verOpt.value = ver.tag;
            verOpt.textContent = ver.version + (ver.tag == data.latestTag ? " (latest)" : "");
            selectEl.appendChild(verOpt);

            if (ver.tag == "master") {
                const divider = document.createElement("option");
                divider.disabled = true;
                divider.textContent = "──────────";
                selectEl.appendChild(divider);
            }
        }

        selectEl.value = docsVersion;
        versionPickerDiv.appendChild(selectEl);

        selectEl.addEventListener("change", () => {
            const tag = selectEl.value;
            window.location.href = `/${tag}`;
        });

        const messages = document.getElementById("global-messages");

        if (!messages) {
            return;
        }

        if (docsVersion == "master") {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("message");
            msgDiv.innerHTML = `<span>You are viewing documentation for a yet unreleased BepInEx version.</span> <a href="/">View latest stable docs (${data.latestTag}).</a>`;
            msgDiv.style.backgroundColor = "#CA8423";
            messages.appendChild(msgDiv);
        }
        else if (docsVersion != data.latestTag) {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("message");
            msgDiv.innerHTML = `<span>You are viewing old documentation.</span> <a href="/">View latest stable docs (${data.latestTag}).</a>`;
            msgDiv.style.backgroundColor = "#CA3423";
            messages.appendChild(msgDiv);
        }
    }
}