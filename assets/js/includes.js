async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  for (const el of elements) {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Erreur ${res.status} : ${file}`);
      el.innerHTML = await res.text();
    } catch (err) {
      el.innerHTML = `<p style="color:red;">Include impossible : ${file}</p>`;
      console.error(err);
    }
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", includeHTML);
