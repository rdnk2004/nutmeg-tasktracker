document.getElementById("ping").addEventListener("click", async () => {
    const res = await fetch("http://127.0.0.1:8000/");
    const data = await res.json();
    document.getElementById("result").innerText = data.status;
});
