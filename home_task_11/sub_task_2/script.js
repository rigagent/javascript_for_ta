document.addEventListener('DOMContentLoaded', () => {
    const catsLinksButton = document.getElementById('cats-links-button');
    const catLinksList = document.getElementById('cat-links-list');
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
    
    catsLinksButton.addEventListener('click', async () => {
        console.log('button clicked');
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            const urls = result.map(item => item.url);
            console.log('Response:', urls);
            
            catLinksList.innerHTML = '';
            urls.forEach(url => {
                const listItem = document.createElement('li');
                listItem.textContent = url;
                catLinksList.appendChild(listItem);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
