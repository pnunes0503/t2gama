let url = window.location.href 

let _id = url.replace('https://pnunes0503.github.io/t2gama/editar-evento.html?id=', '')

console.log(_id)

async function API(){
    const api = await fetch('https://soundgarden-api.vercel.app/events/'+_id , {method: 'GET'})

    const evento = await api.json()

    const div = document.getElementsByTagName('div')[3]

    div.innerHTML = `
    <div>
                    <!-- - cadastro de evento (nome, atrações, descrição, horário, data, numero de ingressos) -->
                    <form class="col-6">
                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nome" aria-describedby="nome" placeholder ="${evento.name}" value="${evento.name}">
                        </div>
                        <div class="mb-3">
                            <label for="banner" class="form-label">Banner</label>
                            <input type="text" class="form-control" id="banner" aria-describedby="banner" placeholder="${evento.poster}" value="${evento.poster}">
                            <small>adicione o link da imagem</small>
                        </div>
                        <div class="mb-3">
                            <label for="atracoes" class="form-label">Atrações</label>
                            <input type="text" class="form-control" id="atracoes" aria-describedby="atracoes" placeholder="${evento.attractions}" value="${evento.attractions}">
                            <small>insira o nome dos artistas separados por vírgula</small>
                        </div>
                        <div class="mb-3">
                            <label for="descricao" class="form-label">Descrição</label>
                            <textarea name="descricao" id="descricao" class="form-control" rows="5" placeholder="${evento.description}">${evento.description}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="data" class="form-label">Data</label>
                            <input type="datetime" name="data" id="data" class="form-control" placeholder="00/00/00 00:00" placeholder="${evento.scheduled}" value="${evento.scheduled}">
                        </div>
                        <div class="mb-3">
                            <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
                            <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao" placeholder="${evento.number_tickets}" value="${evento.number_tickets}">
                        </div>
                        <button type="submit" class="btn btn-primary" id="roar">editar</button>
                    </form>
                </div>
    `

    const name = document.getElementById('nome')

    const banner = document.getElementById('banner')

    const atracoes = document.getElementById('atracoes')

    const descricao = document.getElementById('descricao')

    const data = document.getElementById('data')

    const lotacao = document.getElementById('lotacao')



 const botao = document.getElementById("roar")
 
 botao.addEventListener('click', async (e)=>{
     e.preventDefault()


     const nome_valor = name.value

     const poster_valor = banner.value
 
     const atracoes_valor = atracoes.value
 
     const descricao_valor = descricao.value
 
     const lotacao_valor = lotacao.value
 
     const data_valor = data.value

     async function function_editar (){

     const editar = await fetch('https://soundgarden-api.vercel.app/events/'+_id, {method: 'PUT',
     headers: {'content-type': 'application/json; charset=UTF-8',},
         
         body: JSON.stringify({
            "name": nome_valor ,
                "poster": 'link da imagem',
                "attractions": [
                    atracoes_valor
                ],
                "description": descricao_valor,
                "scheduled": '2023-04-29T22:43:00.000Z',
                "number_tickets": lotacao_valor
         })
    })



    const editar_json = await editar.json()

    console.log(editar_json)

    alert(editar_json.name+ ' foi alterado com sucesso! Clique em painel para retornar ao painel administrativo(no mesmo lugar onde estava escrito editar)!')

}

function_editar()

    botao.style.cssText +=`
     display: none;
`

    div.innerHTML += `
     <a class="btn btn-primary" href="admin.html">Painel</a>
      `

      

 })



    
}

API()
