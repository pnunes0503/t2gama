let bsubimit = document.getElementsByClassName('btn btn-primary')[0]

let nome = document.getElementById('nome')

let atracoes = document.getElementById('atracoes')

let descricao = document.getElementById('descricao')

let data = document.getElementById('data')

let lotacao = document.getElementById('lotacao')

let div = document.getElementsByTagName('div')[3]

console.log(div)

bsubimit.addEventListener('click', ((e)=>{
    e.preventDefault()

    const nome_valor = nome.value

    const atracoes_valor = atracoes.value

    const descricao_valor = descricao.value

    const data_valor = data.value

    const lotacao_valor = lotacao.value

    async function api(){


        const oi = await fetch('https://soundgarden-api.vercel.app/events', {method: 'POST',
        headers: {'content-type': 'application/json; charset=UTF-8',},
        body: JSON.stringify({
            
                "name": nome_valor ,
                "poster": "link da imagem",
                "attractions": [
                    atracoes_valor
                ],
                "description": descricao_valor,
                "scheduled": '2023-04-29T22:43:00.000Z',
                "number_tickets": lotacao_valor
            
            
        })


    })
    
    let e = await oi.json()

    console.log(e)

    alert(e.name+ ' foi criado com sucesso! Clique em painel para retornar ao painel administrativo(no mesmo lugar onde estava escrito enviar)!')
    
    }

    api()

bsubimit.style.cssText +=`
display: none;
`
div.innerHTML += `
<a class="btn btn-primary" href="admin.html">Painel</a>
`


}))

