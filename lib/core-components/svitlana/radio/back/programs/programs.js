FamousFramework.scene('svitlana:radio:back:programs', {
	behaviors: {
		'$self': {},
		'.background': {
			'size': [100, 200],
			'align': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'geometry': {
				'shape': 'Plane'
			},
			'position-z': -10
		},
		'scroll-view': {
			'align': [0.5, 0.55],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'item-height': 160,
			'scroll-view-size': [200, 200],
			style: {
				border: 'none'
			}
		},
		'.scroll-view-item': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			style: {
				'background-color': 'lightgray',
				'border': '1px solid black',
			},
			'size-absolute-x': 160,
			'size-absolute-y': 160,
			'rotation-z': -Math.PI / 2,
			'position-y': '[[identity|pos]]',
			'$repeat': function (count, radioPrograms) {
				var result = [];
				for (var i = 0; i < radioPrograms.length; i++) {
					result.push({
						content: radioPrograms[i]
					});
				}
				return result;
			}
		}
	},
	events: {
		'$self': {
			'scrollback': function ($state) {
				console.log('hear');
				var posCurr = $state.get('pos');
				var newPos = posCurr + $state.get('step');
				if (newPos > 0) {
					newPos = 0;
				}
				$state.set('pos', newPos, {
					duration: 1000,
					curve: 'easeOutBounce'
				});
			},
			'scrollforw': function ($state) {
				var length = $state.get('radioPrograms').length - 1;
				var min = -length * 160;
				var posCurr = $state.get('pos');
				var newPos = posCurr - $state.get('step');
				if (newPos < min) {
					newPos = min;
				}
				$state.set('pos', newPos, {
					duration: 1000,
					curve: 'easeOutBounce'
				});
			}
		},
	},
	states: {
		radioPrograms: programs,
		step: 160,
		pos: 0
	},
	tree: `
        <scroll-view class="sv-no-scroll">
            <program class="scroll-view-item"></program>
        </scroll-view>
    `
})
	.config({
		includes: ['../../radioData.js', '../../radio.css'],
		imports: {
			'famous:layouts': ['scroll-view'],
			'svitlana:radio:back:programs': [
				'program'
			],
		}
	});
