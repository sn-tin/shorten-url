/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { shortenURL } from './shorten-url-api.js';

const d = document;
const darkViolet = 'hsl(257, 27%, 26%)';

const Events = () => {
    d.addEventListener('click', (e) => {
        const {target} = e;
        if(target.matches('.fa-bars')){
            const navMenu = d.querySelector('.navbar-collapse');
            navMenu.classList.toggle('active');
        }
        if(target.matches('.shorten-btn')){
            e.preventDefault();
            const urlInput = d.querySelector('.url-input');
            shortenURL(urlInput.value);
        }
        if(target.matches('.copy-button')){
            const shortenLink = target.previousElementSibling;
            shortenLink.select();
            shortenLink.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(shortenLink.value);
            target.textContent = 'Copied!';
            target.style.backgroundColor = darkViolet;
        }
    })
}

export { Events }