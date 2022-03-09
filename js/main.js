let btn = document.getElementById('get-data')

let httpReq = new XMLHttpRequest();
let dataNet;

let preloading = false;


const showPreloader = () => {

    let preLloader = document.getElementById('preloader')
    preLloader.style.display = 'block';
    preloading = true;
}
const hidePreloader = () => {

    let preLloader = document.getElementById('preloader')
    preLloader.style.display = 'none';
    preloading = false
}


const getData = () => {

    if (!preloading) {

        showPreloader();

        console.log('getData has start')
        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {

                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                for (let user of data) {

                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.pWebsite}<br />`;

                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
                }
                console.log(data)
                hidePreloader();

            })

        .catch(error => {
            console.error(error)
        })

    }

}


function scrollToEndOfPage() {

    let scrHeight = document.documentElement.scrollHeight;
    let scrTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if (Math.ceil(clientHeight + scrTop) >= scrHeight) {

        getData();
    }
}


window.addEventListener('scroll', scrollToEndOfPage)