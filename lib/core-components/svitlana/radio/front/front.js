FamousFramework.scene('svitlana:radio:front', {
    behaviors: {
        '#front': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (rootWidth, rootHeight) {
                return [rootWidth, rootHeight];
            },
            'style': function (accentColor50, whiteFrame1) {
                return {
                    'background-color': accentColor50,
                    'box-shadow': whiteFrame1,
                };
            },
            'position-z': '1'
        },
        '#background': {
            'align': [0, 0],
            'origin': [0, 0],
            'mount-point': [0, 0],
            'size': [224, 220],
            'style': {
                'background': 'url("https://s3-us-west-2.amazonaws.com/svet.com/radio/radio-backdrop-4.jpg") no-repeat',
                'color': 'whitesmoke',
                'opacity': '.96',
                'text-align': 'center'
            },
            'position-z': '1'
        },
        '#radioLogo': {
            'align': [0.5, 0.06],
            'mount-point': [0.5, 0.06],
            'origin': [0.5, 0.06],
            'size': [190, 62],
            'content': function () {
                return '<img width="192px" style="" src="https://s3-us-west-2.amazonaws.com/svet.com/radio/logo-50.png"/>';
            },
            'position-z': '2'
        },
        '#radioPanel': {
            'align': [0.5, .57],
            "origin": [0.5, .57],
            'mount-point': [0.5, .57],
            'size': [220, 82],
            'position-z': '2',
            'opacity': 0.6,
            'style': function () {
                return {
                    'background-color': '#24231D',
                };
            },
        },
        '#radioPanelText': {
            'align': [0.5, .57],
            "origin": [0.5, .57],
            'mount-point': [0.5, .57],
            'size': [192, 80],
            'content': function () {
                return '<di><h3 style="font-weight:400;margin-bottom:0px;margin-top:4px">Every Sunday at <span >11AM</span></h3> ' +
                    '<h4 style="line-height:18px;font-weight:400;margin-bottom:0px;margin-top:4px">' +
                    '<span style="display:block;margin-bottom:4px">LIVE Radio Talk Show </span> ' +
                    '<span style="display:block;margin-bottom:4px">with ' +
                    '<span style="font-size:20px">ALEX ETMAN </span> </span> ' +
                    '</h4> </div>';
            },
            'position-z': '3',
            'style': function (accentColor50) {
                return {
                    'color': 'floralwhite',
                    'text-align': 'left',
                    'font-size': '14px',
                };
            },
        },
        '#liveFrontBtn': {
            'align': [0.14, .9],
            'origin': [0.14, .9],
            'mount-point': [0.14, .9],
            'size': [42, 30],
            'style': function (accentColor, fsBody1) {
                return {
                    'font-size': fsBody1,
                    'color': accentColor,
                    'cursor': 'pointer',
                };
            },
            'opacity': '[[identity|liveBtnOpacity]]',
            'content': function () {
                return `<a style="display:block">LIVE</a>`;
            },
            'position-z': '2',
        },
        '#programsBtn': {
            'align': [0.9, .9],
            'origin': [0.9, .9],
            'mount-point': [0.9, .9],
            'size': [130, 30],
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
            'position-z': '2',
        },
    }, events: {
        '$lifecycle': {
            'post-load': function ($state, $famousNode) {
                var lvBtnOp, prevTime = 0;
                var id = $famousNode.addComponent({
                    onUpdate: function (time) {
                        lvBtnOp = $state.get('liveBtnOpacity');
                        if (time - prevTime > 800) {
                            prevTime = time;
                            $state.set('liveBtnOpacity', lvBtnOp === 1 ? 0 : 1, {duration: 500});
                        }
                        $famousNode.requestUpdateOnNextTick(id);
                    }
                });
                //start the loop
                //$famousNode.requestUpdateOnNextTick(id);
            }
        },
        '#programsBtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('flip');
            }
        },
        '#liveFrontBtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('flip');
            }
        }
    },
    states: states,
    tree: 'front.html'
})
    .config({
        imports: {}
    });

