import './styles.scss';
import createPicture from '../../../Picture';
import createIcon from '../../../ContactLink';

export default function (user) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('teamItem');
    const userPicture = createPicture(user.avatar, '/assets/user_icon.png', 'profile picture', ['userImg']);

    const h4 = document.createElement('h4');
    h4.innerText = user.name;
    const h5 = document.createElement('h5');
    h5.innerText = user.position;
    const p = document.createElement('p');
    p.innerText = user.description;

    const ul = document.createElement('ul');
    ul.classList.add('shareLinks', 'teamShareLinks');

    user.contacts.forEach(href => {
        createIcon(href, [], ul);
    });
    cardContainer.appendChild(userPicture);
    cardContainer.appendChild(h4);
    cardContainer.appendChild(h5);
    cardContainer.appendChild(p);
    cardContainer.appendChild(ul);
    return cardContainer;
}