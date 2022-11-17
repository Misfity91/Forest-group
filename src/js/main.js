const burger = document.querySelector('.hamburger')
const nav = document.querySelector('.navbar__list')
const allNavItems = document.querySelectorAll('.navbar__list-item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	burger.classList.toggle('is-active')
	nav.classList.toggle('navbar__list--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('navbar__list--active')
			burger.classList.remove('is-active')
		})
	})
	navItemAnimation()
}

burger.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

const navItemAnimation = () => {
	let delay = 0

	allNavItems.forEach(item => {
		item.classList.toggle("nav-items-animation")
		item.style.animationDelay = `.${delay}s`
		delay++
	})
}