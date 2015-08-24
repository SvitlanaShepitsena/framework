FamousFramework.scene('svitlana:radio:back', {
    behaviors: {
        '#back': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (rootWidth, rootHeight) {
                return [rootWidth, rootHeight];
            },
            'style': function (accentColor50, whiteFrame1) {
                return {
                    'background-color': '#24231D',
                    'box-shadow': whiteFrame1,
                };
            },
            'rotation-y': Math.PI,
        },
        '#headerText': {
            'align': [0.5, 0.05],
            'mount-point': [0.5, 0.05],
            'origin': [0.5, 0.05],
            'size': [178, 30],
            'content': function () {
                return 'PROGRAMS 2015'
            },
            'style': function (accentColor50) {
                return {
                    'color': accentColor50,
                    'font-size': '20px',
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
            'align': [0.1, 0.96],
            'mount-point': [0.1, 0.96],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/yellow-left.png" style="width:30px">',

            'position-z': '5'
        },
        '#forwbtn': {
            'align': [0.9, 0.96],
            'mount-point': [0.9, 0.96],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/yellow-right.png" style="width:30px">',

            'position-z': '5'
        },
        '#flipbtn': {
            'align': [0.5, .96],
            'origin': [0.5, .96],
            'mount-point': [0.5, .96],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/home-icon.png" style="width:30px">',

            'position-z': '5'
        },
    },
    events: {
        $self: {
            'scrollback': function ($dispatcher) {
                console.log('main');
                $dispatcher.broadcast('scrollback');
            },
            'scrollforw': function ($dispatcher) {
                console.log('main');
                $dispatcher.broadcast('scrollforw');
            }

        },
        '#backbtn': {
            'click': function ($event, $dispatcher) {
                console.log('btn');
                $dispatcher.emit('scrollback');
                $event.stopPropagation();
            }
        },
        '#forwbtn': {
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
    states: {
        /*=size*/
        rootWidth: 230,
        rootHeight: 300,
        radioFooterHeight: 80,
        programsHeaderHeight: 40,
        programsFooterHeight: 40,
        progWidth: 184,
        progHeight: 200,
        progMargin: 5,
        /*=shadow*/
        whiteFrame1: "rgba(0, 0, 0, 0.298039) 0px 1px ",
        whiteFrame2: "rgba(0, 0, 0, 0.137255) 0px 2px 4px -1px, rgba(0, 0, 0, 0.0980392) 0px 4px 5px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 10px 0px",
        whiteFrame3: "rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px,rgba(0, 0, 0, 0.0980392) 0px 6px 10px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 18px 0px",

        /*=fonts*/
        fsCaption: '12px',
        fsBody1: '14px',
        fsBody2: '15px',
        fsSubhead: '16px',
        fsTitle: '20px',
        fsHeadline: '24px',
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

    },
    //tree: 'back.html'
    tree: 'back.html',
})
    .config({
        imports: {
            'svitlana:radio:back': [
                'programs',
                'navigation'
            ],
        }
    });

