function updateContent() {
    var contentElement = document.getElementById('content');
    setInterval(function() {
        fetch('/api/content')
            .then(response => response.text())
            .then(data => {
                contentElement.innerHTML = data;
            })
            .catch(error => console.error('Error fetching content:', error));
    }, 5000); // Обновление каждые 5 секунд
}
