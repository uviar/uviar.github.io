Sahare={go:function(t,e){var n=Sahare,e=$.extend({type:"vk",url:location.href,count_url:location.href,title:document.title,image:"",text:""},$(t).data(),e);return null===n.popup(link=n[e.type](e))&&($(t).is("a")?($(t).prop("href",link),!0):(location.href=link,!1))},
vk:function(t){t=$.extend({url:location.href,title:document.title},t);return"https://vk.com/share.php?url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)},
ok:function(t){t=$.extend({url:location.href,title:document.title},t);return"https://connect.ok.ru/offer?url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)},
fb:function(t){t=$.extend({url:location.href,title:document.title},t);
return"https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)},
tw:function(t){t=$.extend({url:location.href,count_url:location.href,title:document.title},t);return"https://twitter.com/intent/tweet?text="+encodeURIComponent(t.title)+"&url="+encodeURIComponent(t.url)+"&counturl="+encodeURIComponent(t.count_url)},
mr:function(t){t=$.extend({url:location.href,title:document.title},t);return"https://connect.mail.ru/share?url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)},
tg:function(t){t=$.extend({url:location.href,title:document.title},t);return"https://t.me/share/url?url="+encodeURIComponent(t.url)+"&text="+encodeURIComponent(t.title)},
wa:function(t){t=$.extend({url:location.href,title:document.title},t);return"https://api.whatsapp.com/send?text="+encodeURIComponent(t.title)+" "+encodeURIComponent(t.url)},
popup:function(t){return window.open(t,"","toolbar=0,status=0,scrollbars=1,width=620,height=430")}};
