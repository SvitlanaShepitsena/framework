FamousFramework.scene('svitlana:radio:back:programs:program', {
	behaviors: {
		'#program': {
			'align': [0.5, 0.4],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [50, 50],
			'content': '[[identity]]',
			style: {
				'background-color': 'white',
				'border': '1px solid black',
				'color': '#40b2e8',
				'font-family': 'Lato'
			},
			'class': 'sv-iframe-responsive-wrap',
		}
	},
	events: {
		$public: {
			content: '[[setter]]'
		}
	},
	states: {
		content: ''
	},
	tree: `<node id="program">
     </node>`
})
	.config({});

