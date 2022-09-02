/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import './styles/main.scss';
import * as bootstrap from 'bootstrap';
import { DOMcontent } from './modules/content';
import { Events } from './modules/events';
import { shortenURL } from './modules/shorten-url-api.js';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
    DOMcontent();
    Events();
    shortenURL('https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G')
})