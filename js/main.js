let btn = document.getElementById('get-data')

let httpReq = new XMLHttpRequest();
let dataNet;

function getData() {


    console.log('getData has start')

    httpReq.open('GET', 'https://akademia108.pl/api/ajax/get-users.php')

    httpReq.onreadystatechange = () => {


        dataNet = httpReq.responseText;
        console.log(data)
        console.log('Łączenie')




    }
}


function scrollToEndOfPage() {

    let scrHeight = document.documentElement.scrollHeight;
    let scrTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if ((clientHeight + scrTop + 5) > scrHeight) {
        getData();
    }
}


window.addEventListener('scroll', scrollToEndOfPage)