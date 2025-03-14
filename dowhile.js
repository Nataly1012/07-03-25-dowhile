function contador() { // declara a função "contador", sem parâmetros.
    const tempo = new Date(); // declaração de variável "tempo" para leitura, a qual receberá o nome date
    let hora = tempo.getHours(); // declaração da variável temporária "hora"
    let minuto= tempo.getMinutes();// declaração da variável temporária "minutos"
    let segundo= tempo.getSeconds();//declaração da variável temporária "segundos"
    if (document.getElementById("cbxMarcarTempo").checked == true){ // validador que demonstra que se o "cbx" marcar tempo siguinifica que está verficado executando o que estiver dentro desse bloco de códigos
    document.getElementById("div_hora").innerText = hora; // esse linha irá pegar a div_hora adicionar o texto que é "hora"
    document.getElementById("div_minuto").innerText = minuto; // A divi_minutos irá inserir o texto "minutos" 
    document.getElementById("div_segundo").innerText = segundo; // div_minutos irá inserir o texto "segundos"
} // encerra o bloco de códigos do if verdadeiro
setInterval(contador, 1000);//executa infinitamente até ser cancelada
if (document.getElementById("cbxMarcarTempo").checked == false) { // vai validar se o "cbx" marcar tempo não estiver verificado
    document.getElementById("div_hora").innerText = ""; // ele irá zerar a div_hora
    document.getElementById("div_minuto").innerText = "";  // ele irá zerar a div_minuto
    document.getElementById("div_segundo").innerText = "";  // ele irá zerar a div_segundo
    clearInterval(); // tudo que envolverá o set.Interval será zerado "limpar"
} // irá ncerrar o bloco de códigos do if "false"
}// encerrará o bloco de códigos da função contador 

document.getElementById("cbxMarcarTempo").addEventListener('click', () => { // A linha adicina na lista de eventos do java o evento click
    contador();
}); // encerra o bloco de códigos do parâmetro do metodo e da função inominada