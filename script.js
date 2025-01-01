// Sélectionner tous les éléments avec la classe 'service'
const services = document.querySelectorAll('.service');

services.forEach(service => {
    // Ajouter un événement au clic
    service.addEventListener('click', () => {
        // Vérifier si un autre service est déjà actif
        services.forEach(s => {
            if (s !== service) {
                s.classList.remove('active');
            }
        });
        
        // Basculer l'état actif du service cliqué
        service.classList.toggle('active');
    });
});

// Ajoutez cet élément script dans votre fichier HTML ou dans un fichier JavaScript séparé
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

    // Récupère les valeurs des champs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // URL de votre Google Apps Script déployé
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyPLO01h-7u3mcwC1D-QZ0jF_a65rbvgxtvxA0YcJXUiXuIdBy-e4ZpTC_qGzFH3Lj9/exec';

    // Données à envoyer au serveur
    const formData = {
        nom: nom,
        email: email,
        phone: phone,
        message: message
    };

    try {
        // Envoie une requête POST avec les données du formulaire
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Gère la réponse
        if (response.ok) {
            alert("Merci, nous vous reviendrons incessamment.");
            // Réinitialise le formulaire après une soumission réussie
            document.getElementById('contactForm').reset();
        } else {
            alert("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
        }
    } catch (error) {
        console.error("Erreur : ", error);
        alert("Impossible d'envoyer le formulaire. Vérifiez votre connexion Internet et réessayez.");
    }
});