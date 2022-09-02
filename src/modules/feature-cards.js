/* eslint-disable import/prefer-default-export */
import Brand from '../assets/icon-brand-recognition.svg';
import Records from '../assets/icon-detailed-records.svg';
import Customizable from '../assets/icon-fully-customizable.svg';

const d = document;

const FeaturesCards = () => {
    const featuresCard = d.createElement('div');
    featuresCard.className = 'features-cards';

    const cardDetails = [
        {
            img: Brand,
            title: 'Brand Recognition',
            para: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
        },
        {
            img: Records,
            title: 'Detailed Records',
            para: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
        },
        {
            img: Customizable,
            title: 'Fully Customizable',
            para: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
        }
    ]
    
    const cards = cardDetails;
    cards.forEach(card => {
        const cardItems = d.createElement('div');
        cardItems.className = 'card';
        const cardBody = d.createElement('div')
        cardBody.className = 'card-body';
        cardBody.innerHTML = `
            <div class="feature-icon">
                <img class="icon" src=${card.img}>
            </div>
            <h3 class="card-title">${card.title}</h3>
            <p class="card-text">${card.para}</p>
        `;
        featuresCard.appendChild(cardItems)
        cardItems.appendChild(cardBody)
    });    

    return featuresCard;
}

export { FeaturesCards }