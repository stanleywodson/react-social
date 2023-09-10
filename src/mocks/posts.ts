export const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/stanleywodson.png',
			name: 'Stanley Wodson',
			role: 'Developer'
		},
		content: [
			{type: 'paragraph', content: 'Fala galeraa '},
			{type: 'paragraph', content: 'Acabei um projeto no meu porfolio.'},
			{type: 'link', content: 'stanley.dev/developer'},
		],
		publishedAt: new Date('2023-09-09 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/karla.png',
			name: 'Amanda Souza',
			role: 'Designer'
		},
		content: [
			{type: 'paragraph', content: 'Olá rede recebi uma promoção estou muito agradecido!!!'},
			{type: 'paragraph', content: 'Thank´s God!'},
			{type: 'link', content: 'contrato.com.br'},
		],
		publishedAt: new Date('2023-09-08 20:00:00'),
	},
]