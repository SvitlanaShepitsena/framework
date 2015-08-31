FamousFramework.scene('svitlana:radio:back', {
    /*behavior renders itself based on state value*/
    behaviors: {
        '#back': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (rootWidth, rootHeight) {
                return [rootWidth, rootHeight];
            },
            'style': function (accentColor50, whiteFrame1, primaryColor) {
                return {
                    'background-color': primaryColor,
                    'box-shadow': whiteFrame1,
                };
            },
            'rotation-y': Math.PI,
        },
        '#headerText': {
            'align': [0.5, 0.05],
            'mount-point': [0.5, 0.05],
            'origin': [0.5, 0.05],
            'size': [170, 28],
            'content': 'PROGRAMS 2015',
            'style': function (accentColor50) {
                return {
                    'color': accentColor50,
                    'font-size': '18px',
                    'text-align': 'center',
                };
            },
            'position-z': '2'
        },
        '#programs': {
            'align': [0.47, 0.47],
            'origin': [0.47, 0.47],
            'mount-point': [0.47, 0.47],
            'size': [220, 220],
            'style': {
                'text-align': 'center'
            },
            'rotation-z': Math.PI / 2,
        },
        '#backbtn': {
            'align': [0.1, 0.98],
            'mount-point': [0.1, 0.98],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/yellow-left.png" style="width:30px">',
            'style': {
                'cursor': 'pointer'
            },
            'position-z': '5'
        },
        '#forwbtn': {
            'align': [0.9, 0.98],
            'mount-point': [0.9, 0.98],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/yellow-right.png" style="width:30px">',
            'style': {
                'cursor': 'pointer'
            },
            'position-z': '5'
        },
        '#flipbtn': {
            'align': [0.5, .98],
            'origin': [0.5, .98],
            'mount-point': [0.5, .98],
            'size': [30, 30],
            'style': {
                'cursor': 'pointer'
            },
            'content': '<img src="{{BASE_URL}}img/home-icon.png" style="width:30px">',
            'position-z': '5'
        },
    },
    events: {
        $self: {
            'scrollback': function ($dispatcher) {
                $dispatcher.broadcast('scrollback');
            },
            'scrollforw': function ($dispatcher) {
                $dispatcher.broadcast('scrollforw');
            }

        },
        '#forwbtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('scrollback');
                $event.stopPropagation();
            }
        },
        '#backbtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('scrollforw');
                $event.stopPropagation();
                $event.stopPropagation();
            }
        },
        '#flipbtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('flip');
                $event.stopPropagation();
            }
        }
    },
    states: states,
    tree: 'back.html',
})
    .config({
        includes: ['../radio.css', '../states.js'],
        imports: {
            'svitlana:radio:back': [
                'programs'
            ],
        }
    });

