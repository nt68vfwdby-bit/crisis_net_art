document.addEventListener("DOMContentLoaded", () => {
    const crisisEl = document.getElementById("crisis-text");

    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const SYMBOLS = "!@#$%^&*()_+-=[]{}|;':,./<>?~`§±";
    const MIXED = LETTERS + SYMBOLS;

    if (crisisEl) {
        const originalText = crisisEl.textContent;
        crisisEl.innerHTML = "";
        const spans = [];

        for (let char of originalText) {
            const span = document.createElement("span");
            span.textContent = char;
            span.dataset.orig = char;
            if (char !== " ") {
                span.classList.add("char");
            }
            crisisEl.appendChild(span);
            spans.push(span);
        }

        if (CURRENT_STAGE === 3) {
            const interval = setInterval(() => {
                spans.forEach((span) => {
                    if (span.dataset.orig !== " " && Math.random() < 0.25) {
                        span.textContent = LETTERS[Math.floor(Math.random() * LETTERS.length)];
                    }
                });
            }, 120);

            setTimeout(() => {
                clearInterval(interval);
                spans.forEach((span) => {
                    span.textContent = span.dataset.orig;
                });
            }, 5000);
        }

        if (CURRENT_STAGE === 4) {
            setInterval(() => {
                spans.forEach((span) => {
                    if (span.dataset.orig !== " " && Math.random() < 0.45) {
                        span.textContent = MIXED[Math.floor(Math.random() * MIXED.length)];
                    }
                });
            }, 90);
        }

        if (CURRENT_STAGE === 5) {
            spans.forEach((span) => {
                if (span.dataset.orig !== " ") {
                    if (Math.random() < 0.7) {
                        span.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                    }
                    if (Math.random() < 0.4) {
                        span.classList.add("tremble");
                    }
                    span.addEventListener("mouseover", () => {
                        span.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                        span.classList.add("heavy-fall");
                    });
                }
            });

            setInterval(() => {
                spans.forEach((span) => {
                    if (span.dataset.orig !== " " && Math.random() < 0.55) {
                        span.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                    }
                });
            }, 80);

            setTimeout(() => {
                spans.forEach((span) => {
                    if (span.dataset.orig !== " " && Math.random() < 0.5) {
                        span.classList.add("heavy-fall");
                    }
                });
            }, 1200);
        }
    }

    const ghostInput = document.getElementById("dissolve-input");
    if (ghostInput) {
        let typingTimer;

        const dissolveText = () => {
            if (!ghostInput.value.trim()) return;
            ghostInput.classList.add("dissolving");
            setTimeout(() => {
                ghostInput.value = "";
                ghostInput.classList.remove("dissolving");
            }, 2500);
        };

        ghostInput.addEventListener("input", () => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(dissolveText, 1800);
        });

        ghostInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                clearTimeout(typingTimer);
                dissolveText();
            }
        });
    }
});

