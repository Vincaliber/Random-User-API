import React from 'react'
import './Home.css'
export default function Home() {

    let userList = [];
    // https://randomuser.me/api/0.8/?results=20
    fetch(
        "https://randomuser.me/api/0.8/?results=20"
    )
        .then((res) => res.json())
        .then(function (data) {
            createUser(data, 'create');
            userList.push(data);
        })
        .catch(function (err) {
            console.log(err);
        });

    const createDiv = (user, result) => {
        const mainDiv = document.createElement('div');
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        const titleDiv = document.createElement('div');
        const h4 = document.createElement('h4');
        const nickName = document.createElement('p');
        const email = document.createElement('div');
        const emailDiv = document.createElement('div');
        const emailAddress = document.createElement('p');
        const phone = document.createElement('div');
        const phoneDiv = document.createElement('div');
        const phoneAddress = document.createElement('p');
        const address = document.createElement('div');
        const addressDiv = document.createElement('div');
        const addressLocation = document.createElement('p');

        mainDiv.setAttribute('class', 'gridDiv');

        img.setAttribute('class', 'image');
        img.setAttribute('src', user.user.picture.large);
        img.setAttribute('alt', user.user.name.first);
        imgDiv.appendChild(img);


        titleDiv.setAttribute('class', 'titleDiv');


        nickName.setAttribute('class', 'nickName');
        h4.setAttribute('class', 'h4Style');
        h4.innerHTML = `${user.user.name.title} ${user.user.name.first} ${user.user.name.last}`;
        nickName.innerHTML = `[ ${user.user.username} ]`;
        titleDiv.appendChild(h4);
        titleDiv.appendChild(nickName);

        email.setAttribute('class', 'emailSection');

        emailDiv.setAttribute('class', 'emailText')
        emailDiv.innerHTML = 'Email';

        emailAddress.innerHTML = user.user.email;
        email.appendChild(emailDiv);
        email.appendChild(emailAddress);

        phone.setAttribute('class', 'phoneSection');

        phoneDiv.setAttribute('class', 'phoneText')
        phoneDiv.innerHTML = 'Phone';

        phoneAddress.innerHTML = user.user.phone;
        phone.appendChild(phoneDiv);
        phone.appendChild(phoneAddress);

        address.setAttribute('class', 'addressSection');

        addressDiv.setAttribute('class', 'addressText')
        addressDiv.innerHTML = 'Address';

        addressLocation.innerHTML = `${user.user.location.city}
         ${user.user.location.state}
         ${user.user.location.street} - ${user.user.location.zip}`;
        address.appendChild(addressDiv);
        address.appendChild(addressLocation);

        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(titleDiv);
        mainDiv.appendChild(email);
        mainDiv.appendChild(phone);
        mainDiv.appendChild(address);
        result.appendChild(mainDiv);
    }
    const createUser = (resultData, params) => {
        let result = document.getElementById('result');
        result.innerHTML = '';

        if (params === 'create') {
            resultData.results.forEach(function (user) {

                createDiv(user, result);

            })
        } else {
            resultData.forEach(function (user) {

                createDiv(user, result);

            })
        }

    }



    const search = (query) => {
        let result1 = userList.map(u => u.results);
        let name = result1.map(r => r);
        const resultData = name[0].filter(n => (`${n.user.name.title} ${n.user.name.first} ${n.user.name.last}`).toLowerCase().indexOf(query) > -1);
        createUser(resultData, 'search');
    };


    return (
        <div >
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <input type="search" name="search" id="search" placeholder="search by name..." onChange={(e) => search(e.target.value)} />
                        <ul id="result" className="list-group">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}