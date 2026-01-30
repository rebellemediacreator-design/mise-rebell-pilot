(() => {
  const btn = document.querySelector("[data-copy]");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = "Kopiert.";
      setTimeout(() => (btn.textContent = old), 1100);
    } catch {
      window.prompt("Kopieren:", text);
    }
  });
})();
