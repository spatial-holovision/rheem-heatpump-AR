# GitHub Pages Deployment Guide for AR Web App

This guide explains how to deploy the AR Web App to GitHub Pages, making it publicly accessible to anyone with the link.

## Prerequisites

1. A GitHub account
2. Git installed on your computer (optional, for command line deployment)

## Option 1: Deploy Using GitHub Web Interface (Easiest)

### Step 1: Create a New Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "ar-web-app")
4. Make sure the repository is set to "Public"
5. Click "Create repository"

### Step 2: Upload the Files

1. In your new repository, click "uploading an existing file" link
2. Drag and drop all the files and folders from the extracted zip file
3. Add a commit message like "Initial commit"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository's "Settings" tab
2. Scroll down to the "GitHub Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for GitHub Pages to build your site
6. GitHub will provide a URL where your site is published (usually `https://yourusername.github.io/ar-web-app/`)

## Option 2: Deploy Using Git Command Line

### Step 1: Create a New Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "ar-web-app")
4. Make sure the repository is set to "Public"
5. Click "Create repository" (do not initialize with README)

### Step 2: Push Your Files

1. Open a terminal or command prompt
2. Navigate to the directory containing the extracted files
3. Initialize a Git repository and push the files:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ar-web-app.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository's "Settings" tab
2. Scroll down to the "GitHub Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for GitHub Pages to build your site
6. GitHub will provide a URL where your site is published

## Customizing Your Site

### Update Repository Information

1. Edit the README.md file to include your site's URL and description
2. Update the GitHub links in the HTML files to point to your repository

### Update the models.json File

1. The sample models in models.json are placeholders
2. Follow the instructions in ADDING_MODELS.md to add your own models

## Maintaining Your Site

### Adding New Models

See the ADDING_MODELS.md file for detailed instructions on how to add new models to your site.

### Updating the Site

To update any part of the site:

1. Make changes to the files in your repository
2. Commit and push the changes (or use the GitHub web interface)
3. GitHub Pages will automatically rebuild your site with the changes

## Troubleshooting

### Site Not Publishing

- Make sure your repository is public
- Check that GitHub Pages is enabled and set to the correct branch
- Wait a few minutes for GitHub Pages to build your site

### Models Not Displaying

- Verify that the file paths in models.json are correct
- Make sure your model files are in the correct location
- Check the browser console for any errors

### AR Not Working

- AR requires HTTPS, which GitHub Pages provides
- Make sure you're using a compatible device and browser
- Ensure your .glb and .usdz files are valid

## Best Practices

- Keep your model files under 10MB for better performance
- Regularly back up your repository
- Test your site on multiple devices and browsers
- Use descriptive commit messages when updating your site
