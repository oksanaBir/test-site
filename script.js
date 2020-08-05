const getMenu = () => document.querySelector('.menu');
const getMenuItems = () => document.querySelector('.menu .content');
const getOpenMenuButton = () => document.querySelector('.menu .hide');
const getHomeBlock = () => document.querySelector('.home');

document.addEventListener('DOMContentLoaded', () => {
	let isOpenMenu = false;

	let toggleMenu = () => {
		if(isOpenMenu == false) {
			isOpenMenu = true;
			getMenuItems().style.display = 'flex';
		} else {
			isOpenMenu = false;
			getMenuItems().style.display = 'none';
		}
	}

	let changeMenuPosition = () => {
		if(document.documentElement.scrollTop >= getHomeBlock().offsetHeight) {
			getMenu().style.position = 'fixed';
			getMenu().style.fontFamily = 'Nexa Light';
			getMenu().style.background = "white";
		} else {
			getMenu().style.position = 'absolute';
			getMenu().style.fontFamily = 'PT Sans';
			getMenu().style.background = 'none';
		}
	}

	getOpenMenuButton().onclick = toggleMenu;
	window.addEventListener("scroll", changeMenuPosition);
});
