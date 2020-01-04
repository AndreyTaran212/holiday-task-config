const teamContainer = document.getElementById('our-team');

fetch('./data/employees.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(team => {
            const teamItem = document.createElement('div');
            teamItem.classList.add('teamItem');
            teamContainer.appendChild(teamItem);

            const image = new Image();
            image.src = team.avatar;
            teamItem.appendChild(image);

            const h4 = document.createElement('h4');
            h4.innerText = team.name;
            teamItem.appendChild(h4);

            const h5 = document.createElement('h5');
            h5.innerText = team.position;
            teamItem.appendChild(h5);

            const p = document.createElement('p');
            p.innerText = team.description;
            teamItem.appendChild(p);

            const ul = document.createElement('ul');
            ul.classList.add('shareLinks', 'teamShareLinks');
            teamItem.appendChild(ul);
            team.contacts.forEach(contact => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                const i = document.createElement('i');

                ul.appendChild(li);
                li.appendChild(a);
                a.setAttribute('href', contact.link);
                a.appendChild(i);
                i.setAttribute('class', contact.class);
            });

        });

    });
