/**
 * AR Viewer functionality for AR Web App
 * Loads and displays AR models from static JSON file
 */

document.addEventListener('DOMContentLoaded', async () => {
    // Get DOM elements
    const loadingContainer = document.getElementById('loading');
    const errorContainer = document.getElementById('error-container');
    const errorText = document.getElementById('error-text');
    const arViewer = document.getElementById('ar-viewer');
    const modelTitle = document.getElementById('model-title');
    const modelDescription = document.getElementById('model-description');
    const modelViewer = document.getElementById('model-viewer');
    const shareableLink = document.getElementById('shareable-link');
    const copyLinkButton = document.getElementById('copy-link');

    // Get model ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const modelId = urlParams.get('id');

    if (!modelId) {
        showError('No model ID provided');
        return;
    }

    try {
        // Fetch models from the static JSON file
        const response = await fetch('models/models.json');
        
        if (!response.ok) {
            throw new Error(`Failed to load models: ${response.status} ${response.statusText}`);
        }
        
        const models = await response.json();
        
        // Find the requested model
        const model = models.find(m => m.id === modelId);
        
        if (!model) {
            throw new Error('Model not found');
        }
        
        console.log('Model data loaded:', model);
        
        // Set model-viewer attributes
        modelViewer.setAttribute('src', model.glbFile);
        modelViewer.setAttribute('ios-src', model.usdzFile);
        modelViewer.setAttribute('alt', `3D model of ${model.name}`);
        
        // Set model title and description
        modelTitle.textContent = model.name;
        if (model.description) {
            modelDescription.textContent = model.description;
        } else {
            modelDescription.classList.add('hidden');
        }
        
        // Set shareable link
        const currentUrl = window.location.href;
        shareableLink.value = currentUrl;
        
        // Show AR viewer
        loadingContainer.classList.add('hidden');
        arViewer.classList.remove('hidden');
        
        // Handle copy link button
        copyLinkButton.addEventListener('click', () => {
            shareableLink.select();
            document.execCommand('copy');
            copyLinkButton.textContent = 'Copied!';
            setTimeout(() => {
                copyLinkButton.textContent = 'Copy';
            }, 2000);
        });
        
    } catch (error) {
        console.error('Error loading model:', error);
        showError(error.message || 'Failed to load AR model');
    }

    function showError(message) {
        loadingContainer.classList.add('hidden');
        errorText.textContent = message;
        errorContainer.classList.remove('hidden');
    }
});
