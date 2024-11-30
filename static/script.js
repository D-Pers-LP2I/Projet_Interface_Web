document.getElementById("valider").addEventListener("click", function() {
    const identifiant = document.getElementById("identifiant").value;
    const motdepasse = document.getElementById("motdepasse").value;
    const email = document.getElementById("email").value;

    if (!identifiant || !motdepasse || !email.includes("@")) {
        document.getElementById("message").innerText = "Veuillez remplir correctement tous les champs.";
    } else {
        document.getElementById("message").innerText = "Données valides, envoi au serveur...";

        // Envoi des données au serveur Flask
        fetch('/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ identifiant, motdepasse, email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("message").innerText = "Connexion réussie.";
            } else {
                document.getElementById("message").innerText = data.message;
            }
        })
        .catch((error) => {
            document.getElementById("message").innerText = "Erreur lors de l'envoi au serveur.";
            console.error('Error:', error);
        });
    }
});
