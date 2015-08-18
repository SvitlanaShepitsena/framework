FamousFramework.scene('svitlana:radio:back', {
	behaviors: {
		'#back': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [200, 200],
			'rotation-y': Math.PI,
			'style': {
				'background-color': 'deepskyblue'
			},
		},
		'#programs': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [200, 200],
			'style': {
				'text-align': 'center'
			},
			'rotation-z': Math.PI / 2,
		},
		'#backbtn': {
			'align': [0.1, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [30, 30],

			'position-z': '5'
		},
	},
	events: {
		'.navigation': {
			'click': function ($event, $repeatPayload) {
				$event.stopPropagation();
				console.log($repeatPayload);
			}
		}
	},
	states: {},
	//tree: 'back.html'
	tree: `<node id="back">

<node id="backbtn">
<img src="{{BASE_URL}}img/my-image.png">
</node>
<node id="forwbtn"></node>
    <programs id="programs"></programs>
</node>`
})
	.config({
		imports: {
			'svitlana:radio:back': [
				'programs',
				'navigation'
			],
		}
	});

