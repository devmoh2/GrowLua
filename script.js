function changeColor() {
    const header = document.querySelector('header');
    const colors = ['#4CAF50', '#3498db', '#e74c3c', '#9b59b6', '#f39c12'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
}
