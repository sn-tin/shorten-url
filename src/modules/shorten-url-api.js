/* eslint-disable import/prefer-default-export */
const d = document;

const displayError = (error, message) => {
    const urlInput = d.querySelector('.url-input');
    const errorType = d.querySelector('.error');
    errorType.textContent = message;
    urlInput.value = '';    
    urlInput.classList.add(`${error}`);
}

const resultShortURL = (orig, short) => {
    const resultURL = d.createElement('div');
    resultURL.className = 'result-url';
    resultURL.innerHTML = `
        <span class="links original-link">${orig}</span>
        <div class="copy-url">
            <input tpe="text" class="links shorten-link" value="${short}" readonly="readonly">
            <button class="copy-button">Copy</button>
        </div>
    `;
    const resultContent = d.querySelector('.result-content');
    resultContent.appendChild(resultURL);
    const form = d.getElementById('url-form');
    form.insertAdjacentElement('beforeend', resultContent);
}

const shortenURL = async (url) => {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {mode: 'cors'});
        const data = await response.json();
        const origLink = data.result.original_link;
        const shortLink = data.result.full_short_link;
        console.log(data, origLink, shortLink)
        resultShortURL(origLink, shortLink);
        const urlInput = d.querySelector('.url-input');
        urlInput.classList.remove('danger');
        urlInput.value = '';
    } catch(err) {
        console.log(err);
        displayError('danger', 'Please add a valid link.')
    }
}

export { shortenURL }