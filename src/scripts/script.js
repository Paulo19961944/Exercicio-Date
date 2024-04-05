let dateElement = document.getElementById('date') // Captura o elemento date do HTML

// Função para capturar a data atual e exibir no input
function getClock(){
    let date = new Date() // Chama o Construtor do Calendário em JavaScript
    let dayWeek = date.getDay() // Captura o Dia da Semana
    let dayNow = date.getDate() // Captura o Dia de Hoje
    let monthNow = date.getMonth() + 1 // Captura o mês e corrige para o formato convencional
    let yearNow = date.getFullYear() // Captura o Ano
    let hourNow = date.getHours() // Captura as Horas
    let minutesNow = date.getMinutes() // Captura os Minutos

    hourNow < 10? // Verifica se a hora é maior ou igual a 10
    hourNow = `0${hourNow}`: // Caso for verdadeiro,  adiciona um zero à esquerda
    hourNow = `${hourNow}` // Caso for falso, retorna apenas a hora

    minutesNow < 10? // Verifica se os minutos é maior ou igual a 10
    minutesNow = `0${minutesNow}`: // Caso for verdadeiro,  adiciona um zero à esquerda
    minutesNow = `${minutesNow}` // Caso for falso, retorna apenas os minutos

    // Captura o dia da semana e coloca no formato convencional
    switch(dayWeek) {
        case 0:
            dayWeek = "Domingo"
            break
        case 1:
            dayWeek = "Segunda-Feira"
            break
        case 2:
            dayWeek = "Terça-Feira"
            break
        case 3:
            dayWeek = "Quarta-Feira"
            break
        case 4:
            dayWeek = "Quinta-Feira"
            break
        case 5:
            dayWeek = "Sexta-Feira"
            break
        case 6:
            dayWeek = "Sábado"
            break
    }

    // Captura o mês e coloca no formato convencional
    switch(monthNow){
        case 1:
            monthNow = 'Janeiro'
            break
        case 2:
            monthNow = 'Fevereiro'
            break
        case 3:
            monthNow = 'Março'
            break
        case 4:
            monthNow = 'Abril'
            break
        case 5:
            monthNow = 'Maio'
            break
        case 6:
            monthNow = 'Junho'
            break
        case 7:
            monthNow = 'Julho'
            break
        case 8:
            monthNow = 'Agosto'
            break
        case 9:
            monthNow = 'Setembro'
            break
        case 10:
            monthNow = 'Outubro'
            break
        case 11:
            monthNow = 'Novembro'
            break
        case 12:
            monthNow = 'Dezembro'
            break
    }
    dateElement.textContent = `${dayWeek}, ${dayNow} de ${monthNow} de ${yearNow} - ${hourNow}:${minutesNow}` // Exibe a data e a hora
}

getClock() // Invoca a Função getClock
setInterval(getClock, 1000) // Atualiza a cada 1 segundo
