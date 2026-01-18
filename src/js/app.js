import { CONFIG } from './config.js';
import { fetchProducts } from './api.js';
import { Templates } from './templates.js';

document.addEventListener('DOMContentLoaded', async () => {
    const bookContainer = document.getElementById('book');
    const loadingMsg = document.getElementById('loading');
    const contactPage = document.querySelector('.contact-page');

    // 1. Préparation DOM
    contactPage.remove(); // On met de côté la page contact

    try {
        // 2. Récupération des données
        const products = await fetchProducts();

        // 3. Génération du HTML
        if (products && products.length > 0) {
            products.forEach((product, index) => {
                // On crée des div temporaires pour insérer le HTML string
                const tempDivLeft = document.createElement('div');
                const tempDivRight = document.createElement('div');

                tempDivLeft.innerHTML = Templates.createVisualPage(product, index);
                tempDivRight.innerHTML = Templates.createInfoPage(product, index);

                // On ajoute les enfants (les pages .page) au livre
                bookContainer.appendChild(tempDivLeft.firstElementChild);
                bookContainer.appendChild(tempDivRight.firstElementChild);
            });
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = Templates.createEmptyState();
            bookContainer.appendChild(tempDiv.firstElementChild);
        }

    } catch (err) {
        loadingMsg.innerText = "Erreur de connexion au catalogue.";
        loadingMsg.style.color = "red";
        return; // On arrête là
    }

    // 4. Finalisation
    bookContainer.appendChild(contactPage); // On remet la page contact à la fin
    loadingMsg.style.display = 'none';
    bookContainer.style.display = 'block';

    // 5. Initialisation Librairie Flipbook
    const pageFlip = new St.PageFlip(bookContainer, CONFIG.FLIPBOOK_OPTIONS);
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // 6. Events Navigation
    document.getElementById('prevBtn').addEventListener('click', () => pageFlip.flipPrev());
    document.getElementById('nextBtn').addEventListener('click', () => pageFlip.flipNext());
});