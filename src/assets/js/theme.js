//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//   │ ├─┤├┤ │││├┤
//   ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let rgb = ''
const image = document.createElement("img")
image.src = CONFIGSaved.dataImage === 'background.jpg' ||
    CONFIGSaved.dataImage === './background.jpg' ?
    './assets/css/background.jpg' : CONFIGSaved.dataImage
let darkTheme = localStorage.getItem('darkTheme')
let themeEnable = 'Light'
const themeToggle = document.querySelector('#themeButton')
const bodyBackground = document.getElementById('#body')

const enableDark = () => {
	document.body.classList.add('darktheme')
	localStorage.setItem('darkTheme', 'enabled')
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`
	try {
		lucide.createIcons()
	} catch (err) {
		alert('Um erro inesperado ocorreu enquanto os ícones eram exibidos, talvez o servidor esteja com problemas')
	}
	themeEnable = 'Dark'
	generateAccent()
	document.querySelector('html').style.colorScheme = "dark"
}

const disableDark = () => {
	document.body.classList.remove('darktheme')
	localStorage.setItem('darkTheme', 'disable')
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`
	try {
		lucide.createIcons()
	} catch (err) {
		alert('Um erro inesperado ocorreu enquanto os ícones eram exibidos, talvez o servidor esteja com problemas')
	}
	themeEnable = 'Light'
	generateAccent()
	document.querySelector('html').style.colorScheme = "light"
}

if (darkTheme === 'enabled') {
	document.body.classList.add('notransition')
	enableDark()
	document.body.classList.remove('notransition')
} else {
	disableDark()
}

themeToggle.addEventListener('click', () => {
	darkTheme = localStorage.getItem('darkTheme')
	if (darkTheme !== 'enabled') {
		enableDark()
	} else {
		disableDark()
	}
})

if (CONFIG.imageBackground) {
	document.body.classList.add('withImageBackground')
	document.body.style.setProperty('--imgbg', `url('${CONFIGSaved.dataImage}')`)
}

if (CONFIG.changeThemeByOS && CONFIG.autoChangeTheme) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		enableDark()
	} else {
		disableDark()
	}
}

if (CONFIG.changeThemeByHour && CONFIG.autoChangeTheme && !CONFIG.changeThemeByOS) {
	const date = new Date()
	const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString()
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()
	const currentTime = hours + ':' + minutes
	if (currentTime >= CONFIG.hourDarkThemeActive) {
		enableDark()
	} else if (currentTime >= CONFIG.hourDarkThemeInactive) {
		disableDark()
	}
}

function alterColor(r, g, b) {
    let fator, pastelFator;

    if (themeEnable === 'Dark') {
        fator = 0.8;
        pastelFator = 0.9;
    } else {
        fator = 1.3;
        pastelFator = 1.2;
    }

    const novoR = Math.round(Math.min(r * fator + 20, 255) * pastelFator);
    const novoG = Math.round(Math.min(g * fator + 20, 255) * pastelFator);
    const novoB = Math.round(Math.min(b * fator + 20, 255) * pastelFator);

    document.body.style.setProperty('--accent', `rgb(${novoR}, ${novoG}, ${novoB})`)
}

function waitForImage(imgElem) {
	return new Promise((res, rej) => {
		if (imgElem.complete) {
			return res()
		}
		imgElem.onload = () => res()
		imgElem.onerror = () => rej(imgElem)
	})
}

async function averageColor(imgElem) {
	await waitForImage(imgElem)
	const canvas = new OffscreenCanvas(1, 1)

	const ctx = canvas.getContext("2d")
	ctx.drawImage(imgElem, 0, 0, 1, 1)
	const imgData = ctx.getImageData(0, 0, 1, 1)
	length = imgData.data.length
	let count = 0

	for (let i = 0; i < length; i += 4) {
		rgb.r += imgData.data[i]
		rgb.g += imgData.data[i + 1]
		rgb.b += imgData.data[i + 2]
		count++
	}

	return {
		r: Math.floor(imgData.data[0] / count),
		g: Math.floor(imgData.data[1] / count),
		b: Math.floor(imgData.data[2] / count)
	};
}

function generateAccent() {
	averageColor(image).then(rgb => {
        alterColor(rgb.r, rgb.g, rgb.b)
	})
}