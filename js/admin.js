let row = document.getElementsByTagName('tbody')[0]

console.log(row)

row.innerHTML = ``

async function API(){
    
    const api = await fetch('https://soundgarden-api.vercel.app/events', {method: 'GET'})

    const e = await api.json()

    console.log(e)

    let numero = 0

    e.map((item)=>{

        numero++

        row.innerHTML += `
     <tr>
        <th scope="row">${numero}</th>
        <td>${item.scheduled}</td>
        <td>${item.name}</td>
        <td>${item.attractions}</td>
        <td>
            <a href="" name ="${item.number_tickets}" id="${item.name}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
            <a href='excluir-evento.html?id=${item._id}' class="btn btn-danger">excluir</a>
        </td>
    </tr>
        `     

        let reservas = document.getElementsByClassName('btn btn-dark')

        Array.from(reservas).map((e)=>{
            e.addEventListener('click', (ev)=>{
                ev.preventDefault()

                if(e.name > 1){
                    alert('Há ' +e.name+ ' ingressos disponíveis para: ' +e.id)
                } else if (e.name ==1){
                    alert('Há ' +e.name+ ' ingresso disponível para: ' +e.id)
                } else {
                    alert(e.id+ ' está esgotado!')
                }
            })
        })

    })




}

API()