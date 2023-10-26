const produto = document.getElementById("produto")
const valor = document.getElementById("valor")
const quantidade = document.getElementById("quantidade")
const botao = document.getElementById("btn-cadastrar")
const listar_cadastros = document.getElementById("listar_cadastrados")

botao.addEventListener("click", function () {
    let nome_produto = produto.value
    let valor_produto = valor.value
    let quantidade_produto = quantidade.value

    const valor_final = calcular_valor_final(valor.value, quantidade.value)

    let li_produto = document.createElement("li")
    let li_valor = document.createElement("li")
    let li_quantidade = document.createElement("li")
    let li_valor_final = document.createElement("li")

    //adicionando as class do bootstrap
    let ul = document.createElement("ul")
    ul.classList.add("list-group")
    ul.classList.add("list-group-horizontal")


    li_produto.classList.add("list-group-item")
    li_valor.classList.add("list-group-item")
    li_quantidade.classList.add("list-group-item")
    li_valor_final.classList.add("list-group-item")

    li_produto.textContent = nome_produto
    li_valor.textContent = valor_produto
    li_quantidade.textContent = quantidade_produto
    li_valor_final.textContent = valor_final

    ul.appendChild(li_produto)
    ul.appendChild(li_valor)
    ul.appendChild(li_quantidade)
    ul.appendChild(li_valor_final)

    listar_cadastros.appendChild(ul)

    produto.value = ""
    valor.value = ""
    quantidade.value = ""
    
})

function calcular_valor_final(valor, qtd) {
    return valor * qtd
}