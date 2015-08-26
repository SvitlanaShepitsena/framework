FamousFramework.scene('svitlana:radio:back:programs', {
    behaviors: {
        'scroll-view': {
            'item-height': 175,
            'scroll-view-size': [220, 220],
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
            'size-absolute-x': 170,
            'size-absolute-y': 186,
            'rotation-z': -Math.PI / 2,
            'position-y': '[[identity|pos]]',
            '$repeat': function (radioPrograms, count) {
                var result = [];
                if (count === 0) {
                    return result;
                }
                for (var i = 0; i < count; i++) {

                    var radioProgram = radioPrograms[i];
                    var guests = [];
                    for (var guest in radioProgram.guests) {
                        var guestObj = radioProgram.guests[guest];
                        guests.push(guestObj);

                    }

                    result.push({
                        content: radioProgram.iframe,
                        guests: guests
                    });
                }
                return result
            }
        }
    },
    events: {
        '$self': {
            'scrollback': function ($state) {
                var posCurr = $state.get('pos');
                var newPos = posCurr + $state.get('step');
                if (newPos > -160) {
                    newPos = -160;
                }
                $state.set('pos', newPos, {
                    duration: 1000,
                    curve: 'easeOutBounce'
                });
            },
            'scrollforw': function ($state) {
                var length = $state.get('radioPrograms').length;
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
            },
            'programs-loaded': function ($payload, $state) {
                var programs = [];
                var index = 0;
                for (var prop in $payload) {
                    var programObj = $payload[prop];

                    var iframe = `<iframe src="https://www.youtube.com/embed/${programObj.youtube}" frameborder="0" allowfullscreen></iframe>`;
                    programs.push({iframe: iframe, guests: programObj.guests});
                }
                $state.set('radioPrograms', programs.reverse());
                $state.set('count', programs.length);
            }
        },
    },
    states: {
        radioPrograms: [],
        count: 0,
        step: 160,
        pos: -160
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
