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
