document.addEventListener('DOMContentLoaded', () => {
    const voteButton = document.getElementById('vote-button');
    console.log('Client script loaded');
    
    voteButton.addEventListener('click', async () => {
        console.log('Vote button clicked');
        
        try {
            const response = await fetch('http://localhost:5500/vote');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.text();
            console.log('Response:', result);
            voteButton.textContent = result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
