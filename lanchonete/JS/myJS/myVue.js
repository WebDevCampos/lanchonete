var cardapio = new Vue({
	el: '#cardapio',

	data: {
		lanches: [
			{
				idLanche: '0001',
				nomeDoLanche: 'Hamburguer',
				imagensDosLanches:
					'https://images.unsplash.com/photo-1586816001966-79b736744398?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODA3MTYxNg&ixlib=rb-1.2.1&q=85',
				qtd: 0,
				detalhes: 'Melhor pão, carne ótima'
			},
			{
				idLanche: '0002',
				nomeDoLanche: 'Milk Shake',
				imagensDosLanches: './imgs/milkShake.jpg',
				qtd: 0,
				detalhes: 'Melhor leite, cobertura ótima'
			},
			{
				idLanche: '0003',
				nomeDoLanche: 'Pizza',
				imagensDosLanches:
					'https://images.unsplash.com/photo-1617343283366-c89210ec3e4f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODA3MTY3NQ&ixlib=rb-1.2.1&q=85',
				qtd: 0,
				detalhes: 'Melhor massa, molho ótimo'
			},
			{
				idLanche: '0004',
				nomeDoLanche: 'Salgadinhos',
				imagensDosLanches: './imgs/salgadinhos.jpg',
				qtd: 0,
				detalhes: 'Melhor de todos, sabor ótimo'
			}
		]
	},

	methods: {
		soma(index) {
			this.lanches[index].qtd += 1
			if (this.lanches[index].qtd > 10) {
				this.lanches[index].qtd = 10
				alert('Máximo de dez unidades por pedido')
			}
		},
		diminui(index) {
			this.lanches[index].qtd -= 1
			if (this.lanches[index].qtd < 0) {
				this.lanches[index].qtd = 0
			}
		}
	}
})

var app = new Vue({
	el: '#app',
	data: {
		places: [
			{
				id: 000,
				img: './imgs/logo.jpg',
				name: 'D+ Delivery',
				address: 'Endereço 1',
				star: './imgs/star.png',
				rate: '5',
				clock: './imgs/clock.png',
				timeWait: '30 - 40 min',
				opened: true
			},
			{
				id: 001,
				img: './imgs/logo.jpg',
				name: 'D+ Delivery',
				address: 'Endereço 2',
				star: './imgs/star.png',
				rate: '5',
				clock: './imgs/clock.png',
				timeWait: '40 - 60 min',
				opened: false
			},
			{
				id: 002,
				img: './imgs/logo.jpg',
				name: 'D+ Delivery',
				address: 'Endereço 3',
				star: './imgs/star.png',
				rate: '5',
				clock: './imgs/clock.png',
				timeWait: '40 - 60 min',
				opened: false
			},
			{
				id: 004,
				img: './imgs/logo.jpg',
				name: 'D+ Delivery',
				address: 'Endereço 4',
				star: './imgs/star.png',
				rate: '5',
				clock: './imgs/clock.png',
				timeWait: '40 - 60 min',
				opened: false
			},
			{
				id: 005,
				img: './imgs/logo.jpg',
				name: 'D+ Delivery',
				address: 'Endereço 3',
				star: './imgs/star.png',
				rate: '5',
				clock: './imgs/clock.png',
				timeWait: '40 - 60 min',
				opened: false
			},
			{
				id: 006,
				img: './imgs/logo.jpg',
				name: 'D+ Delivery',
				address: 'Endereço 3',
				star: './imgs/star.png',
				rate: '5',
				clock: './imgs/clock.png',
				timeWait: '40 - 60 min',
				opened: false
			}
		]
	}
})
