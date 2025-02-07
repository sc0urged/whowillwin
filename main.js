const modal = document.getElementById('betModal');
const btn = document.querySelector('.bet-button button');
const closeButton = document.querySelector('.close-button');
const copyButton = document.querySelector('.copy-button');
const notification = document.querySelector('.copy-notification');
const caText = document.querySelector('.ca-text').textContent;

btn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(caText);
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});
