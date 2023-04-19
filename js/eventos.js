let botao = document.getElementsByClassName('btn btn-primary') // botões de redirecionamento p eventos

let banner = document.getElementsByClassName('full d-flex justify-content-center align-items-center')[0]

let div = document.getElementsByClassName('container d-flex justify-content-center align-items-center flex-wrap')[0]

div.innerHTML = ``

Array.from(botao).map((b)=>{
    b.setAttribute('href', 'cadastro-evento.html')
})

async function API(){

    const api = await fetch('https://soundgarden-api.vercel.app/events', {method: 'GET'})

    const e = await api.json()

    console.log(e)

    e.map((item)=>{

        div.innerHTML += `<article class="evento card p-5 m-3">
        <h2>${item.name} - ${item.scheduled}</h2>
        <h4>${item.attractions}</h4>
        <p>${item.description}</p>
        <a href="" class="btn btn-primary" id="${item._id}" name="${item.number_tickets}">reservar ingresso</a>
    </article>`

    let reservar = document.getElementsByClassName('btn btn-primary')

        Array.from(reservar).map((r)=>{
            r.addEventListener('click', ((re)=>{
                re.preventDefault()

                if(r.name <1){
                    alert('Evento esgotado!')
                } else if (r.name > 2){

                async function ingresso(){
                    const api = await fetch('https://soundgarden-api.vercel.app/events/'+r.id, {method: 'GET'})

                    const api_json = await api.json()
                
                    console.log(api_json)

                    const _id = api_json._id

                    const name = api_json.name

                    const poster = api_json.poster

                    const atracoes = api_json.attractions

                    const descricao = api_json.description

                    const data = api_json.scheduled

                    let tickets = api_json.number_tickets

                    tickets--

                    console.log(tickets)

                    const editar = await fetch('https://soundgarden-api.vercel.app/events/'+_id, {method: 'PUT',
                    headers: {'content-type': 'application/json; charset=UTF-8',},
                        
                        body: JSON.stringify({
                           "name": name ,
                               "poster": poster,
                               "attractions": [
                                   atracoes
                               ],
                               "description": descricao,
                               "scheduled": data,
                               "number_tickets": tickets
                        })
                   })

                   const editar_json = await editar.json() 

                   console.log(editar_json)

                   alert('Ingresso reservado com sucesso! Agora sobraram: '+tickets+ ' ingressos disponíveis')

                }
                ingresso()
} else if(r.name ==2){

    async function ingresso(){
        const api = await fetch('https://soundgarden-api.vercel.app/events/'+r.id, {method: 'GET'})

        const api_json = await api.json()
    
        console.log(api_json)

        const _id = api_json._id

        const name = api_json.name

        const poster = api_json.poster

        const atracoes = api_json.attractions

        const descricao = api_json.description

        const data = api_json.scheduled

        let tickets = api_json.number_tickets

        tickets--

        console.log(tickets)

        const editar = await fetch('https://soundgarden-api.vercel.app/events/'+_id, {method: 'PUT',
        headers: {'content-type': 'application/json; charset=UTF-8',},
            
            body: JSON.stringify({
               "name": name ,
                   "poster": poster,
                   "attractions": [
                       atracoes
                   ],
                   "description": descricao,
                   "scheduled": data,
                   "number_tickets": tickets,
            })
       })

       const editar_json = await editar.json() 

       console.log(editar_json)

       alert('Ingresso reservado com sucesso! Agora sobrou: '+tickets+ ' ingresso disponível')

    }
    
    ingresso()}
   else{

   async function ingresso(){
       const api = await fetch('https://soundgarden-api.vercel.app/events/'+r.id, {method: 'GET'})

       const api_json = await api.json()
   
       console.log(api_json)

       const _id = api_json._id

       const name = api_json.name

       const poster = api_json.poster

       const atracoes = api_json.attractions

       const descricao = api_json.description

       const data = api_json.scheduled

       let tickets = api_json.number_tickets

       tickets--

       console.log(tickets)

       const editar = await fetch('https://soundgarden-api.vercel.app/events/'+_id, {method: 'PUT',
       headers: {'content-type': 'application/json; charset=UTF-8',},
           
           body: JSON.stringify({
              "name": name ,
                  "poster": poster,
                  "attractions": [
                      atracoes
                  ],
                  "description": descricao,
                  "scheduled": data,
                  "number_tickets": tickets
           })
      })

      const editar_json = await editar.json() 

      console.log(editar_json)

      alert('Ingresso reservado com sucesso! Agora o eventou esgotou!')


   }
   ingresso()}

                
                
            }))
        })

    })
}

API()