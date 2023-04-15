// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

let CONFIG = {
	name: 'User',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,
	greetingMorning: 'Bom dia,',
	greetingAfternoon: 'Boa tarde,',
	greetingEvening: 'Boa noite,',
	greetingNight: 'Vá dormir,',
	bentoLayout: 'buttons',
	weatherKey: '9b4f4883c8fbece2144b4b95b4fbb949',
	weatherIcons: 'OneDark',
	weatherUnit: 'C',
	language: 'pt_br',
	trackLocation: true,
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',
	autoChangeTheme: true,
	changeThemeByOS: true,
	changeThemeByHour: false,
	hourDarkThemeActive: '18:00',
	hourDarkThemeInactive: '05:40',
	firstButtonsContainer: [
		{
			id: '1',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/',
		},
		{
			id: '2',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/',
		},
		{
			id: '3',
			name: 'WhatsApp',
			icon: 'phone',
			link: 'https://www.whatsapp.com',
		},
		{
			id: '4',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/'
		},
		{
			id: '5',
			name: 'Spotify',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],
	secondButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '2',
			name: 'Agenda',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],
	firstListsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspiracional',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Clássica',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Antigas',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'TikTok',
					link: 'https://www.tiktok.com/',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'NetFlix',
					link: 'https://www.netflix.com',
				},
			],
		},
	],
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
}

let PRECONFIG = {
	name: 'User',
	imageBackground: true,
	dataImage: 'background.jpg',
	openInNewTab: false,
	bentoLayout: 'bento',
	weatherIcons: 'OneDark',
	changeThemeByHour: false,
	hourDarkThemeActive: '06:00',
	hourDarkThemeInactive: '18:00',
	changeThemeByOS: true,
	autoChangeTheme: true
}

let buttons = {
	firstButtonsContainer: [...CONFIG.firstButtonsContainer],
	secondButtonsContainer: [...CONFIG.secondButtonsContainer]
}

JSON.parse(window.localStorage.getItem('CONFIG')) == null ?
	window.localStorage.setItem('CONFIG', JSON.stringify(PRECONFIG)) : PRECONFIG = JSON.parse(window.localStorage.getItem('CONFIG'))
let objectSaved = JSON.parse(window.localStorage.getItem('CONFIG'))

let CONFIGSaved = { ...objectSaved }
let base64String = objectSaved.dataImage || "assets/background.jpg"

for (let sett in CONFIGSaved) {
	CONFIG[`${sett}`] = CONFIGSaved[sett]
}