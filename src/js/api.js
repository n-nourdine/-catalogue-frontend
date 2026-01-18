import { CONFIG } from './config.js';

export async function fetchProducts() {
    try {
        const response = await fetch(CONFIG.API_URL);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur API:", error);
        throw error;
    }
}