document.getElementById("valider").addEventListener("click", function() {
    const identifiant = document.getElementById("identifiant").value;
    const motdepasse = document.getElementById("motdepasse").value;
    const email = document.getElementById("email").value;
    
    if (!identifiant || !motdepasse || !email.includes("@")) {
        document.getElementById("message").innerText = "Veuillez remplir correctement tous les champs.";
    } else {
        document.getElementById("message").innerText = "Données valides, envoi au serveur...";
        // Envoi au serveur à venir
    }
});