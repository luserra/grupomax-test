console.log('hello');

// PRODUCTOS
let btnVer = document.getElementById('btn-ver')
btnVer.addEventListener('click', viewProducts);

function viewProducts() {
    let products = document.getElementById('container-products');
    //let oneProduct = document.getElementById('one-product');
    products.classList.add("visible");
    //oneProduct.classList.add("visible");
}



/* function hol() {
    console.log('SI');
}  */


let btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', form);

function form(e) {
    let userName = document.getElementById('nombre').value;
    let userProvince = document.getElementById('provincia').value;
    let userEmail = document.getElementById('email').value;
    let userTime = document.getElementById('horario').value;
    let userTel = document.getElementById('tel').value;
    let userQuery = document.getElementById('consulta').value;

    if (userName && userProvince && userEmail && userTime && userTel && userQuery) {
        e.preventDefault();
    } else {
        return;
    }

    //console.log(userName + userProvince + userEmail + userTime + userTel + userQuery);


    let data = {
        nombre: userName,
        provincia: userProvince,
        email: userEmail,
        horario: userTime,
        tel: userTel,
        consulta: userQuery
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IlBROE5NNE1RTTIyVWNBcDR2OERENHc9PSIsInZhbHVlIjoiRkNQeWtPVHFQbVM1ZTViSFZHdTR0ZEJZTDZkQmNoRXJ3UzZQb28yVkJKR2lMTnczXC9oaFpGQXNtNTNLTXhjRXh2Y0dwN3Foa0RVTXFwcU1IeVRpSFd3PT0iLCJtYWMiOiIzMGQwNDBlYTI4YTUxYzhiOWRmOGFlYzVhYTQyZWMzZmZiYzFmY2ViZjBlM2JiYjE4ZjBjMzQ3MjczN2UwOWE3In0%3D; laravel_session=eyJpdiI6ImdMbjJrNHpYZDF5bHdKS1pXZmhjd1E9PSIsInZhbHVlIjoidytjV2ZoYUMxMlZXSEV4ZnBBSW1DaURCNVwvVzByMnpvNTM3REhhSVF1SkNRSHJ1WGpNUGVqOGFqSWJDMWkrTXR5cDZ6STZEckxTSlUzKzhVVXFIeUVRPT0iLCJtYWMiOiJhYWFmMmUxNmIxZjBlNWZhMWI2YzRiMDY0ODE5YWE0NjU4NTFkODk3MmQyYTBmOWE5ZmYwZWYzNDlhZWJjZmE1In0%3D");

    var raw = JSON.stringify(data);
        
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
        
    fetch("https://sistemacaliva.com", requestOptions)
        .then(response => response.text())
        .then(result => {
            let containerSent = document.getElementById('sent')
            let msjSent = document.getElementById('text-sent');
            let mensaje = '<p class="sent">Enviado correctamente</p>';
            msjSent.innerHTML = mensaje;
            containerSent.appendChild(msjSent);
            console.log(result);
        })
        .catch(error => console.log('Error', error));
}



// response.setHeader("Access-Control-Allow-Origin", "*");
//response.setHeader("Access-Control-Allow-Credentials", "true");
//response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); */



/* fetch("https://sistemacaliva.com/api/front-test", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
} */