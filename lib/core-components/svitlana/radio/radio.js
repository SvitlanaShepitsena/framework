FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#radioRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 300],
            'rotation-y': function (angle) {
                return angle;
            },
            'style': function (containerColor2) {
                return {
                    'background-color': containerColor2,
                    'border-radius': '2px',
                    'perspective': '100px'
                };
            },
            'unselectable': true
        },
        '#radioHeader': {
            'align': [0.5, 0],
            'origin': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [250, 50],
            'style': function (primaryColor) {
                return {
                    //'background-color': primaryColor,
                    //'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 1px '
                };
            },
            'position-z': '2'
        },
        '#radioTitle': {
            'content': function () {
                return '<div style=" margin-left:8px;margin-top:4px;text-color:white">Radio "OSA"</div>';
            },
            'style': function (accentColor100) {
                return {
                    'line-height': '1.5em',
                    'font-size': '1.5em',
                    'text-align': 'left',
                    'color': accentColor100
                };
            },
            'position-z': '3'
        },
        '#radioLogo': {
            'align': [0.5, 0],
            'origin': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [250, 220],
            'style': {
                'background': 'url("https://s3-us-west-2.amazonaws.com/svet.com/radio/radio-backdrop-2.jpg") no-repeat',
                'text-align': 'center',
                'font-size': '4em',
                'cursor': 'pointer',
            },
            'position-z': '1'
        },

        '#radioFooter': {
            'align': [0.5, 1],
            'origin': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': [250, 80],
            'style': function (accentColor50) {
                return {
                    'background-color': accentColor50,
                    'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 1px '
                };
            },
            'position-z': '1'
        },
        '#radioNav': {
            'align': [0, 0.5],
            'origin': [0, 0.5],
            'mount-point': [0, 0.5],
            'size': [240, 60],
            'style': {
                'background-color': 'none',
            },
        },

        '#btn1': {
            'align': [0.1, 0.5],
            'origin': [0.1, 0.5],
            'mount-point': [0.1, 0.5],
            'size': [60, 30],
            'style': function (accentColor) {
                return {
                    'font-size': '1em',
                    'color': accentColor,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">LIVE</a>`;
            },
        },
        '#btn2': {
            'align': [0.9, 0.5],
            'origin': [0.9, 0.5],
            'mount-point': [0.9, 0.5],
            'size': [150, 30],
            'style': function (primaryColor) {
                return {
                    'font-size': '1em',
                    'color': primaryColor,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">PROGRAMS 2015</a>`;
            },
        },
        '#programsRoot': {
            'align': [0.5, 1],
            'origin': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': [250, 300],
            'style': function (primaryColor50) {
                return {
                    'border-radius': '2px',
                    'background-color': primaryColor50,
                };
            },
            'opacity': function (opacity) {
                return opacity;
            },
            'rotation-y': function () {
                return Math.PI;
            }

        },
        '#programsHeader': {
            'align': [0.5, 0],
            'origin': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [250, 40],
            'style': function (primaryColor) {
                return {
                    'background-color': primaryColor,
                    'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 1px '
                };
            },
        },
        '#programsTitle': {
            'content': function () {
                return `<div>RADIO PROGRAMS 2015</div>`;
            },
            'style': function (accentColor100, accentColor) {
                return {
                    'line-height': '2.6em',
                    'font-size': '.95em',
                    'text-align': 'center',
                    'color': accentColor100,
                    'font-family': 'Lato, sans-serif',
                };
            },
            'position-z': '3'
        },
        '#programsFooter': {
            'align': [0.5, 1],
            'origin': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': [250, 40],
            'style': function (primaryColor) {
                return {
                    'background-color': primaryColor,
                    'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 1px '
                };
            },
        },
        '#btn3': {
            'align': [0.1, 0.5],
            'origin': [0.1, 0.5],
            'mount-point': [0.1, 0.5],
            'size': [50, 16],
            'style': function (accentColor100) {
                return {
                    'font-size': '0.9em',
                    'color': accentColor100,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">LIVE</a>`;
            },
        },
        '#btn4': {
            'align': [0.95, 0.5],
            'origin': [0.95, 0.5],
            'mount-point': [0.95, 0.5],
            'size': [64, 16],
            'style': function (accentColor100) {
                return {
                    'font-size': '0.9em',
                    'color': accentColor100,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">ARCHIVE</a>`;
            },
        },
        '#programsNav': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [70, 30]
        },
        '#forw': {
            'align': [1, 0.5],
            'origin': [1, 0.5],
            'mount-point': [1, 0.5],
            'size': [28, 28],
            content: function () {
                return `<a style="margin-left:1px;display:block;width:22px;height:30px;text-align: right"> > </a>`;
            },
            'style': function (primaryColor, primaryColorLight, accentColor, accentColor100, whiteframe2) {
                return {
                    'border-radius': '50%',
                    'background-color': accentColor,
                    'box-shadow': whiteframe2,
                    'font-size': '24px',
                    'font-weight': '500',
                    'line-height': '30px',
                    'color': primaryColor,
                    'cursor': 'pointer',
                };
            },
        },
        '#back': {
            'align': [0, 0.5],
            'origin': [0, 0.5],
            'mount-point': [0, 0.5],
            'size': [28, 28],
            content: function () {
                return `<a style="margin-left:1px;display:block;width:22px;height:30px;text-align: center"> < </a>`;
            },
            'style': function (primaryColor, primaryColorLight, accentColor, accentColor100, whiteframe2) {
                return {
                    'border-radius': '50%',
                    'background-color': accentColor,
                    'box-shadow': whiteframe2,
                    'font-size': '24px',
                    'font-weight': '500',
                    'line-height': '30px',
                    'color': primaryColor,
                    'cursor': 'pointer',

                    //'border-radius': '50%',
                    //'background-color': primaryColorLight,
                    //'box-shadow': whiteframe3,
                    //'font-size': '26px',
                    //'line-height': '30px',
                    //'color': accentColor100,
                    //'cursor': 'pointer',
                };
            },
        },
        '.program': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (progWidth, progHeight) {
                return [progWidth, progHeight];
            },
            'style': function (primaryColor, accentColor50, whiteframe3) {
                return {
                    'border-radius': '2px',
                    'background-color': accentColor50,
                    'text-align': 'center',
                    'font-size': '1.8em',
                    'padding-top': '8px',
                    'color': primaryColor,
                    'box-shadow': whiteframe3
                };
            },

            '$repeat': function (programs) {
                return programs;

            },
            'content': function ($index) {
                return '<div style="margin-top:8px"> July 25</div>';
            },
            'position-x': function ($index, listPosition, progWidth, progMargin) {

                return -($index * progWidth + listPosition + $index * progMargin)*1.08;
            },
            'position-z': function ($index, activeIndex) {
                var distanceFromActive = 10 + 11 * Math.abs($index - activeIndex);
                return distanceFromActive;
            },
        }
    },
    events: {

        '#radioLogo,#slider,#btn2, #btn3': {
            'click': function ($state) {
                $state.set('angle', $state.get('angle') + Math.PI, {
                    duration: 1000
                });
                 $state.set('opacity', $state.get('opacity') === 0 ? 1 : 0,{
                    duration:200
                });
            }
        },
        '#back': {
            'click': function ($state) {
                var listPosition = $state.get('listPosition');
                var progWidth = $state.get('progWidth');
                var progMargin = $state.get('progMargin');

                var programsRotation = $state.get('programsRotation');

                if (listPosition >= 0) {
                    return;
                }
                $state.set('activeIndex', $state.get('activeIndex') - 1);
                $state.set('listPosition', Math.floor($state.get('listPosition') + (progWidth + progMargin)), {
                    duration: 1000,
                    curve: 'easeOutBounce'
                })
            }
        },
        '#forw': {
            'click': function ($state, $timelines) {
                var listPosition = $state.get('listPosition');
                var progWidth = $state.get('progWidth');
                var progMargin = $state.get('progMargin');
                var programs = $state.get('programs');
                var programsRotation = $state.get('programsRotation');
                console.log(programsRotation);

                if (listPosition < (-(programs.length - 2) * (progWidth + progMargin))) {
                    return;
                }
                $state.set('activeIndex', $state.get('activeIndex') + 1);

                $state.set('listPosition', Math.floor($state.get('listPosition') - (progWidth + progMargin)), {
                    duration: 500,
                    curve: 'easeOutBounce'
                });

            }
        }
    },
    states: {
        opacity: 0,
        programs: [
            {
                'style': {
                    'background-color': '#222326'
                }
            },
            {
                'style': {
                    'background-color': '#222326'
                }
            },
            {
                'style': {
                    'background-color': '#222326'
                }
            },
            {
                'style': {
                    'background-color': '#222326'
                }
            },
            {
                'style': {
                    'background-color': '#222326'
                }
            }
        ],

        progWidth: 164,
        progHeight: 190,
        progMargin: 5,
        whiteframe1: "rgba(0, 0, 0, 0.298039) 0px 1px ",
        whiteframe2: "rgba(0, 0, 0, 0.137255) 0px 2px 4px -1px, rgba(0, 0, 0, 0.0980392) 0px 4px 5px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 10px 0px",
        whiteframe3: "rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px,rgba(0, 0, 0, 0.0980392) 0px 6px 10px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 18px 0px",
        /*Colors*/
        //primaryColor: '#3e2723',
        primaryColor: '#24231D',
        primaryColor50: '#efebe9',
        primaryColor100: '#d7ccc8',
        primaryColor200: '#bcaaa4',
        primaryColor800: '4E342E',
        primaryColorLight: '#5d4037',
        accentColor: '#FFAB00',
        accentColor50: '#FFF8E1',
        accentColor100: '#FFECB3',
        accentColor200: '#FFE082',
        accentColorLight: '#FFC400',

        //text
        baseColor: '#000000',
        textColor: '#202020',
        secondaryTextColor: '#727272',
        hintTextColor: '#9A9A9A',
        dividersColor: '#DBDBDB',
        /**/
        containerColor1: 'primaryColor',
        containerColor2: '#F5F5F5',
        containerColor3: '#FAFAFA',
        containerColor4: '#424242',
        containerRed: '#E53935',
        activeIndex: 0,
        listPosition: 0,
        angle: 0,
        //angle: Math.PI,
        programsRotation: 0
    },
    tree: 'tree.html'
})
    .config({})

;

