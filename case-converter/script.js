const textarea = document.querySelector('.textarea-container textarea')

function handleText(event) {
    if (event.target.id === 'upper-case') {
        textarea.value = textarea.value.toUpperCase();
    }
    if (event.target.id === 'lower-case') {
        textarea.value = textarea.value.toLowerCase();
    }
    if (event.target.id === 'proper-case') {
        let newTextArr = textarea.value
            .toLowerCase()
            .trim()
            .split(' ')
            .map((word) =>
                word[0].toUpperCase() + word.substring(1));
        textarea.value = newTextArr.join(' ');
    }
    if (event.target.id === 'sentence-case') {
        let newTextArr = textarea.value
            .toLowerCase()
            .trim()
            .split('. ')
            .map((sentence) => sentence.trim()[0].toUpperCase() + sentence.slice(1).toLowerCase());
        textarea.value = newTextArr.join('. ').trim();
    }
}

document.querySelector('.btn-container').addEventListener('click', handleText)