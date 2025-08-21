/* utils.js - Utility functions for the portfolio project */
/*getImageUrl - Function to get the URL of an image asset */
// This function constructs the URL for an image asset based on its name

export function getImageUrl(path) {
    // Use require to ensure Webpack includes the image in the bundle
    try {
        return `./assets/${path}`;
    } catch (e) {
                console.error("Image not found:", path);
            }
        }