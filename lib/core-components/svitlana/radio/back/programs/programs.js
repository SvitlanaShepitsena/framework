FamousFramework.scene('svitlana:radio:back:programs', {
	behaviors: {
		'#programs': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [200, 200],
		},
		'#next': {
			'align': [0, 0.7],
			'position-x': 50,
			'position-y': 30,
			'position-z': 5,
			'size-absolute': [50, 50],
			content: '<button>Next</button>',
			'style': {
				'cursor': 'pointer'
			}
		},
		'.program': {
			'$repeat': function (count) {
				var result = [];
				for (var i = 0; i < count; i++) {
					result.push({
						content: `<div>Item ${ i + 1 }</div>`,
					});
				}
				return result;
			},
			'position-x': function ($index, position) {
				return -102 * $index - position;
			}
		},
	},
	events: {
		'#next': {
			'click': function ($state, $event) {
				console.log('click');
				$state.set('position', $state.get('position') - 100, {
					duration: 1000
				});
				$event.stopPropagation();
			}
		}
	},
	states: {
		count: 5,
		position: 0
	},
	tree: `<node id="programs">
	<node id="next"></node>
	<program class="program"></program>
	</node>`
})
	.config({
		imports: {
			'svitlana:radio:back:programs': [
				'program'
			],
		}
	});

