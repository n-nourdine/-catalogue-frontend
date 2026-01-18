export const Templates = {
    
    // Page Gauche (Images)
    createVisualPage: (product, index) => {
        const mainImg = (product.images && product.images[0]) ? product.images[0] : 'https://via.placeholder.com/400x400?text=No+Image';
        const sideImg = (product.images && product.images[1]) ? product.images[1] : mainImg;
        const zoomImg = (product.images && product.images[2]) ? product.images[2] : mainImg;

        return `
            <div class="page">
                <div class="visual-showcase">
                    <div class="main-view">
                        <div class="view-label">Vue d'ensemble</div>
                        <img src="${mainImg}" alt="${product.title}">
                    </div>
                    <div class="angles-gallery">
                        <div class="angle-view">
                            <div class="view-label">Profil</div>
                            <img src="${sideImg}" alt="Side">
                        </div>
                        <div class="angle-view">
                            <div class="view-label">Détail</div>
                            <img src="${zoomImg}" alt="Zoom">
                        </div>
                    </div>
                </div>
                <div class="page-footer-left">${(index * 2) + 2}</div>
            </div>
        `;
    },

    // Page Droite (Infos)
    createInfoPage: (product, index) => {
        let specsHTML = '';
        if (product.specs) {
            product.specs.forEach(spec => {
                specsHTML += `<div class="spec-item"><span class="spec-label">${spec.label}</span><span class="spec-value">${spec.value}</span></div>`;
            });
        }

        return `
            <div class="page">
                <div class="product-info">
                    <div class="collection-tag">${product.category}</div>
                    <h2>${product.title}</h2>
                    <p class="description">${product.description}</p>
                    
                    <div class="tech-specs">
                        <div class="specs-title">SPÉCIFICATIONS TECHNIQUES</div>
                        ${specsHTML}
                    </div>

                    <div class="footer-action">
                        <div class="price">${product.price.toLocaleString()} F</div>
                        <button class="btn-order">COMMANDER ></button>
                    </div>
                </div>
                <div class="page-footer-right">${(index * 2) + 3}</div>
            </div>
        `;
    },

    createEmptyState: () => {
        return `<div class="page"><div style="padding:20px;">Aucun produit disponible pour le moment.</div></div>`;
    }
};