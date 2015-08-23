FamousFramework.scene('svitlana:radio:back:programs:program', {
	behaviors: {
		'#program': {
			'align': [0.5, 0.4],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [140, 120],
			'content': '[[identity]]',
			style: {
				'background-color': 'white',
				'border': '1px solid black',
				'color': '#40b2e8',
				'font-family': 'Lato'
			},
			'class': 'sv-iframe-responsive-wrap',
		},
		'#sponsorsBgrd': {
			'align': [0.5, 0.8],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [142, 40],
			style: {
				'background-color': 'white',
				'border': '1px solid black',
				'color': '#40b2e8',
				'font-family': 'Lato',
				'text-align': 'left'
			},
			'class': 'sv-iframe-responsive-wrap',
		},
		'#sponsorsBtn': {

			'size': [30, 30],
			'position-z': '4',
			'content': function (index) {
				if (index > 0) {
					return '';
				}
			return '<img src="{{BASE_URL}}../../img/phone.png" style="width:30px;height:30px;padding-top: 4px"/>';
			}
		},
		'#sponsorsTitle': {
			'align': [0.2, 0.8],
			'scale': [0.8, 0.8],
			'origin': [0.5, 0.5],
			'mount-point': [0, 0.5],
			'size': [120, 40],
			'content': function (guests, index, currentGuest) {
				if (index > 0) {
					return '';
				}
				return guests[index][currentGuest];
			}
		}
	},
	events: {
		$public: {
			content: '[[setter]]',
			index: '[[setter]]'
		},
		'#sponsorsBtn': {
			'click': function ($state) {
				console.log('click()');
				var index = $state.get('index');
				var max = $state.get('guests')[index].length - 1;
				var currGuest = $state.get('currentGuest');
				if (currGuest >= max) {
					currGuest = 0;
				} else {
					currGuest += 1;
				}
				$state.set('currentGuest', currGuest);
			}
		}
	},
	states: {
		currentGuest: 0,
		content: '',
		index: 0,
		guests: guests
	},
	tree: `<node id="program"> </node>
	<node id="sponsorsBgrd">
	<node id="sponsorsBtn"> </node>
	</node>
	<node id="sponsorsTitle"></node>

	`
})
	.config({
		includes: ['guests.js'],
	});

