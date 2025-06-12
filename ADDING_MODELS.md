# Adding Models to the AR Web App

This guide explains how to add your own 3D models to the AR Web App hosted on GitHub Pages.

## Prerequisites

1. A GitHub account
2. Basic knowledge of GitHub (or follow this step-by-step guide)
3. Your 3D models in both .glb format (for Android) and .usdz format (for iOS)

## Step 1: Fork the Repository

1. Visit the repository at `https://github.com/yourusername/ar-web-app-github`
2. Click the "Fork" button in the top-right corner
3. Wait for GitHub to create a copy of the repository in your account

## Step 2: Prepare Your 3D Models

Before uploading, make sure:

1. You have both .glb and .usdz versions of your model
2. File sizes are reasonable (ideally under 10MB each)
3. Models are optimized for mobile devices
4. You have a thumbnail image (optional but recommended)

## Step 3: Upload Your Models

### Option A: Using GitHub Web Interface

1. Navigate to the `models` folder in your forked repository
2. Click the "Add file" button and select "Upload files"
3. Drag and drop your .glb and .usdz files
4. Add a commit message like "Add new model: [model name]"
5. Click "Commit changes"

### Option B: Using Git Command Line

1. Clone your forked repository:
   ```
   git clone https://github.com/your-username/ar-web-app-github.git
   ```
2. Copy your model files to the `models` directory
3. Add, commit, and push your changes:
   ```
   git add models/your-model.glb models/your-model.usdz
   git commit -m "Add new model: [model name]"
   git push origin main
   ```

## Step 4: Update the models.json File

The `models.json` file contains metadata about all available models. You need to add an entry for your new model.

1. Navigate to `models/models.json` in your forked repository
2. Click the "Edit" (pencil) button
3. Add a new entry for your model:

```json
{
  "id": "unique-model-id",
  "name": "Your Model Name",
  "description": "A brief description of your model",
  "glbFile": "models/your-model.glb",
  "usdzFile": "models/your-model.usdz",
  "thumbnail": "assets/thumbnails/your-thumbnail.jpg",
  "createdAt": "2025-06-06T21:00:00Z"
}
```

4. Make sure to:
   - Use a unique ID (lowercase, no spaces)
   - Provide accurate file paths
   - Add the current date and time in ISO format
   - Add a comma after the previous entry (but not after the last one)

5. Commit your changes with a message like "Update models.json with [model name]"

## Step 5: Add a Thumbnail (Optional)

1. Navigate to the `assets/thumbnails` folder
2. Upload a thumbnail image for your model (recommended size: 300x300 pixels)
3. Make sure the filename matches what you specified in models.json

## Step 6: Submit a Pull Request (If Contributing to the Main Repository)

If you want to contribute your model to the main repository:

1. Go to the original repository you forked from
2. Click "Pull requests" and then "New pull request"
3. Click "compare across forks"
4. Select your fork as the head repository
5. Click "Create pull request"
6. Add a title and description explaining your new model
7. Click "Create pull request"

## Step 7: View Your Model

After your changes are merged (or immediately if using your own fork):

1. Wait a few minutes for GitHub Pages to update
2. Visit the AR Web App
3. Go to the Library page
4. Find your model and click "View in AR"

## Troubleshooting

- **Model not appearing**: Check that the file paths in models.json are correct
- **AR not working**: Ensure your .glb and .usdz files are valid and optimized
- **Thumbnail not showing**: Verify the path in models.json matches your uploaded image

## Best Practices

- Keep model files under 10MB for better performance
- Use descriptive names and detailed descriptions
- Test your models on both Android and iOS devices
- Optimize your models for mobile performance
