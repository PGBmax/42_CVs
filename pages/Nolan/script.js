let menu_status = 0;
const menu_list = document.querySelector('#nav_menu_list');
const button_menu = document.querySelector('#button_menu');

function open_menu(n) {
    if (n != -1) {
        if (n == 0) {
            menu_list.style.transform = "translateY(0)";
            button_menu.style.background = "#eadff4";
            menu_status = 1;
        }
        else if (n == 1) {
            menu_list.style.transform = "translateY(calc(-100% - 17px - 70px))";
            button_menu.style.background = "";
            menu_status = 0;
        }
        return;
    }
    if (menu_status == 0) {
        menu_list.style.transform = "translateY(0)";
        button_menu.style.background = "#eadff4";
        menu_status = 1;
    }
    else if (menu_status == 1) {
        menu_list.style.transform = "translateY(calc(-100% - 17px - 70px))";
        button_menu.style.background = "";
        menu_status = 0;
    }
}

function egg() {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ&pp'
}

hash = window.location.hash.substring(1);
if (hash == 'guns')
    window.location.href = 'https://guns.noappert.fr';
if (hash == 'egg') {
    body = document.querySelector('body');
    body.style.height = '100vh';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.innerHTML = `
        <a class="button btn_2" onclick="egg()">???</a>
    `;
}
let page = hash ? parseInt(hash) : 1;
if (page < 0 || page > 3)
    page = 1;
const fullpage = document.querySelector('#fullpage');
const container = document.querySelector('#container');
const title_btn = document.querySelectorAll('#title');
const navbar = document.querySelectorAll('#navbar');
let act_page = document.querySelector('#part' + page);
let next_page = act_page;
let colors = ["", "#6110ad", "#bf1363", "#15833a"];

if (page == 1)
    container.classList.add('pattern');
else
    container.classList.remove('pattern');
fullpage.style.background = colors[page];
title_btn[0].classList.add('btn_' + page)
title_btn[1].classList.add('btn_' + page)
act_page.classList.add('show');
act_page.style.opacity = "100%";
act_page.style.transform = "scale(1)";

function change_page(n) {
    if (n == page) {
        setTimeout(() => {
            open_menu(1);
        }, 250);
        return;
    }
	if (n < 1 || n > 3)
		return;
    if (n == 1)
        container.classList.add('pattern');
    else
        container.classList.remove('pattern');
    fullpage.style.background = colors[n];
    title_btn[0].classList.remove('btn_' + page);
    title_btn[0].classList.add('btn_' + n);
    title_btn[1].classList.remove('btn_' + page);
    title_btn[1].classList.add('btn_' + n);
    next_page = document.querySelector('#part' + n);
    act_page.style.transform = "";
    act_page.style.opacity = "";
    setTimeout(() => {
        act_page.classList.remove('show');
        next_page.classList.add('show');
        page = n;
        act_page = next_page;
        setTimeout(() => {
            act_page.style.opacity = "100%";
            act_page.style.transform = "scale(1)";
            open_menu(1);
        }, 125);
    }, 125);
}

window.addEventListener('hashchange', () => {
    setTimeout (()=> {
        if (page != window.location.hash.substring(1)) {
			if (window.location.hash.substring(1) == "egg" || window.location.hash.substring(1) == "guns")
            	window.location.reload();
			else
				change_page(window.location.hash.substring(1))
        }
    }, 200);
    
});