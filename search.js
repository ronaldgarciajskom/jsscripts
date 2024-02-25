function search() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var items = document.getElementsByClassName('item');

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}
