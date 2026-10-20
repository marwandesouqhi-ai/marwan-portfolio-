(() => {
    "use strict";

    const triggers = [...document.querySelectorAll("[data-gallery]")];
    if (!triggers.length) return;

    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Project screenshots");
    box.innerHTML =
        '<button type="button" class="lb-close" aria-label="Close">✕</button>' +
        '<button type="button" class="lb-prev" aria-label="Previous">←</button>' +
        '<div class="lightbox-stage"><img alt=""></div>' +
        '<div class="lightbox-bar"></div>' +
        '<button type="button" class="lb-next" aria-label="Next">→</button>';
    document.body.appendChild(box);

    const img = box.querySelector("img");
    const bar = box.querySelector(".lightbox-bar");
    let items = [], index = 0, title = "", opener = null;

    const show = (i) => {
        index = (i + items.length) % items.length;
        const it = items[index];
        img.src = it.src;
        img.alt = `${title} — ${it.caption}`;
        bar.innerHTML = `<b></b> · <span></span> · ${index + 1}/${items.length}`;
        bar.querySelector("b").textContent = title;
        bar.querySelector("span").textContent = it.caption;
    };

    const open = (trigger) => {
        try { items = JSON.parse(trigger.dataset.gallery); } catch (e) { return; }
        if (!items.length) return;
        title = trigger.dataset.title || "";
        opener = trigger;
        show(0);
        box.classList.add("open");
        document.body.style.overflow = "hidden";
        box.querySelector(".lb-close").focus();
    };

    const close = () => {
        box.classList.remove("open");
        document.body.style.overflow = "";
        img.removeAttribute("src");
        if (opener) opener.focus();
    };

    triggers.forEach((t) => t.addEventListener("click", () => open(t)));
    box.querySelector(".lb-close").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", () => show(index - 1));
    box.querySelector(".lb-next").addEventListener("click", () => show(index + 1));
    box.addEventListener("click", (e) => { if (e.target === box) close(); });

    document.addEventListener("keydown", (e) => {
        if (!box.classList.contains("open")) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") show(index - 1);
        else if (e.key === "ArrowRight") show(index + 1);
    });
})();
