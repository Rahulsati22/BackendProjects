const telegramBot = require('node-telegram-bot-api');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08c7795a32mshe3a9c4179b4f08dp1fcf29jsnd641d1111616',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const Token = '6179727097:AAEuO2sjJRanQs6-00kbABe9OHP72IU4oEg';

const bot = new telegramBot(Token,{polling : true});

bot.on('message', function(message){
   const id = message.from.id;
   const val = message.text;
//    bot.sendMessage(id, 'hello i am kalpana and i will tell you weather of any location you want.Enter the name of the city');
   fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${val}`,options).then(response => response.json()).then(response=>{
    console.log(response);
   })
})

//enter the city name