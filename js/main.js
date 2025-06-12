/**
 * Main JavaScript for AR Web App
 */

document.addEventListener('DOMContentLoaded', () => {
    // Update GitHub repository links
    const githubLinks = document.querySelectorAll('a[href*="yourusername/ar-web-app-github"]');
    
    // You would replace this with your actual GitHub username and repository name
    // This is just a placeholder that will be updated when deployed
    const repoUrl = 'https://github.com/yourusername/ar-web-app-github';
    
    githubLinks.forEach(link => {
        link.href = repoUrl;
    });
    
    // Add any additional initialization code here
});
