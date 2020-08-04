const getMenu = () => document.querySelector('.menu');
const getMenuItems = () => [...document.querySelectorAll('.menu li')];
const getOpenMenuButton = () => document.querySelector('.menu .hide');
const getBlock = () => document.querySelector('.home');

document.addEventListener('DOMContentLoaded', () => {
	let isOpenMenu = true;

	let toggleMenu = () => {
		if(isOpenMenu) {
			isOpenMenu = false;
				getMenuItems().map((item) => {
					item.style.display = 'flex';
				});
		} else {
			isOpenMenu = true;
			getMenuItems().map((item) => {
				item.style.display = 'none';
				getMenu().style.flexDirection = 'row';
			});
		}
	}

	let changeMenuPosition = () => {
		if(document.documentElement.scrollTop >= getBlock().offsetHeight) {
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
