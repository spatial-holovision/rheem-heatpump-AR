/**
 * Library functionality for AR Web App
 * Displays all AR models from the static models.json file
 */

document.addEventListener('DOMContentLoaded', async () => {
    // Get DOM elements
    const loadingContainer = document.getElementById('loading');
    const errorContainer = document.getElementById('error-container');
    const errorText = document.getElementById('error-text');
    const emptyLibrary = document.getElementById('empty-library');
    const modelsContainer = document.getElementById('models-container');

    try {
        // Fetch models from the static JSON file
        const response = await fetch('models/models.json');
        
        if (!response.ok) {
            throw new Error(`Failed to load models: ${response.status} ${response.statusText}`);
        }
        
        const models = await response.json();
        console.log('Models loaded:', models);
        
        // Hide loading
        loadingContainer.classList.add('hidden');
        
        // Check if there are any models
        if (!models || models.length === 0) {
            emptyLibrary.classList.remove('hidden');
            return;
        }
        
        // Show models container
        modelsContainer.classList.remove('hidden');
        
        // Create model cards
        models.forEach(model => {
            const modelCard = document.createElement('div');
            modelCard.className = 'model-card';
            
            // Create thumbnail or placeholder
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.className = 'model-thumbnail';
            
            if (model.thumbnail) {
                const thumbnail = document.createElement('img');
                thumbnail.src = model.thumbnail;
                thumbnail.alt = `Thumbnail for ${model.name}`;
                thumbnailContainer.appendChild(thumbnail);
            } else {
                thumbnailContainer.innerHTML = '<div class="placeholder-thumbnail">No Image</div>';
            }
            
            // Create model info
            const modelInfo = document.createElement('div');
            modelInfo.className = 'model-info';
            
            const modelName = document.createElement('h3');
            modelName.textContent = model.name;
            
            const modelDescription = document.createElement('p');
            modelDescription.textContent = model.description || 'No description available';
            
            const modelDate = document.createElement('p');
            modelDate.className = 'model-date';
            const date = new Date(model.createdAt);
            modelDate.textContent = date.toLocaleDateString();
            
            // Create action buttons
            const actionButtons = document.createElement('div');
            actionButtons.className = 'model-actions';
            
            const viewButton = document.createElement('a');
            viewButton.href = `viewer.html?id=${model.id}`;
            viewButton.className = 'button primary-button';
            viewButton.textContent = 'View in AR';
            
            const copyButton = document.createElement('button');
            copyButton.className = 'button secondary-button';
            copyButton.textContent = 'Copy Link';
            copyButton.addEventListener('click', () => {
                const url = `${window.location.origin}${window.location.pathname.replace('library.html', '')}viewer.html?id=${model.id}`;
                navigator.clipboard.writeText(url).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy Link';
                    }, 2000);
                });
            });
            
            // Assemble the card
            modelInfo.appendChild(modelName);
            modelInfo.appendChild(modelDescription);
            modelInfo.appendChild(modelDate);
            
            actionButtons.appendChild(viewButton);
            actionButtons.appendChild(copyButton);
            
            modelCard.appendChild(thumbnailContainer);
            modelCard.appendChild(modelInfo);
            modelCard.appendChild(actionButtons);
            
            modelsContainer.appendChild(modelCard);
        });
        
    } catch (error) {
        console.error('Error loading models:', error);
        loadingContainer.classList.add('hidden');
        errorText.textContent = error.message || 'Failed to load AR models';
        errorContainer.classList.remove('hidden');
    }
});
