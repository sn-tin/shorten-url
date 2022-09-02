/* eslint-disable import/prefer-default-export */
const d = document;

const resultShortURL = (orig, short) => {
    const resultContainer = d.createElement('div');
    resultContainer.className = 'result-content';
    const resultURL = d.createElement('div');
    resultURL.className = 'result-url';
    resultURL.innerHTML = `
        <span class="links original-link">${orig}</span>
        <div class="copy-url">
            <input tpe="text" class="links shorten-link" value="${short}" readonly>
            <button class="copy-button">Copy</button>
        </div>
    `;
    resultContainer.appendChild(resultURL);
    const form = d.getElementById('url-form');
    form.insertAdjacentElement('beforeend', resultContainer);
}

const shortenURL = async (url) => {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await response.json();
        const origLink = data.result.original_link;
        const shortLink = data.result.full_short_link2;
        console.log(data, origLink, shortLink)
        resultShortURL(origLink, shortLink);
    } catch(err) {
        console.log(err);
        // alert("Please submit valid URL");
    }
}

export { shortenURL }