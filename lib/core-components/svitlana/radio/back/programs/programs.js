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
            '$repeat': function (count, radioPrograms) {
                var result = [];
                for (var i = 0; i < radioPrograms.length; i++) {
                    result.push({
                        content: radioPrograms[i],
                        index: i
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
