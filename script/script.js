document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});

