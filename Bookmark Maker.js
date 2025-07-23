document.getElementById('bookmarkForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const url = document.getElementById('url').value.trim();

    if (!title || !url) {
        alert("Both fields are required!");
        return;
    }

    addBookmark(title, url);
    this.reset();
});

function addBookmark(title, url) {
    const bookmarkList = document.getElementById('bookmarkList');

    const card = document.createElement('div');
    card.className = 'bookmark-card';

    const info = document.createElement('div');
    info.className = 'bookmark-info';

    const favicon = `https://www.google.com/s2/favicons?domain=${url}&sz=64`;

    const img = document.createElement('img');
    img.src = favicon;
    img.alt = 'favicon';

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.textContent = title;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = () => card.remove();

    info.appendChild(img);
    info.appendChild(link);

    card.appendChild(info);
    card.appendChild(deleteBtn);

    bookmarkList.appendChild(card);
}