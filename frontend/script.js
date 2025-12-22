const phrases = [
    "aligning thoughts…",
    "warming up the workspace…",
    "quietly moving things forward…",
    "calm meets momentum…",
    "entering shared focus…",
    "nutmeg is listening…"
];

const phraseEl = document.getElementById("phrase");
const form = document.getElementById("loginForm");

let phraseIndex = 0;
let phraseInterval = null;

function startPhraseLoop() {
    phraseInterval = setInterval(() => {
        phraseEl.classList.add("opacity-0");

        setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            phraseEl.textContent = phrases[phraseIndex];
            phraseEl.classList.remove("opacity-0");
        }, 300);
    }, 1200);
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    startPhraseLoop();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        clearInterval(phraseInterval);
        phraseEl.textContent = "welcome back ";

        setTimeout(() => {
            alert(data.message);
        }, 600);

    } catch (err) {
        clearInterval(phraseInterval);
        phraseEl.textContent = "something feels off…";
        console.error(err);
    }
});
