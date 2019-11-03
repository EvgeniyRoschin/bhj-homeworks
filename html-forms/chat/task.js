let chatOpenButton = document.getElementsByClassName("chat-widget");

function openChat() {
    chatOpenButton[0].classList.add('chat-widget_active');
}

chatOpenButton[0].addEventListener('click', openChat);

let chatWidgetInput = document.getElementById('chat-widget__input');

let botMessages = [
    'Это опять ты?',
    'Досвидания!',
    'Вообще нет настроения с тобой общаться',
    'Я в отпуске, вернусь через год',
    'На глупые вопросы не отвечаем!',
    'Мы ничего не продаем!',
    'А ты как думаешь?',
    'И что?',
    'Спроси что-нибудь другое',
    'Только не это!',
]

function sendMessage() {
    let getData = new Date();
    getData = getData.toString().slice(16, 21);

    let randomMessageIndex = Math.floor(Math.random() * 10);
    // console.log(randomMessageIndex);
    document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message message_client">
      <div class="message__time">${getData}</div>
      <div class="message__text">
        ${chatWidgetInput.value}
      </div>
    </div>
    `;

    chatWidgetInput.value = '';

    function botReply() {
        document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message">
      <div class="message__time">${getData}</div>
      <div class="message__text">
        ${botMessages[randomMessageIndex]}
      </div>
    </div>
    `;
    }
    
    setTimeout(botReply, 2000);
}

chatWidgetInput.addEventListener('change', sendMessage);