FamousFramework.scene('svitlana:radio:back:programs:program', {
    behaviors: {
        '#program': {
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [140, 140],
            'content': '[[identity]]',
            style: {
                'border': '1px solid black',
                'color': '#40b2e8',
                'font-family': 'Lato'
            },
            'class': 'sv-iframe-responsive-wrap',
        },
        '#sponsorsCard': {
            'align': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': [142, 40],
            style: {
                'background-color': 'whitesmoke',
                'border': '1px solid black',
            },
        },
        '#sponsorsBtn': {
            'align': [1, 0.5],
            'mount-point': [1, 0.5],
            'size': [24, 24],
            'position-z': '4',
            'content': function (index) {
                if (index > 0) {
                    return '';
                }
                return '<img src="https://s3-us-west-2.amazonaws.com/svet.com/ad/get-info.png" style="width:24px;height:24px;padding-top: 4px"/>';
            }
        },
        '#nextBtn': {
            'align': [1, 0.5],
            'mount-point': [1, 0.5],
            'size': [24, 24],
            'position-z': '4',
            'content': function (index) {
                if (index > 0) {
                    return '';
                }
                return '<img src="https://s3-us-west-2.amazonaws.com/svet.com/ad/get-info.png" style="width:24px;height:24px;padding-top: 4px"/>';
            }
        },
        '#sponsorsTitle': {
            'align': [0, 0.5],
            'mount-point': [0, 0.5],
            'size': [120, 34],
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
    tree: `<node id="program">
	<node id="sponsorsCard">
	<node id="sponsorsTitle"></node>
	<node id="sponsorsBtn"> </node>
	</node>
	</node> `
})
    .config({
        includes: ['guests.js'],
    });

