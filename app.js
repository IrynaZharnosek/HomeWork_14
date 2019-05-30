const format = require('node.date-time');

var fs = require('fs');
var message = 'Фиксирую данные';

//функция получения текущей даты и времени в нужном формате подключенного модуля node.date-time
function logTime(){
	return new Date().format('Y-M-d H:M:S') + '-';
}
//выполнение записи в файл с логами каждые 5 сек
setInterval(function(){
	fs.appendFile('file.log', logTime()+message+'\n');
}, 5000);
