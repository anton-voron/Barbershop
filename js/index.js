var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";

try { 
	storage = localStorage.getItem("login");
} catch (err) { 
	isStorageSupport = false;
};

link.addEventListener("click", function (evt) {
	evt.preventDefault(); /*Отменяем действие ссылки по умолчанию (переход на новую страницу) */
	popup.classList.add("modal-show"); /*В CSS файле добавили новый класс с display block и используем его свойство чтобы показать модал*/
	if(storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus(); /*Ставим фокус в  эелемент login*/
	};
	form.addEventListener("submit", function (evt) {
		if(!login.value || !password.value) {
			evt.preventDefault(); /*Отключим форму по умолчанию*/
			popup.classList.add("modal-error");
		} else {
			if(isStorageSupport) {
				localStorage.setItem("login", login.value)
				}	
			}
		});
	});
close.addEventListener("click", function(evt){
		evt.preventDefault(); /* У кнопки нужно отменить действие по умолчанию для того, чтобы в случае изменения  кнопки на ссылку мы заранее избежали перехода*/
		popup.classList.remove("modal-show"); /*благодаря свойству remove удаляем класс, который создали в CSS файле*/
		popup.classList.remove("modal-error"); /*Не забываем удалять трясучку при закрытии модалки*/
	});
window.addEventListener("keydown", function (evt) {
	
		if(popup.classList.contains("modal-show")) {
			if(evt.keyCode == 27) {
			evt.preventDefault(); /*Отменяем встроенное браузерное действие при нажатии ecs - выход из full srcreen режима*/
			popup.classList.remove("modal-show");
		}
	}
});

var linkMap = document.querySelector(".contacts-button-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close")


linkMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");

	closeMap.addEventListener("click", function(evt){
	evt.preventDefault(); /* У кнопки нужно отменить действие по умолчанию для того, чтобы в случае изменения  кнопки на ссылку мы заранее избежали перехода*/
	popupMap.classList.remove("modal-show"); /*благодаря свойству remove удаляем класс, который создали в CSS файле*/		popup.classList.remove("modal-error"); /*Не забываем удалять трясучку при закрытии модалки*/
	});
});
window.addEventListener("keydown", function(evt){
	if(popupMap.classList.contains("modal-show")){
		if(evt.keyCode==27){
			evt.preventDefault();
			popupMap.classList.remove("modal-show");
		}
	};
});
