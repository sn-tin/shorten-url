/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import MainIllustration from '../assets/illustration-working.svg';
import Logo from '../assets/logo.svg'
import LogoWhite from '../assets/logo-white.svg';
import { FeaturesCards } from './feature-cards';

const d = document;

const DOMcontent = () => {
    const body = d.querySelector('body')

    const navbar = (() => {
        const nav = d.createElement('nav');
        nav.className = 'navbar navbar-expand-lg';
        const navContainer = d.createElement('div');
        navContainer.className = 'nav-content container-fluid';
        const navLogo = d.createElement('img');
        navLogo.className = 'navbar-brand';
        navLogo.src = Logo;
        const toggleButton = d.createElement('a');
        toggleButton.innerHTML = `
            <i class="fa-solid fa-bars fa-xl"></i>
        `;
        const navItemsContainer = d.createElement('div');
        navItemsContainer.className = 'navbar-collapse';
        const navItems = d.createElement('ul');
        navItems.className = 'navbar-nav';
        navItems.innerHTML = `
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Resources</a>
            </li>
        `
        const navButtonsContainer = d.createElement('div');
        navButtonsContainer.className = 'nav-buttons';
        navButtonsContainer.innerHTML = `
            <a class="nav-link log-in-btn" href="#">Login</a>
            <button class="sign-up-btn rounded-pill">Sign Up</button>
        `;
        body.appendChild(nav);
        nav.appendChild(navContainer);
        navContainer.appendChild(navLogo);
        navContainer.appendChild(toggleButton);
        navContainer.appendChild(navItemsContainer);
        navItemsContainer.appendChild(navItems);
        navItemsContainer.appendChild(navButtonsContainer);
    })()

    const mainSection = (() => {
        const mainContent = d.createElement('section');
        mainContent.id = 'main-content';
        const mainText = d.createElement('div');
        mainText.className = 'main-text';
        mainText.innerHTML = `
            <h1 class="title-text">More than just shorter links</h1>
            <p class="sub-text">Build your brand’s recognition and get detailed insights 
            on how your links are performing.
            </p>
            <button class="main-button rounded-pill">Get Started</button>
        `;
        const mainImage = d.createElement('div');
        mainImage.className = 'main-image';
        const illustration = d.createElement('img');
        illustration.className = 'main-illustration';
        illustration.src = MainIllustration;

        body.appendChild(mainContent);
        mainContent.appendChild(mainText);
        mainContent.appendChild(mainImage)
        mainImage.appendChild(illustration);
    })()

    const urlFormSection = (() => {
        const urlForm = d.createElement('section'); 
        urlForm.id = 'url-form';
        const urlFormContent = d.createElement('div');
        urlFormContent.className = 'url-form-content';
        const formInput = d.createElement('form');
        formInput.innerHTML = `
            <input type="text" class="url-input" placeholder="Shorten a link here..." required>
            <input type="submit" class="shorten-btn" value="Shorten It!">
        `;

        body.appendChild(urlForm);
        urlForm.appendChild(urlFormContent);
        urlFormContent.appendChild(formInput);
    })()

    const featuresSection = (() => {
        const features = d.createElement('section');
        features.id = 'features';
        const featuresContainer = d.createElement('div');
        featuresContainer.className = 'features-content';
        const featuresText = d.createElement('div');
        featuresText.className = 'features-text';
        featuresText.innerHTML = `
            <h2 class="features-title">Advanced Statistics</h2>
            <p class="features-subtext">Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
        `;

        body.appendChild(features);
        features.appendChild(featuresContainer);
        featuresContainer.appendChild(featuresText);
        featuresContainer.appendChild(FeaturesCards());
    })()

    const ctaSection = (() => {
        const cta = d.createElement('section');
        cta.id = 'call-to-action';
        const ctaContainer = d.createElement('div');
        ctaContainer.className = 'cta-content';
        ctaContainer.innerHTML = `
            <h3 class="cta-title">Boost your links today</h3>
            <button class="cta-button rounded-pill">Get Started</button>
        `;
        body.appendChild(cta);
        cta.appendChild(ctaContainer);
    })()

    const footerSection = (() => {
        const footer = d.createElement('footer');
        footer.id = 'footer';
        const footerContainer = d.createElement('div');
        footerContainer.className = 'footer-content';
        /* Footer Logo */
        const footerLogo = d.createElement('img');
        footerLogo.className = 'footer-brand';
        footerLogo.src = LogoWhite;
        /* Features */
        const featureContent = d.createElement('div');
        featureContent.className = 'features';
        featureContent.innerHTML = `
            <h4 class="footer-sub-titles">Features</h4>
        `;
        const featuresList = d.createElement('ul')
        featuresList.className = 'list-unstyled features-list';
        featuresList.innerHTML = `
            <li class="footer-sub-items">Link Shortening</li>
            <li class="footer-sub-items">Branded Links</li>
            <li class="footer-sub-items">Analytics</li>            
        `;
        /* Resources */
        const resourcesContent = d.createElement('div');
        resourcesContent.className = 'resources';
        resourcesContent.innerHTML = `
            <h4 class="footer-sub-titles">Resources</h4>
        `;
        const resourcesList = d.createElement('ul');
        resourcesList.className = 'list-unstyled resources-list';
        resourcesList.innerHTML = `
            <li class="footer-sub-items">Blog</li>
            <li class="footer-sub-items">Developers</li>
            <li class="footer-sub-items">Support</li>            
        `;
        /* Company */
        const companyContent = d.createElement('div');
        companyContent.className = 'company';
        companyContent.innerHTML = `
            <h4 class="footer-sub-titles">Company</h4>
        `;
        const companyList = d.createElement('ul');
        companyList.className = 'list-unstyled company-list';
        companyList.innerHTML = `
            <li class="footer-sub-items">About</li>
            <li class="footer-sub-items">Our Team</li>
            <li class="footer-sub-items">Careers</li> 
            <li class="footer-sub-items">Contact</li>                
        `;
        /* Socials */
        const socialsContent = d.createElement('div');
        socialsContent.className = 'socials-list';
        socialsContent.innerHTML = `
            <a class="socials social-fb" href="#">
                <i class="fa-brands fa-square-facebook fa-xl"></i>
            </a>
            <a class="socials social-twt" href="#">
                <i class="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a class="socials social-pin" href="#">
                <i class="fa-brands fa-pinterest fa-xl"></i>
            </a>
            <a class="socials social-ig" href="#">
                <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
        `;

        body.appendChild(footer);
        footer.appendChild(footerContainer);
        footerContainer.appendChild(footerLogo);
        footerContainer.appendChild(featureContent);
        featureContent.appendChild(featuresList);
        footerContainer.appendChild(resourcesContent);
        resourcesContent.appendChild(resourcesList);
        footerContainer.appendChild(companyContent);
        companyContent.appendChild(companyList);
        footerContainer.appendChild(socialsContent);
    })()
}

export { DOMcontent }