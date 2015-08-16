FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#radioRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (rootWidth, rootHeight) {
                return [rootWidth, rootHeight];
            },

            'rotation-y': function (angle) {
                return angle;
            },
            'style': function (accentColor50) {
                return {
                    'background-color': accentColor50,
                    'perspective': '100px',
                };
            },
            'unselectable': true
        },
        '#radioHeader': {
            'align': [0.5, 0.07],
            'origin': [0.5, 0.07],
            'mount-point': [0.5, 0.07],
            'size': [224, 64],
            'position-z': '2'
        },
        '#radioTitle': {
            'align': [0.5, 0],
            "origin": [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [192, 62],
            'content': function () {
                return '<img width="192px" style="" src="https://s3-us-west-2.amazonaws.com/svet.com/radio/logo-50.png"/>';
            },
            'position-z': '3',
            'style': {
                'cursor': 'pointer',
            },
        },
        '#radioLogo': {
            'align': [0.5, 0.02],
            'origin': [0.5, 0.02],
            'mount-point': [0.5, 0.02],
            'size': [224, 220],
            'style': {
                'background': 'url("https://s3-us-west-2.amazonaws.com/svet.com/radio/radio-backdrop-4.jpg") no-repeat',
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
            'size': function (rootWidth, radioFooterHeight) {

                return [rootWidth, radioFooterHeight];
            },
            'style': function (accentColor50, whiteFrame1) {
                return {
                    'background-color': accentColor50,
                    'box-shadow': whiteFrame1,
                };
            },
            'position-z': '1'
        },
        '#radioNav': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [190, 60],
        },

        '#liveFrontBtn': {
            'align': [0, 0.5],
            'origin': [0, 0.5],
            'mount-point': [0, 0.5],
            'size': [42, 30],
            'style': function (accentColor, fsBody1) {
                return {
                    'font-size': fsBody1,
                    'color': accentColor,
                    'cursor': 'pointer',
                };
            },
            'position-z': '2',
            'content': function () {
                return `<a style="display:block">LIVE</a>`;
            },
        },
        '#liveNextProgramInfo': {
            'align': [1, 0],
            "origin": [1, 0],
            'mount-point': [1, 0],
            'size': [230, 26],
            'content': '<span>Live broadcast every Sunday 11:30AM</span>',
            'position-z': '1',
            'opacity': function (liveNextProgramInfo) {
                return liveNextProgramInfo;
            },
            'style': function (accentColor50, accentColor, fsCaption, whiteFrame1) {
                return {
                    'box-shadow': whiteFrame1,
                    'font-size': fsCaption,
                    'background-color': accentColor,
                    'color': '#ffffff',
                    'padding': '6px 6px',
                    'border-radius': '4px',
                };
            },
        },
        '#btn2': {
            'align': [0.9, 0.5],
            'origin': [0.9, 0.5],
            'mount-point': [0.9, 0.5],
            'size': [130, 30],
            'position-z': '2',
            'style': function (primaryColor, fsBody1) {
                return {
                    'font-size': fsBody1,
                    'color': primaryColor,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">PROGRAMS 2015</a>`;
            },
        },
        '#programsRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (rootWidth, rootHeight) {
                return [rootWidth, rootHeight];
            },
            'style': function (accentColor50) {
                return {
                    'background-color': accentColor50,
                    'perspective': '100px'
                };
            },
            'opacity': function (opacity) {
                return opacity;
            },
            'position-z': function (opacity) {
                if (opacity === 0) {
                    //front side
                    return -999;
                } else {
                    //back side
                    return 0;
                }
            },
        },
        '#programsHeader': {
            'align': [0.5, 0],
            'origin': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': function (rootWidth, programsHeaderHeight) {

                return [rootWidth, programsHeaderHeight];
            },
            'style': function (primaryColor, whiteFrame1) {
                return {
                    'background-color': primaryColor,
                    'box-shadow': whiteFrame1,
                };
            },
        },
        '#programsTitle': {
            'content': function () {
                return `<div>RADIO PROGRAMS 2015</div>`;
            },
            'style': function (accentColor100, fsSubhead) {
                return {
                    'font-size': fsSubhead,
                    'color': accentColor100,
                    'line-height': '2.6em',
                    'text-align': 'center',
                    'font-family': 'Lato, sans-serif',
                };
            },
            'position-z': '2'
        },
        '#programsFooter': {
            'align': [0.5, 1],
            'origin': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': function (rootWidth, programsFooterHeight) {

                return [rootWidth, programsFooterHeight];
            },
            'style': function (primaryColor, whiteFrame1) {
                return {
                    'background-color': primaryColor,
                    'box-shadow': whiteFrame1
                };
            },
        },
        '#btn3': {
            'align': [0.1, 0.5],
            'origin': [0.1, 0.5],
            'mount-point': [0.1, 0.5],
            'size': [50, 16],
            'style': function (accentColor100, fsBody1) {
                return {
                    'font-size': fsBody1,
                    'color': accentColor100,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">LIVE</a>`;
            },
        },
        '#btn4': {
            'align': [0, 0.5],
            'origin': [0, 0.5],
            'mount-point': [0, 0.5],
            'size': [64, 16],
            'style': function (fsBody1, accentColor) {
                return {
                    'font-size': fsBody1,
                    'color': accentColor,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block"> </a>`;
            },
        },
        '#programsNav': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 30]
        },
        '#forw': {
            'align': [1, 0.5],
            'origin': [1, 0.5],
            'mount-point': [1, 0.5],
            'size': [28, 28],
            content: function () {
                return `<a style="margin-left:1px;display:block;width:22px;height:30px;text-align: right"> > </a>`;
            },
            'style': function (primaryColor, primaryColorLight, accentColor400, accentColor100, whiteframe2) {
                return {
                    'background-color': accentColor400,
                    'box-shadow': whiteframe2,
                    'color': primaryColor,
                    'border-radius': '50%',
                    'font-size': '24px',
                    'font-weight': '500',
                    'line-height': '30px',
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
            'style': function (primaryColor, primaryColorLight, accentColor400, accentColor100, whiteframe2) {
                return {
                    'background-color': accentColor400,
                    'box-shadow': whiteframe2,
                    'color': primaryColor,
                    'border-radius': '50%',
                    'font-size': '24px',
                    'font-weight': '500',
                    'line-height': '30px',
                    'cursor': 'pointer',
                };
            },
        },

        '#flipBack': {
            'align': [0, 0.5],
            'origin': [0, 0.5],
            'mount-point': [0, 0.5],
            'size': [44, 14],
            content: function () {
                //return `<!--<a style="margin-left:1px;display:block;width:22px;height:30px;text-align: center"> < </a>-->`;
                return `<a style="display:block">< BACK</a>`;
            },
            'style': function (fsCaption, primaryColorLight, accentColor400, accentColor200) {
                return {
                    'color': accentColor200,
                    'font-size': fsCaption,
                    'cursor': 'pointer',
                };
            },

            'position': function (opacity) {

                return [0,0,opacity];
            },
        },

        '.program': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (progWidth, progHeight) {
                return [progWidth, progHeight];
            },
            'style': function (primaryColor, accentColor50, whiteframe3, fsHeadline) {
                return {
                    'background-color': accentColor50,
                    'font-size': fsHeadline,
                    'color': primaryColor,
                    'box-shadow': whiteframe3,
                    'text-align': 'center',
                };
            },

            '$repeat': function (programs) {
                return programs;

            },
            'content': function ($index, programs) {
                return programs[$index];
            },
            'position-x': function ($index, listPosition, progWidth, progMargin) {

                return -($index * progWidth + listPosition + $index * progMargin);
            },
            'position-z': function ($index, activeIndex) {
                var distanceFromActive = 10 - 8 * Math.abs($index - activeIndex);
                return distanceFromActive;
            },
        }
    },
    events: {
        '#liveFrontBtn': {
            'mouseover': function ($state) {
                var liveNextProgramInfo = $state.get('liveNextProgramInfo');
                $state.set('liveNextProgramInfo', 1, {
                    duration: 1000
                });
                console.log('mouseover');

            },
            'mouseout': function ($state) {
                var liveNextProgramInfo = $state.get('liveNextProgramInfo');
                $state.set('liveNextProgramInfo', 0, {
                    duration: 1000
                });
                console.log('mouseout');

            }
        },
        '.program': {
            'drag': function ($state, $event) {
                var activeIndex = $state.get('activeIndex');
                var progWidth = $state.get('progWidth');
                var length = $state.get('programs').length;
                var max = -(progWidth * length - progWidth / 1.25);
                console.log(max);

                var rightLimit = -activeIndex * progWidth
                var leftLimit = rightLimit - progWidth

                var delta = $event.centerDelta;
                var currPos = $state.get('listPosition');
                var newPos = currPos - delta.x;

                if (newPos > 0) {
                    newPos = 0;
                }
                if (newPos < max) {
                    newPos = max;
                }

                if (leftLimit <= currPos && leftLimit > newPos) {
                    $state.set('activeIndex', $state.get('activeIndex') + 1, {
                        duration: 50
                    });
                }
                if (rightLimit > currPos && rightLimit < newPos) {
                    $state.set('activeIndex', $state.get('activeIndex') - 1, {
                        duration: 50
                    });
                }

                $state.set('listPosition', newPos);
            }
        },

        '#radioLogo,#slider,#btn2,#flipBack,#radioTitle,#liveFrontBtn': {
            'click': function ($state, $payload) {
                var opacity = $state.get('opacity');
                if (opacity === 0) {

                    $state.set('angle', $state.get('angle') + Math.PI, {
                        duration: 1000
                    }).thenSet('opacity', $state.get('opacity') === 0 ? 1 : 0, {
                        duration: 500
                    });
                } else {
                    $state.set('opacity', 0, {
                        duration: 700
                    }).thenSet('angle', $state.get('angle') + Math.PI, {
                        duration: 500
                    });

                }
            },
            'touchstart': function ($state, $payload) {
                var opacity = $state.get('opacity');
                if (opacity === 0) {

                    $state.set('angle', $state.get('angle') + Math.PI, {
                        duration: 1000
                    }).thenSet('opacity', $state.get('opacity') === 0 ? 1 : 0, {
                        duration: 500
                    });
                } else {
                    $state.set('opacity', 0, {
                        duration: 700
                    }).thenSet('angle', $state.get('angle') + Math.PI, {
                        duration: 500
                    });

                }
            }
        },
        //'#back': {
        //    'click': function ($state) {
        //        var listPosition = $state.get('listPosition');
        //        var progWidth = $state.get('progWidth');
        //        var progMargin = $state.get('progMargin');
        //
        //        var programsRotation = $state.get('programsRotation');
        //
        //        if (listPosition >= 0) {
        //            return;
        //        }
        //        $state.set('activeIndex', $state.get('activeIndex') - 1, {
        //            duration: 100
        //        });
        //        $state.set('listPosition', Math.floor($state.get('listPosition') + (progWidth + progMargin)), {
        //            duration: 1000,
        //            curve: 'easeOutBounce'
        //        })
        //    }
        //},
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
                $state.set('activeIndex', $state.get('activeIndex') + 1, {
                    duration: 100
                });

                $state.set('listPosition', Math.floor($state.get('listPosition') - (progWidth + progMargin)), {
                    duration: 500,
                    curve: 'easeOutBounce'
                });

            }
        }
    },
    states: {
        opacity: 0,
        angle: 0,
        //opacity: 1,
        //angle: Math.PI,

        liveNextProgramInfo: 0,
        programs: [
            '<iframe width="164" height="170" src="https://www.youtube.com/embed/vecHZ0gBPX4" frameborder="0" allowfullscreen></iframe>'
        ],
        /*=size*/
        rootWidth: 230,
        rootHeight: 300,
        radioFooterHeight: 80,
        programsHeaderHeight: 40,
        programsFooterHeight: 40,
        progWidth: 164,
        progHeight: 170,
        progMargin: 5,

        /*=shakow*/
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

        /**/
        activeIndex: 0,
        listPosition: 0,
        programsRotation: 0
    },
    tree: 'tree.html'
})
    .config({
        imports: {
            'svitlana:radio' : ['waves']
        }
    });

