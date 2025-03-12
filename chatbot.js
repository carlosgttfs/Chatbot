// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(sim|Sim|sim.|SIM|Sim.|SIM.)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        // await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' \n\n Por favor, *digite uma das opções abaixo* para melhor te atendermos:\n\n1 - Agendar visita 📆 \n2 - Cadastro e Solicitação de orçamento 💲\n3 - Atendimento de Emergência 🚨\n4 - Pesquisa avaliativa ✅'); //Primeira mensagem de texto
        // await delay(2000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        await delay(4000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.from.endsWith('@c.us') && msg.body === '1'  | msg.body === '1 - Agendar visita' | msg.body === 'Agendar visita' | msg.body === 'agendar visita' | msg.body === 'agendar visita.' | msg.body === 'Agendar visita.' | msg.body === 'visita' | msg.body === 'agendar' | msg.body === 'Agendar' ) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Vai ser um prazer te atender!.\n\n Por favor, *escolha uma data e horário na nossa agenda clicando nesse link abaixo:* \n\n https://calendar.app.google/JV3hGksH3AGKJ8nq9');

        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000);
        await client.sendMessage(msg.from, 'Após isso seu horário estará reservado e poderá vir! \n\n Obrigado!');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    }

    if (msg.body !== null && msg.from.endsWith('@c.us') && msg.body === '2'  | msg.body === '2 - Cadastro e solicitação de orçamento' | msg.body === 'Cadastro' | msg.body === 'orçamento' | msg.body === 'Orçamento.' | msg.body === 'Orçamento' | msg.body === 'Cadastro e solicitação de orçamento' | msg.body === 'solicitar orçamento' | msg.body === 'SOLICITAR ORÇAMENTO') {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Será um prazer poder te atender! Vou pedir para preencher seus dados no nosso formulário, bem rápido. Precisamos apenas de seu telefone, modelo do carro e placa. \n\n Lá nossa equipe verificará seus dados e entrará em contato o mais rápido possível.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para sua solicitação: https://forms.gle/Dh9iPYYtRfCJqVEq9 \n\n Nossa equipe é notificada imediatamente e entraremos em contato. \n\n *Obrigado!*');
    }

    if (msg.body !== null && msg.from.endsWith('@c.us') && msg.body === '3' | msg.body === '3 - Atendimento de emergência' | msg.body === '3 - atendimento de emergencia' | msg.body === 'Atendimento de emergência.' | msg.body === 'emergência' | msg.body === 'atendimento de emergência.' | msg.body === 'Atendimento de emergência' | msg.body === 'emergência' | msg.body === 'emergencia') {
        const chat = await msg.getChat();


        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Se está em caso grave e precisa ser atendido(a) imediatamento, ligue para nós para o telefone (21) 98317-3376');
        
        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, 'Caso opte por realizar uma visita sem custo, agende aqui: https://calendar.app.google/JV3hGksH3AGKJ8nq9');

    }

    if (msg.body !== null && msg.from.endsWith('@c.us') && msg.body === '4' | msg.body === '4 - Pesquisa avaliativa' | msg.body === '4 - Pesquisa avaliativa.' | msg.body === 'Pesquisa' | msg.body === '4 - Pesquisa' | msg.body === '4 - pesquisa' | msg.body === '4 - pesquisa avaliativa' | msg.body === 'avaliação') {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Agradecemos muito seu interesse em nos ajudar! \n\n Por favor, nos avalie no Google pelo link abaixo \nhttps://g.page/r/Cfn2AnRYjPJFEAE/review \n\nObrigado!');


        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver Atendimento de emergência ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


    }








});