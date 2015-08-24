FamousFramework.scene('svitlana:radio:back:programs:program', {
    behaviors: {
        '#program': {
            'align': [0.4, .15],
            'mount-point': [0.4, .15],
            'size': [154, 124],
            'content': '[[identity]]',
            style: {
                'border': '1px solid black',
            },
            'class': 'sv-iframe-responsive-wrap',
        },
        '#sponsorsCard': {
            'align': [0.42, .9],
            'mount-point': [0.42, .9],
            'size': [155, 70],
            style: {
                'background-color': 'white',
                'border': '1px solid black',
            },
        },
        '#sponsorsBtn': {
            'align': [1, 0.5],
            'mount-point': [1, 0.5],
            'size': [24, 24],
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
        '#guestsTitle': {
            'align': [0, 0.1],
            'mount-point': [0, 0.1],
            'size': [undefined, 34],
            'opacity': '[[identity]]',
            'content': '<span class="fs-body-2">PROGRAM GUESTS</span>',

        },
        '#programGuests': {
            'align': [0, 0.65],
            'mount-point': [0, 0.65],
            'size': [120, 34],
            'opacity': '[[identity]]',
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

                $state.set('opacity', 0, {duration: 800}).thenSet('currentGuest', currGuest).thenSet('opacity', 1, {duration: 800});
            }
        }
    },
    states: {
        currentGuest: 0,
        opacity: 1,
        content: '',
        index: 0,
        guests: guests
    },
    tree: 'program.html'
})
    .config({
        includes: ['guests.js'],
    });

