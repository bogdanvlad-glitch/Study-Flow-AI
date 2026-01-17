function login() {
  window.location.href = "dashboard.html";
}

function generateSummary() {
  const result = document.getElementById("result");
  result.innerText = "⏳ Génération du résumé...";

  setTimeout(() => {
    result.innerText =
      "✨ Résumé IA :\n\nCe cours explique les concepts principaux de manière claire et structurée, avec les points essentiels à retenir pour réussir l’examen.";
  }, 1500);
}
