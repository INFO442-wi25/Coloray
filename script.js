document.addEventListener("DOMContentLoaded", () => {
    const colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((box) => {
        box.style.backgroundColor = box.dataset.color;
        box.innerText = box.dataset.color;

        box.addEventListener("click", () => {
            const currentColor = box.style.backgroundColor;
            const primaryColor = box.dataset.color;
            const alternateColor = box.dataset.altColor;

            // AI Prompt (bug fix): Why are't the orginal colors shift to alternative colors when clicking on the grids?
            if (currentColor === rgbToHex(primaryColor)) {
                box.style.backgroundColor = alternateColor;
                box.innerText = alternateColor;
            } else {
                box.style.backgroundColor = primaryColor;
                box.innerText = primaryColor;
            }
        });
    });

    function rgbToHex(hex) {
        const a = document.createElement("div");
        a.style.color = hex;
        document.body.appendChild(a);
        const rgb = window.getComputedStyle(a).color;
        document.body.removeChild(a);
        return rgb;
    }
});