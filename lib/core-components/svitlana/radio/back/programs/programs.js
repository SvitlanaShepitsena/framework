FamousFramework.scene('svitlana:radio:back:programs', {
    behaviors: {
        'scroll-view': {
            'item-height': 175,
            'scroll-view-size': [220, 220],
            style: {
                border: 'none',
                overflow: 'hidden',
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
    states: {
        programW: 170,
        pos: -170,
        radioPrograms: [],
        /*=colors*/
        //primaryColor: '#3e2723',
        primaryColor: '#24231D',
        primaryColor50: '#efebe9',
        primaryColor100: '#d7ccc8',
        primaryColor200: '#bcaaa4',
        primaryColor800: '4E342E',
        primaryColorLight: '#5d4037',
        accentColor: '#e64a19',
        accentColor50: '#FFF8E1',
        accentColor100: '#FFECB3',
        accentColor200: '#FFE082',
        accentColor400: '#ff7043',
        accentColorLight: '#FFC400',
        /*=fonts color*/
        baseColor: '#000000',
        textColor: '#202020',
        secondaryTextColor: '#727272',
        hintTextColor: '#9A9A9A',
        dividersColor: '#DBDBDB',
        whiteFrame1: "rgba(0, 0, 0, 0.298039) 0px 1px ",
        whiteFrame2: "rgba(0, 0, 0, 0.137255) 0px 2px 4px -1px, rgba(0, 0, 0, 0.0980392) 0px 4px 5px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 10px 0px",
        whiteFrame3: "rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px,rgba(0, 0, 0, 0.0980392) 0px 6px 10px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 18px 0px",
        count: 0
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
