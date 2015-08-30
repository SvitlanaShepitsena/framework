FamousFramework.scene('svitlana:radio:back:programs', {
    behaviors: {
        'scroll-view': {
            'item-height': 175,
            'scroll-view-size': [220, 220],
            style: {
                border: 'none',
                overflow: 'hidden',
                '-webkit-text-stroke-width': '.35px',
            }
        },
        '.scroll-view-item': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'style': function (accentColor50, whiteFrame3) {
                return {
                    'background-color': accentColor50,
                    'border-radius': '2px',
                };
            },
            'size-absolute-x': '[[identity|programW]]',
            'size-absolute-y': 200,
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
                var programW = $state.get('programW');
                var posCurr = $state.get('pos');
                var newPos = posCurr + programW;
                if (newPos > -programW) {
                    newPos = -programW;
                }
                $state.set('pos', newPos, {
                    duration: 1000,
                    curve: 'easeOutBounce'
                });
            },
            'scrollforw': function ($state) {
                var length = $state.get('radioPrograms').length;
                var programW = $state.get('programW');
                var min = -length * programW;
                var posCurr = $state.get('pos');
                var newPos = posCurr - programW;
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

                    var iframe = `<iframe id="widgetVideo" src="https://www.youtube.com/embed/${programObj.youtube}" frameborder="0" allowfullscreen></iframe>`;
                    programs.push({iframe: iframe, guests: programObj.guests});
                }
                $state.set('radioPrograms', programs.reverse());
                $state.set('count', programs.length);
            }
        },
    },
    states: states,
    tree: 'programs.html',
})
    .config({
        includes: ['../../radio.css', '../../states.js'],
        imports: {
            'famous:layouts': ['scroll-view'],
            'svitlana:radio:back:programs': [
                'program'
            ],
        }
    });
