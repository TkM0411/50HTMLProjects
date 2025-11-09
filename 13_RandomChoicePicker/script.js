const tagsElement = document.querySelector('.tags');
const textArea = document.getElementById('textarea');

textArea.focus();
textArea.addEventListener('keyup', (ev) => {
    createTags(ev.target.value);
    if (ev.key === 'Enter') {
        setTimeout(() => {
            ev.target.value = '';
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    tagValues = input.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsElement.innerHTML = '';
    for (let i = 0; i < tagValues.length; i++) {
        tagValues[i] = tagValues[i].trim();
        tagsElement.innerHTML += `<span class="tag">${tagValues[i]}</span>`;
    }
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}