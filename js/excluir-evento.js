let div = document.getElementsByTagName('div')[3]

console.log(div)

let url = window.location.href

let _id = url.replace('http://127.0.0.1:5500/excluir-evento.html?id=', '')

console.log(_id)



async function API(){
    
    const api = await fetch('https://soundgarden-api.vercel.app/events/'+_id , {method: 'GET'})

    const api_json = await api.json()

    console.log(api_json)

    const div = document.getElementsByTagName('div')[3]

    console.log(div)

    const nomeEvento = api_json.name

    div.innerHTML = `<div>

    <form class="col-6">
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" aria-describedby="nome" value="${api_json.name}" disabled="">
        </div>
        <div class="mb-3">
            <label for="banner" class="form-label">Banner</label>
            <input type="text" class="form-control" id="banner" aria-describedby="banner" value="${api_json.poster}" disabled="">
            <small>adicione o link da imagem</small>
        </div>
        <div class="mb-3">
            <label for="atracoes" class="form-label">Atrações</label>
            <input type="text" class="form-control" id="atracoes" aria-describedby="atracoes" value="${api_json.attractions}" disabled="">
            <small>insira o nome dos artistas separados por vírgula</small>
        </div>
        <div class="mb-3">
            <label for="descricao" class="form-label">Descrição</label>
            <textarea name="descricao" id="descricao" class="form-control" rows="5" disabled="">${api_json.description}</textarea>
        </div>
        <div class="mb-3">
            <label for="data" class="form-label">Data</label>
            <input type="datetime" name="data" id="data" class="form-control" placeholder="00/00/00 00:00" value="${api_json.scheduled}" disabled="">
        </div>
        <div class="mb-3">
            <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
            <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao" value="${api_json.number_tickets}" disabled="">
        </div>
        <button type="submit" class="btn btn-danger">excluir pra sempre</button>
    </form>
</div>`

    const botao = document.getElementsByClassName('btn btn-danger')[0]

   console.log(botao)

   botao.addEventListener('click', async (e)=>{

    e.preventDefault()

    async function deletando(){

    const resposta = await fetch('https://soundgarden-api.vercel.app/events/'+_id, {method: 'DELETE'})

    console.log(resposta)

    }

    deletando()

    botao.style.cssText +=`
     display: none;
    `

    div.innerHTML += `
    <a class="btn btn-primary" href="admin.html">Painel</a>
     `

    alert(nomeEvento+ ' foi ecluído com sucesso! Clique em painel para retornar ao painel administrativo(no mesmo lugar onde estava escrito excluir)!')

   })
}

API()