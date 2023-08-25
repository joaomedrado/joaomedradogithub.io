
// // CHAMADA DO HEADER (CABEÇALHO PAI)
// const header = document.getElementById(`cabecalho-pai`)

// // FUNÇÃO QUE CRIA O LINK, PASSANDO PARAMENTROS QUE IRA CRIAR OS ATRIBUTOS DO LINK
// function links(caminhoLink, nomeLink,id){
//     let link = document.createElement(`a`)
//     link.setAttribute(`href`, caminhoLink)
//     link.innerText = nomeLink
//     link.classList.add(`links`)
//     link.id = id
//     return link
// }
// //  VARIAVEIS QUE CRIA CADA LINK INDIVIDUALMENTE CADA LINK, CHAMANDO A FUNÇÃO QUE EXECUTA A CRIAÇÃO DOS LINKS E PASSANDO OS PARAMETROS PARA CRIAR OS ELEMENTOS
// let novoPaciente = links(`#`,`Novo Paciente`,`idNovoPaciente`) 
// let editarNomePaciente = links(`#`, `Editar Nome Paciente`,`idEditarPaciente`)
// let verificarAtendimentoPaciente = links(`#`,`Verificar Atendimento`,`idVerificarPaciente`)
// let mudarStatusPaciente = links(`#`,`Verificar Status`,`idVerificarStatus`)
// let painelPrincipal = links(`#`,`Painel Principal`,`idCriacaoPainelPrincipal`)

// // NÓ QUE LIGA CADA LINK AO HEADER
// header.append(
//     novoPaciente,
//     editarNomePaciente,
//     verificarAtendimentoPaciente,
//     mudarStatusPaciente,
//     painelPrincipal)

const botaoSobreNosHome = document.getElementById(`sobreNosHome`)
const sessaoSobreNosHome = document.getElementById(`sessaoSobreNosHome`)

botaoSobreNosHome.addEventListener(`click`, ()=>{
    sessaoSobreNosHome.scrollIntoView({behavior:"auto"})
})


const botaoConsultarHomeEvento = document.getElementById(`botaoConsultaSobreNos`)
botaoConsultarHomeEvento.addEventListener(`click`, botaoConsultaHome)

let divAtivadaBotaoConsultaHome = false
function botaoConsultaHome(){
    removeElementsHome()
    removeElementCriarPaciente()
    removeElementEditarPaciente()
    removeElements()
    removeElementVericarPaciente()
    removeElementEditarStatus()
    removeElementAreMedica()
    if (!divAtivadaBotaoConsultaHome){
        criacaoElementosNovoPaciente()
    }
    divAtivadaRetornoPainel = true
    divAtivadaNovoPaciente = false
    divAtivadaEditarPaciente = false
    divAtivadaVerificarPaciente = false
    divAtivadaEditarStatus = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedica = false
}




const retornoPainel = document.getElementById(`idCriacaoPainelPrincipal`)
retornoPainel.addEventListener(`click`, retornoPainelFunction)

let divAtivadaRetornoPainel = false
function retornoPainelFunction() {
    if (divAtivadaRetornoPainel) {
        return
    }

    if (!divAtivadaRetornoPainel) {
        removeElementsHome()
        removeElementCriarPaciente()
        removeElementEditarPaciente()
        removeElements()
        removeElementVericarPaciente()
        removeElementEditarStatus()
        removeElementAreMedica()
        const retornoPainel = document.getElementById(`retornoPainelLink`)
        retornoPainel.classList.add(`retornoPainelLink`)
        retornoPainel.append(criacaoPainel())
    }
    divAtivadaRetornoPainel = true
    divAtivadaNovoPaciente = false
    divAtivadaEditarPaciente = false
    divAtivadaVerificarPaciente = false
    divAtivadaEditarStatus = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedica = false
}

const arrayPrioridade = []
const arraynormal = []
const arrayMedicoAtivo = [
    { usuario: `Joao Carlos`, senha: `1234`, guiche: `01` },
    { usuario: `Maria Fernandes`, senha: `1234`, guiche: `02` },
    { usuario: `Pedro Almeida`, senha: `1234`, guiche: `03` },
    { usuario: `Sofia Costa`, senha: `1234`, guiche: `04` },
    { usuario: `Lucas Silva`, senha: `1234`, guiche: `05` },
    { usuario: `Isabella Santos`, senha: `1234`, guiche: `06` }]



function criacaoPainel() {

    let elementP = ``
    let elementN = ``



    for (let controle = 0; controle < arrayPrioridade.length; controle++) {
        elementP += `
         ${arrayPrioridade[controle].nome} 
        `

    }

    for (let controle = 0; controle < arraynormal.length; controle++) {
        elementN += `
        ${arraynormal[controle].nome} 
        `

    }



    const painel = document.getElementById(`painelPacientes`)

    // CRIAÇÃO DO PAINEL PREFRENCIAL E SEUS ATRIBUTOS
    let criacaoDoPainelP = document.createElement(`div`)
    criacaoDoPainelP.id = `idPainelPreferencial`
    criacaoDoPainelP.classList.add(`painelPreferencial`)

    let divFlexTituloP = document.createElement(`div`)
    divFlexTituloP.classList.add(`divFlexTituloPainelPreferencial`)
    divFlexTituloP.id = `idDivFlexTitulo`


    let tituloPreferencial = document.createElement(`h3`)
    tituloPreferencial.innerText = `PREFERENCIAL`
    tituloPreferencial.classList.add(`tituloPainelPreferencial`)




    let listaLI = document.createElement(`li`)
    listaLI.innerText = elementP.toLocaleUpperCase()
    listaLI.classList.add(`listaPrefencial`)





    // NÓ DO PAINEL PREFERENCIAL E SEUS ATRIBUTOS
    divFlexTituloP.append(tituloPreferencial)
    criacaoDoPainelP.append(divFlexTituloP, listaLI)




    // CRIAÇÃO DO PAINEL NORMAL E SEUS ATRIBUTOS
    let criacaoDoPainelN = document.createElement(`div`)
    criacaoDoPainelN.id = `idPainelNormal`
    criacaoDoPainelN.classList.add(`painelNormal`)


    let divFlexTituloN = document.createElement(`div`)
    divFlexTituloN.classList.add(`divFlexTituloPainelNormal`)
    divFlexTituloN.id = `idDivFlexTitulo`


    let tituloPacienteNormal = document.createElement(`h3`)
    tituloPacienteNormal.innerText = `NORMAL`
    tituloPacienteNormal.classList.add(`tituloPainelNormal`)


    let listaLIN = document.createElement(`li`)
    listaLIN.innerText = elementN.toLocaleUpperCase()
    listaLIN.classList.add(`listaNormal`)



    // NÓ DO PAINEL PREFERENCIAL E SEUS 

    divFlexTituloN.append(tituloPacienteNormal)
    criacaoDoPainelN.append(divFlexTituloN, listaLIN)


    // NÓ PAI DOS PAINES
    painel.append(criacaoDoPainelP, criacaoDoPainelN)
    return painel


}

const centralAtendimento = document.getElementById(`linkCentralAtendimentos`);

// Certifique-se de que essa variável está definida no escopo adequado

centralAtendimento.addEventListener(`click`, () => {
    removeElementAreMedica()
    removeElementCriarPaciente();
    removeElementEditarPaciente();
    removeElementVericarPaciente();
    removeElementEditarStatus();
    location.reload();
    divAtivadaVerificarPaciente = false;
    divAtivadaRetornoPainel = false;
    divAtivadaEditarStatus = false;
    divAtivadaNovoPaciente = false;
    divAtivadaAreaMedica = false

});


function removeElements() {
    const containerPai = document.getElementById('painelPacientes');

    // Remover elementos filhos até que não haja mais nenhum
    while (containerPai.firstChild) { // firstChild é um metodo que seleciona o primeiro filho de um elemento pai, ou seja, container-pai esta selecionando um filho
        containerPai.removeChild(containerPai.firstChild);
    }

}

function removeElementsHome() {
    const containerPai = document.getElementById('home');

    // Remover elementos filhos até que não haja mais nenhum
    while (containerPai.firstChild) { // firstChild é um metodo que seleciona o primeiro filho de um elemento pai, ou seja, container-pai esta selecionando um filho
        containerPai.removeChild(containerPai.firstChild);
    }

}

function createLabel(nomeId, textContent) {
    let addLabel = document.createElement(`label`)
    addLabel.setAttribute(`for`, nomeId)
    addLabel.textContent = textContent
    addLabel.classList.add(`labelStyle`)
    return addLabel
}

function createInput(nomeId, type = `text`, attname, placeholder) {
    let addinput = document.createElement(`input`)
    addinput.type = type
    addinput.id = nomeId
    addinput.placeholder = placeholder
    addinput.name = attname
    addinput.classList.add(`inputStyle`)
    return addinput
}

function elementRemoveInputs() {
    const removeInputValue = document.getElementById('inome');
    const removeInputStatusValue = document.getElementById('inputStatus');
    const removeInputEspecialista = document.getElementById(`inputEspecialista`)

    // Remover elementos filhos até que não haja mais nenhum
    if (removeInputValue && removeInputStatusValue) { // firstChild é um metodo que seleciona o primeiro filho de um elemento pai, ou seja, container-pai esta selecionando um filho
        removeInputValue.value = ``
        removeInputStatusValue.value = ``
        removeInputEspecialista.value = ``

    }
    controleElementosParaRemocaoeCriacao = true
}

document.getElementById(`btnMenuCabecalho`).addEventListener(`click`, mudarCoresBody)

let divAtivadaNovoPaciente = false
const addnovoPaciente = document.getElementById(`idNovoPaciente`)
addnovoPaciente.addEventListener(`click`,criacaoElementosNovoPaciente)

function mudarCoresBody() {
    document.body.classList.add(`mudarEstiloBodyImage`)
}

function criacaoElementosNovoPaciente() {
    removeElementAreMedica()
    removeElementsHome()
    removeElementVericarPaciente()
    removeElements()
    removeElementEditarStatus()
    removeElementEditarPaciente()
    if (divAtivadaNovoPaciente) {
        return
    }

    if (!divAtivadaNovoPaciente) {


        //  ELEMENTO HTML BODY SENDO CHAMADA PARA PODER DAR O NÓ NO SEU ELEMENT FILHO
        const cadastrarPaciente = document.getElementById(`cadastrarPaciente`)
        cadastrarPaciente.classList.add(`painelFormPai`)



        // ELEMENTO NOVO PACIENTE SENDO CRIADO
        const painelForm = document.createElement(`div`)
        painelForm.classList.add(`painelForm`)
        painelForm.id = `idPainelForm`

        let agruparInputsTitulo = document.createElement(`div`)
        agruparInputsTitulo.id = `IdAgruparTituloNomePaciente`
        agruparInputsTitulo.classList.add(`agruparTitulo`)

        let createTitulo = document.createElement(`h2`)
        createTitulo.innerText = `Cadastrar Paciente`
        createTitulo.classList.add(`h2CadastrarPaciente`)

        agruparInputsTitulo.append(createTitulo)

        let agruparInputsNomePaciente = document.createElement(`div`)
        agruparInputsNomePaciente.id = `IdAgruparInputsNomePaciente`
        agruparInputsNomePaciente.classList.add(`agruparInputs`)

        let newInputNomePaciente = createInput(`inome`, `text`, `nome`, `Nome paciente`)

        agruparInputsNomePaciente.append(newInputNomePaciente)

        let newInputStatus = createInput(`inputStatus`, `text`, `nameStatus`, `Preferencial/Normal`)

        let agruparInputsStatus = document.createElement(`div`)
        agruparInputsStatus.id = `IdAgruparInputsStatus`
        agruparInputsStatus.classList.add(`agruparInputs`)

        agruparInputsStatus.append(newInputStatus)

        let newInputTipoConsulta = createInput(`inputEspecialista`, `text`, `nameEspecialista`, `Tipo Consulta`)

        let agruparInputsEspecialista = document.createElement(`div`)
        agruparInputsEspecialista.id = `IdAgruparInputsEspecialista`
        agruparInputsEspecialista.classList.add(`agruparInputs`)

        agruparInputsEspecialista.append(newInputTipoConsulta)

        let agruparBtn = document.createElement(`div`)
        agruparBtn.id = `idAgruparBtn`

        let addBtnCadastrar = document.createElement(`button`)
        addBtnCadastrar.id = `idBtnCadastrar`
        addBtnCadastrar.innerText = `Cadastrar`
        addBtnCadastrar.classList.add(`btn`)
        addBtnCadastrar.addEventListener(`click`, btnCadastrarPaciente);

        agruparBtn.append(addBtnCadastrar)

        // NÓ PARA EXIBIR NA TELA
        painelForm.append(agruparInputsTitulo, agruparInputsNomePaciente, agruparInputsEspecialista, agruparInputsStatus, agruparBtn)

        cadastrarPaciente.appendChild(painelForm)


    }
    divAtivadaNovoPaciente = true
    divAtivadaVerificarPaciente = false
    divAtivadaRetornoPainel = false
    divAtivadaEditarStatus = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedica = false
}


function btnCadastrarPaciente() {
    let chamadaIdInputNomePaciente = document.getElementById(`inome`).value
    let chamadaIdInputStatus = document.getElementById(`inputStatus`).value
    let chamadaIdInputEspecialista = document.getElementById(`inputEspecialista`).value
    if (chamadaIdInputNomePaciente && chamadaIdInputStatus.toLocaleUpperCase() === `PREFERENCIAL` && chamadaIdInputEspecialista.toLocaleUpperCase()) {
        arrayPrioridade.push({ nome: chamadaIdInputNomePaciente, consulta: chamadaIdInputEspecialista, status: chamadaIdInputStatus })
        alert(`Consulta Marcada com Sucesso`)
    } else if (chamadaIdInputNomePaciente && chamadaIdInputStatus.toLocaleUpperCase() === `NORMAL` && chamadaIdInputEspecialista.toLocaleUpperCase()) {
        arraynormal.push({ nome: chamadaIdInputNomePaciente, consulta: chamadaIdInputEspecialista, status: chamadaIdInputStatus })
        alert(`Consulta Marcada com Sucesso`)
    } else {
        alert(`Opção Invalida`)
    }
    elementRemoveInputs()

}

function removeElementCriarPaciente() {
    const element = document.getElementById(`cadastrarPaciente`)

    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}



function removeElementEditarPaciente() {
    const element = document.getElementById(`editarPaciente`);

    if (element) { // Verifica se o elemento foi encontrado
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    } else {
        console.log("Elemento com id 'editarPaciente' não encontrado.");
    }
}

const linkEditarPaciente = document.getElementById(`idEditarPaciente`)
linkEditarPaciente.setAttribute(`data-bs-toggle`, `modal`)
linkEditarPaciente.setAttribute(`data-bs-target`, `#staticBackdrop`)



// const modalBody = document.getElementById(`modal-body`)

// const inputModal = document.createElement(`input`)
// inputModal.id = `idInputModal`
// inputModal.placeholder = `Nome Paciente`

// modalBody.append(inputModal)
let divAtivadaEditarPaciente = false
function elementsEditarPaciente() {
    removeElementAreMedica()
    removeElementsHome()
    removeElementCriarPaciente()
    removeElements()
    removeElementVericarPaciente()
    removeElementEditarStatus()

    if (divAtivadaEditarPaciente) {
        return
    }

    if (!divAtivadaEditarPaciente) {
        const elementPaiEditarPaciente = document.getElementById(`editarPaciente`)
        elementPaiEditarPaciente.classList.add(`styleEditarPaciente`)

        let elementBodyEditarPaciente = document.createElement(`div`)
        elementBodyEditarPaciente.id = `elementBodyEditarPaciente`
        elementBodyEditarPaciente.classList.add(`elementBodyEditarPaciente`)

        let form = document.createElement(`div`)
        form.classList.add(`styleFormEditarNome`)

        let inputNomeAtual = createInput(`idNomeAtual`, `text`, `iname`, `Nome paciente atual`)
        let inputNomeNovo = createInput(`idNomeNovo`, `text`, `inameNovo`, `Nome paciente novo`)
        let createTitulo = document.createElement(`h2`)
        createTitulo.innerText = `Editar nome`
        createTitulo.classList.add(`h2CadastrarPaciente`)

        let addBtnConfimar = document.createElement(`button`)
        addBtnConfimar.id = `idBtnConfirmar`
        addBtnConfimar.innerText = `Confirmar`
        addBtnConfimar.classList.add(`btn`)


        form.append(createTitulo, inputNomeAtual, inputNomeNovo, addBtnConfimar)

        elementBodyEditarPaciente.append(form)

        elementPaiEditarPaciente.appendChild(elementBodyEditarPaciente)
    }
    divAtivadaEditarPaciente = true
    divAtivadaNovoPaciente = false
    divAtivadaRetornoPainel = false
    divAtivadaVerificarPaciente = false
    divAtivadaEditarStatus = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedica = false
}



function addBtnModal(modalType, array) {
    const addBtnModalPreferencial = document.getElementById(modalType)
    addBtnModalPreferencial.addEventListener(`click`, () => {
        elementsEditarPaciente()

        const btnConfirmar = document.getElementById(`idBtnConfirmar`)
        btnConfirmar.addEventListener(`click`, () => {

            for (let controle = 0; controle < array.length; controle++) {
                let inputNomeAtualPrefencial = document.getElementById(`idNomeAtual`).value
                let inputNovoNomePreferencial = document.getElementById(`idNomeNovo`).value

                if (array[controle].nome === inputNomeAtualPrefencial) {
                    array[controle].nome = inputNovoNomePreferencial
                    alert(`Nome Alterado com sucesso`)
                } else {
                    alert(`Preencha os campos corretamente`)
                }
            }


        })


    })
}
addBtnModal(`btnPreferencialModal`, arrayPrioridade)
addBtnModal(`btnNormalModal`, arraynormal)






let divAtivadaVerificarPaciente = false
function createElementsVerificarPaciente() {
   
    removeElementEditarPaciente()
    removeElementAreMedica()
    removeElementsHome()
    removeElementCriarPaciente()
    removeElements()
   
    
    if (!divAtivadaVerificarPaciente) {
        removeElementEditarStatus()
       
        const verificarAtendimento = document.getElementById(`verificarAtendimento`)
        verificarAtendimento.classList.add(`verificarAtendimento`)

        const divFormpai = document.createElement(`div`)
        divFormpai.id = `elementFormPaiVerificarPaciente`
        divFormpai.classList.add(`elementBodyEditarPaciente`)

        let form = document.createElement(`div`)
        form.classList.add(`styleFormEditarNome`)

        let inputNomePaciente = createInput(`idNomePaciente`, `text`, `iname`, `Nome paciente `)
        let createTitulo = document.createElement(`h2`)
        createTitulo.innerText = `Verificar consulta`
        createTitulo.classList.add(`h2CadastrarPaciente`)

        let addBtnConfimar = document.createElement(`button`)
        addBtnConfimar.id = `idBtnConfirmarVerificarPaciente`
        addBtnConfimar.innerText = `Confirmar`
        addBtnConfimar.classList.add(`btn`)


        form.append(createTitulo, inputNomePaciente, addBtnConfimar)

        divFormpai.append(form)

        verificarAtendimento.appendChild(divFormpai)

        addBtnConfimarVerificarPaciente(arrayPrioridade, arraynormal)

    }
    divAtivadaVerificarPaciente = true
    divAtivadaEditarPaciente = false
    divAtivadaNovoPaciente = false
    divAtivadaRetornoPainel = false
    divAtivadaEditarStatus = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedica = false
}
const linkVerificarPaciente = document.getElementById(`idVerificarPaciente`)
linkVerificarPaciente.addEventListener(`click`, createElementsVerificarPaciente)



function removeElementVericarPaciente() {
    const elementVerificarAtendimento = document.getElementById(`verificarAtendimento`);

    if (elementVerificarAtendimento) { // Verifica se o elemento foi encontrado
        while (elementVerificarAtendimento.firstChild) {
            elementVerificarAtendimento.removeChild(elementVerificarAtendimento.firstChild);
        }
    } else {
        console.log("Elemento com id 'editarPaciente' não encontrado.");
    }
}
function addBtnConfimarVerificarPaciente(arrayP, arrayN) {



    const addBtnConfimarVerificarPaciente = document.getElementById(`idBtnConfirmarVerificarPaciente`)
    addBtnConfimarVerificarPaciente.addEventListener(`click`, () => {
        let inputNomePaciente = document.getElementById(`idNomePaciente`).value
        let consultaPaciente = arrayP.find((elemento) => {
            return elemento.nome === inputNomePaciente
        })
        let consulIdN = arrayN.find((elemento) => {
            return elemento.nome === inputNomePaciente
        })
        if (consultaPaciente) {
            alert(`Paciente ainda não foi consultado`)
        } else if (consulIdN) {
            alert(`Paciente ainda não foi consultado`)
        }
        else {
            alert(`Paciente já foi consultado`)
        }

    })

}





function removeElementAreMedica() {
    const element = document.getElementById(`loginAreaMedica`);

    if (element) { // Verifica se o elemento foi encontrado
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    } else {
        console.log("Elemento com id 'editarPaciente' não encontrado.");
    }
}

function removeElementAreaMedica() {
    const areaMedicaElement = document.getElementById('elementoCorpoAremedica');
    if (areaMedicaElement) {
        areaMedicaElement.remove();
        divAtivadaAreaMedica = false;
    }
}


let divAtivadaAreaMedica = false
const areMedica = document.getElementById(`idAreaMedica`)
areMedica.addEventListener(`click`, () => {
    createElementLoginAreaMedica()
})
let divAtivadaAreaMedicaCentralDeatendimento = false
function validacaoLogin() {
    let inputUsuario = document.getElementById(`idLoginMedico`).value.toLowerCase()
    let inputPassword = document.getElementById(`idLoginSenha`).value.toLowerCase()
    let verificaUsuarioDentroArrayExiste = arrayMedicoAtivo.some((elemento) => elemento.usuario.toLowerCase() === inputUsuario)
    let verificaSenhaDentroArrayExiste = arrayMedicoAtivo.some((elemento) => elemento.senha.toLowerCase() === inputPassword)
    if (verificaUsuarioDentroArrayExiste && verificaSenhaDentroArrayExiste) {
        removeElementAreaMedica()
        if (!divAtivadaAreaMedicaCentralDeatendimento) {
            criacaoPainelCentraAtendimento()
            if (removeElementAreMedica()) {
                divAtivadaAreaMedicaCentralDeatendimento = true
            }
        }


    } else {
        alert(`erro`)
    }
}








function createElementLoginAreaMedica() {
    removeElementsHome()
    removeElementCriarPaciente()
    removeElementEditarPaciente()
    removeElements()
    removeElementVericarPaciente()
    removeElementEditarStatus()
    if (divAtivadaAreaMedica) {
        return; // Se os elementos já existirem, não faça nada
    }
    if (!divAtivadaAreaMedica) {
        const areMedicaNopai = document.getElementById(`loginAreaMedica`)

        let corpoAremedica = document.createElement(`div`)
        corpoAremedica.id = `elementoCorpoAremedica`
        corpoAremedica.classList.add(`elementoAreaMedica`)

        let areaFormulario = document.createElement(`div`)
        areaFormulario.classList.add(`styleFormularioAreaMedica`)

        let createTituloAreaMedica = document.createElement(`h2`)
        createTituloAreaMedica.innerText = `Login`
        createTituloAreaMedica.classList.add(`h2CadastrarPaciente`)


        let inputUsuario = createInput(`idLoginMedico`, `text`, `iname`, `Usuário`)
        let inputPassword = createInput(`idLoginSenha`, `passwoard`, `inameNovo`, `Senha`)


        let addBtnConfimarAreaMedica = document.createElement(`button`)
        addBtnConfimarAreaMedica.id = `idBtnConfirmarLoginAreaMedica`
        addBtnConfimarAreaMedica.innerText = `Confirmar`
        addBtnConfimarAreaMedica.classList.add(`btn`)

        addBtnConfimarAreaMedica.addEventListener(`click`, validacaoLogin)

        areaFormulario.append(createTituloAreaMedica, inputUsuario, inputPassword, addBtnConfimarAreaMedica)
        corpoAremedica.append(areaFormulario)
        areMedicaNopai.append(corpoAremedica)
    }
    divAtivadaAreaMedica = true
    divAtivadaEditarPaciente = false
    divAtivadaRetornoPainel = false
    divAtivadaNovoPaciente = false
    divAtivadaVerificarPaciente = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedicaCentralDeatendimento = false
    divAtivadaEditarStatus = false
}




function criacaoPainelCentraAtendimento() {

    let elementP = ``
    let elementN = ``


    for (let controle = 0; controle < arrayPrioridade.length; controle++) {
        elementP += `
    ${controle + 1}º ${arrayPrioridade[controle].nome} 
        `
    }

    for (let controle = 0; controle < arraynormal.length; controle++) {
        elementN += `
        ${controle + 1}º ${arraynormal[controle].nome} 
        `
    }



    const painel = document.getElementById(`painelPacientes`)

    // CRIAÇÃO DO PAINEL PREFRENCIAL E SEUS ATRIBUTOS
    let criacaoDoPainelP = document.createElement(`div`)
    criacaoDoPainelP.id = `idPainelPreferencial`
    criacaoDoPainelP.classList.add(`painelPreferencial`)

    // CRIAÇÃO DIV PARA ALINHAR ELEMENTOS FILHOS DO PAINEL PREFERENCIAL
    let divFlexTituloP = document.createElement(`div`)
    divFlexTituloP.classList.add(`divFlexTituloPainelPreferencial`)
    divFlexTituloP.id = `idDivFlexTitulo`

    // CRIAÇÃO DO ELEMENTO TITULO DO PAINEL PREFERENCIAL
    let tituloPreferencial = document.createElement(`h3`)
    tituloPreferencial.innerText = `PREFERENCIAL`
    tituloPreferencial.classList.add(`tituloPainelPreferencial`)



    // CRIAÇÃO DO ELEMENTO LI DO PAINEL PREFERENCIAL
    let listaLI = document.createElement(`li`)
    listaLI.innerText = elementP.toLocaleUpperCase()
    listaLI.classList.add(`listaPrefencial`)


     // CRIAÇÃO DIV PARA ALINHAR ELEMENTO BOTAO DO PAINEL PREFERENCIAL
    let agruparBtnPreferencial = document.createElement(`div`)
    agruparBtnPreferencial.id = `idAgruparBtnPreferencial`
    agruparBtnPreferencial.classList.add(`agrupBtnConsultarPaciente`)

        // CRIAÇÃO DO ELEMENTO BOTAO DO PAINEL PREFERENCIAL
    let addBtnConsultarPreferencial = document.createElement(`button`)
    addBtnConsultarPreferencial.id = `idBtnConsultarPacientePreferencial`
    addBtnConsultarPreferencial.innerText = `Consultar`
    addBtnConsultarPreferencial.classList.add(`btn`)
    addBtnConsultarPreferencial.addEventListener(`click`, () => {
        let guicheMedicoPreferencial = prompt(`Digite seu Guiche:`)
        let confirm = window.confirm(`Deseja consultar o paciente Preferencial?`)

        if (confirm && guicheMedicoPreferencial) {
            const consultaPacientePreferencial = arrayPrioridade.shift()

            if (consultaPacientePreferencial) {

                elementP = ``
                for (let controle = 0; controle < arrayPrioridade.length; controle++) {
                    elementP += `
                    ${controle + 1}º ${arrayPrioridade[controle].nome} 
                    `
                }
                listaLI.innerText = elementP.toLocaleUpperCase()
                alert(`
                CONSULTA MÉDICA: ${consultaPacientePreferencial.consulta}
                PACIENTE: ${consultaPacientePreferencial.nome}
                GUICHE: ${guicheMedicoPreferencial}
                `)
            } else {
                alert("Não há pacientes normais para consultar.");
            }

        }
    })

    let addBtnAlterarStatusPreferencial = document.createElement(`button`)
    addBtnAlterarStatusPreferencial.id = `idBtnAlterarStatus`
    addBtnAlterarStatusPreferencial.innerText = `Alterar Status`
    addBtnAlterarStatusPreferencial.setAttribute(`data-bs-toggle`, `modal`)
    addBtnAlterarStatusPreferencial.setAttribute(`data-bs-target`, `#exampleModal`)
    addBtnAlterarStatusPreferencial.classList.add(`btn`)

    // NÓ DO PAINEL PREFERENCIAL E SEUS ATRIBUTOS
    agruparBtnPreferencial.append(addBtnConsultarPreferencial,addBtnAlterarStatusPreferencial)
    divFlexTituloP.appendChild(tituloPreferencial)
    criacaoDoPainelP.append(divFlexTituloP, listaLI, agruparBtnPreferencial)




    // CRIAÇÃO DO PAINEL NORMAL E SEUS ATRIBUTOS

    // CRIAÇÃO DO PAINEL NORMAL E SEUS ATRIBUTOS
    let criacaoDoPainelN = document.createElement(`div`)
    criacaoDoPainelN.id = `idPainelNormal`
    criacaoDoPainelN.classList.add(`painelNormal`)


    let divFlexTituloN = document.createElement(`div`)
    divFlexTituloN.classList.add(`divFlexTituloPainelNormal`)
    divFlexTituloN.id = `idDivFlexTitulo`


    let tituloPacienteNormal = document.createElement(`h3`)
    tituloPacienteNormal.innerText = `NORMAL`
    tituloPacienteNormal.classList.add(`tituloPainelNormal`)


    let listaLIN = document.createElement(`li`)
    listaLIN.innerText = elementN.toLocaleUpperCase()
    listaLIN.classList.add(`listaNormal`)


    let agruparBtnNormal = document.createElement(`div`)
    agruparBtnNormal.id = `idAgruparBtnNormal`
    agruparBtnNormal.classList.add(`agrupBtnConsultarPaciente`)
    let addBtnConsultarNormal = document.createElement(`button`)
    addBtnConsultarNormal.id = `idBtnConsultarPacienteNormal`
    addBtnConsultarNormal.innerText = `Consultar`
    addBtnConsultarNormal.classList.add(`btn`)
    addBtnConsultarNormal.addEventListener(`click`, () => {
        let guicheMedico = prompt(`Digite seu Guiche:`)
        let confirm = window.confirm(`Deseja consultar o paciente Normal?`)

        if (confirm && guicheMedico) {
            const pacienteNormalConsultado = arraynormal.shift();
            if (pacienteNormalConsultado) {
                elementN = ""; // Limpa o elementoN
                for (let controle = 0; controle < arraynormal.length; controle++) {
                    elementN += `
                        ${controle + 1}º ${arraynormal[controle].nome} 
                        `;
                }

                listaLIN.innerText = elementN.toUpperCase(); // Correção: toUpperCase() é uma função
                alert(`
                    CONSULTA MÉDICA: ${pacienteNormalConsultado.consulta}
                    PACIENTE: ${pacienteNormalConsultado.nome}
                    GUICHE: ${guicheMedico}
                    `);
            }

        } else {
            alert("Não há pacientes normais para consultar.");
        }
    }
    );

    let addBtnAlterarStatusNormal = document.createElement(`button`)
    addBtnAlterarStatusNormal.id = `idBtnAlterarStatus`
    addBtnAlterarStatusNormal.innerText = `Alterar Status`
    addBtnAlterarStatusNormal.setAttribute(`data-bs-toggle`, `modal`)
    addBtnAlterarStatusNormal.setAttribute(`data-bs-target`, `#exampleModal`)
    addBtnAlterarStatusNormal.classList.add(`btn`)


    // NÓ DO PAINEL PREFERENCIAL E SEUS 
    agruparBtnNormal.append(addBtnConsultarNormal,addBtnAlterarStatusNormal)
    divFlexTituloN.appendChild(tituloPacienteNormal)
    criacaoDoPainelN.append(divFlexTituloN, listaLIN, agruparBtnNormal)


    // NÓ PAI DOS PAINES
    painel.append(criacaoDoPainelP, criacaoDoPainelN)
    return painel


}




let divAtivadaEditarStatus = false

function createElementMudarStatus() {
  
    

    if (!divAtivadaEditarStatus) {
        removeElementAreMedica()
        removeElementsHome()
        removeElementCriarPaciente()
        removeElementEditarPaciente()
        removeElementVericarPaciente()
        removeElements()
        
        const verificarStatus = document.getElementById(`verificarStatus`)
        verificarStatus.classList.add(`verificarAtendimento`)

        const divPaiMudarStatus = document.createElement(`div`)
        divPaiMudarStatus.id = `idDivPaiMudarStatus`
        divPaiMudarStatus.classList.add(`elementBodyEditarPaciente`)

        const form = document.createElement(`div`)
        form.id = `idElementFormMudarPaciente`
        form.classList.add(`styleFormEditarNome`)


        let inputNomePaciente = createInput(`idNomePacienteAlterarStatus`, `text`, `iname`, `Nome paciente `)

        let createTituloMudaPaciente = document.createElement(`h2`)
        createTituloMudaPaciente.innerText = `Mudar Status`
        createTituloMudaPaciente.classList.add(`h2CadastrarPaciente`)

        let addBtnConfimar = document.createElement(`button`)
        addBtnConfimar.id = `idBtnConfirmarAlterarStatus`
        addBtnConfimar.innerText = `Confirmar`
        addBtnConfimar.classList.add(`btn`)
       
      
    
        form.append(createTituloMudaPaciente, inputNomePaciente, addBtnConfimar)
        divPaiMudarStatus.append(form)
        verificarStatus.append(divPaiMudarStatus)
    }
    divAtivadaEditarStatus = true
    divAtivadaEditarPaciente = false
    divAtivadaRetornoPainel = false
    divAtivadaNovoPaciente = false
    divAtivadaVerificarPaciente = false
    divAtivadaCentralAtendimentos = false
    divAtivadaAreaMedica = false
}

function btnConfirmarMudarStatus(nomeid, arrayPrincipal, arrayReverso) {
    let addBtnModal = document.getElementById(nomeid);
        addBtnModal.addEventListener(`click`, () => {

            createElementMudarStatus()
          
            const btnConfirmar = document.getElementById(`idBtnConfirmarAlterarStatus`);
            btnConfirmar.addEventListener(`click`, () => {
                let inputNome = document.getElementById(`idNomePacienteAlterarStatus`).value.trim().toLowerCase();
                let verificaElementoDentroArrayExiste = arrayPrincipal.some((elemento) => elemento.nome.toLowerCase() === inputNome);
                let verificaPosicaoElementoDentroArray = arrayPrincipal.findIndex((elemento) => elemento.nome.toLowerCase() === inputNome);

                if (verificaElementoDentroArrayExiste) {
                    arrayPrincipal.splice(verificaPosicaoElementoDentroArray, 1);
                    arrayReverso.push({ nome: inputNome, status: nomeid });
                    alert(`Status Alterado com sucesso`);
                } else {
                    alert(`Paciente não existe`);
                }
            });
            
        });
    }


btnConfirmarMudarStatus(`btnPreferencialModalEditarStatus`, arrayPrioridade, arraynormal);
btnConfirmarMudarStatus(`btnNormalModalEditarStatus`, arraynormal, arrayPrioridade);


function removeElementEditarStatus() {
    const element = document.getElementById(`verificarStatus`);

    if (element) { // Verifica se o elemento foi encontrado
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    } else {
        console.log("Elemento com id 'editarPaciente' não encontrado.");
    }
}