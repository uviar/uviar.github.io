Sahare = {
/**
* Показать пользователю диалог шаринга в сооветствии с опциями
* Метод для использования в inline-js в ссылках
* При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
*
* @example <a href="" onclick="return share.go(this)">like+</a>
*
* @param Object _element - элемент DOM, для которого
* @param Object _options - опции, все необязательны
*/
go: function(_element, _options) {
var
self = Sahare,
options = $.extend(
{
type:       'vk',    // тип соцсети
url:        location.href,  // какую ссылку шарим
count_url:  location.href,  // для какой ссылки крутим счётчик
title:      document.title, // заголовок шаринга
image:        '',             // картинка шаринга
text:       '',             // текст шаринга
},
$(_element).data(), // Если параметры заданы в data, то читаем их
_options            // Параметры из вызова метода имеют наивысший приоритет
);

if (self.popup(link = self[options.type](options)) === null) {
// Если не удалось открыть попап
if ( $(_element).is('a') ) {
// Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
$(_element).prop('href', link);
return true;
}
else {
// Если это не <a>, то пытаемся перейти по адресу
location.href = link;
return false;
}
}
else {
// Попап успешно открыт, просим браузер не продолжать обработку
return false;
}
},

// ВКонтакте
vk: function(_options) {
var options = $.extend({
url:    location.href,
title:  document.title,
}, _options);

return 'https://vk.com/share.php'
+ '?url='         + encodeURIComponent(options.url)
+ '&title='       + encodeURIComponent(options.title);
},

// Одноклассники
ok: function(_options) {
var options = $.extend({
url:    location.href,
title:  document.title,
}, _options);

return 'https://connect.ok.ru/offer'
+ '?url='		+ encodeURIComponent(options.url)
+ '&title='		+ encodeURIComponent(options.title);
},

// Фейсбук
fb: function(_options) {
var options = $.extend({
url:    location.href,
title:  document.title,
}, _options);

return 'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup'
+ '&href='		+ encodeURIComponent(options.url)
+ '&title='		+ encodeURIComponent(options.title);
},

// Твиттер
tw: function(_options) {
var options = $.extend({
url:        location.href,
count_url:  location.href,
title:      document.title,
}, _options);

return 'https://twitter.com/intent/tweet?'
+ 'text='      + encodeURIComponent(options.title)
+ '&url='      + encodeURIComponent(options.url)
+ '&counturl=' + encodeURIComponent(options.count_url);
},

// Мэйл.Ру
mr: function(_options) {
var options = $.extend({
url:    location.href,
title:  document.title,
}, _options);

return 'https://connect.mail.ru/share'
+ '?url='          + encodeURIComponent(options.url)
+ '&title='       + encodeURIComponent(options.title);
},

// Телеграм
tg: function(_options) {
var options = $.extend({
url:    location.href,
title:  document.title,
}, _options);

return 'https://t.me/share/url'
+ '?url='    + encodeURIComponent(options.url)
+ '&text='   + encodeURIComponent(options.title);
},

// Вотсап
wa: function(_options) {
var options = $.extend({
url:    location.href,
title:  document.title,
}, _options);

return 'https://api.whatsapp.com/send'
+ '?text='    + encodeURIComponent(options.title)
+ ' '         + encodeURIComponent(options.url);
},

// Открыть окно шаринга
popup: function(url) {
return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
}
}
