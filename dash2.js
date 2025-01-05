
const categoryButtons = document.querySelectorAll('.game-categories button');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

    });
});

 // Menambahkan animasi klik untuk game card
 function animateCard(card) {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 200); // Reset setelah 200ms
}