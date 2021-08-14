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

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    let data = {
        nombre: userName,
        provincia: userProvince,
        email: userEmail,
        horario: userTime,
        tel: userTel,
        consulta: userQuery
    }

    var raw = JSON.stringify(data);
        
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
       
    
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response => response.text())
    .then(result => {
        let containerSent = document.getElementById('sent')
        let msjSent = document.getElementById('text-sent');
        let mensaje = '<p class="sent">Enviado correctamente</p>';
        msjSent.innerHTML = mensaje;
        containerSent.appendChild(msjSent);
        console.log(result);
    })
    .catch(error => console.log('error', error));

}