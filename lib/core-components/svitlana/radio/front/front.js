FamousFramework.scene('svitlana:radio:front', {
	behaviors: {
		'#front': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [200,200],
			'content': '<h1>Front Side</h1>',
			'style': {
				'background':'red',
				'color':'whitesmoke',
				'text-align':'center'
			},
			'position-z': '1'

		}
	},
	events: {},
	states: {},
	tree: '<node id="front"></node>'
})
	.config({
		imports: {}
	});

