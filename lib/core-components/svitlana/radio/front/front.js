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
	    '.box': {
		    'size': [60, 60, 60],
		    'align': [0.2, 0.82, 0.2],
		    'origin': [0.5, 0.5, 0.5],
		    'mount-point': [0.5, 0.5, 0.5],
		    //'rotation-y': Math.PI/3,
		    //'scale': function (activeProgram, programIndex, scale) {
		    //    return activeProgram === programIndex ? [scale, scale, scale] : [0, 0, 0];
		    //}
	    },

	    '#liveFrontBtn': {
		    'origin': [0.5, 0.5, 0.5],
		    'align': [0.5, 0.5, 0.5],
		    'mount-point': [0.5, 0.5, 0.5],
		    //'rotation-y': -Math.PI/3,
		    'style': function (accentColor, fsBody1) {
			    return {
				    'font-size': fsBody1,
				    'color': accentColor,
				    'cursor': 'pointer',
			    };
		    },
		    //'opacity': '[[identity|liveBtnOpacity]]',
		    'content': function () {
			    return `<div>LIVE</div>`;
		    },
		    'position': [10,10,500],
	    },
	    '.sphere1': {

		    'rotation-z': function (rotationLive) {
			    return rotationLive;
		    },

		    'size': [50, 50, 50],
		    'origin': [0.5, 0.5, 0.5],
		    'align': [0.5, 0.5, 0.5],
		    'mount-point': [0.5, 0.5, 0.5],
	    },
	    '.sphere2': {
		    'size': [50, 50, 50],
		    'position': [0, 0, 40],
		    'align': [0.5, 0.5, 0.5],
		    'mount-point': [0.5, 0.5, 0.5],
		    'light': {
			    'type': 'point',
			    'color': 'red'
		    },
	    },
	    '.sphere3': {
		    'size': [50, 50, 50],
		    'align': [0.5, 0.5, 0.5],
		    'mount-point': [0.5, 0.5, 0.5],
		    'light': {
			    'type': 'point',
			    'color': 'white'
		    },
	    },
	    '.light2': {
		    'size': [50, 50, 50],
		    'position': [40, 20, 40],
		    'align': [0.5, 0.5, 0.5],
		    'mount-point': [0.5, 0.5, 0.5],
		    'light': {
			    'type': 'point',
			    'color': '#FFECB3'
		    }
	    },
        '#background': {
            'size': [224, 220],
            'opacity': '.96',
            'style': {
                'background': 'url("https://s3-us-west-2.amazonaws.com/svet.com/radio/radio-backdrop-4.jpg") no-repeat',
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
                return '<img width="192px" src="https://s3-us-west-2.amazonaws.com/svet.com/radio/logo-50.png"/>';
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
            'style': function (primaryColor) {
                return {
                    'background-color': primaryColor,
                };
            },
        },
        '#radioPanelText': {
            'align': [0.5, .57],
            "origin": [0.5, .57],
            'mount-point': [0.5, .57],
            'size': [192, 80],
            'content': '[[identity|radioPanelContent]]',
            'position-z': '3',
            'style': function (textWhite) {
                return {
                    'color': textWhite,
                    'text-align': 'left',
                    'font-size': '14px',
                };
            },
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
                return `<div>PROGRAMS 2015</div>`;
            },
            'position-z': '2',
        },
    },
    events: {
        '$lifecycle': {
            'post-load': function ($state, $famousNode) {
                var lvBtnOp, prevTime = 0;
                var id = $famousNode.addComponent({
                    onUpdate: function (time) {
                        lvBtnOp = $state.get('liveBtnOpacity');

	                    $state.set('rotationLive', time / 1000);
                        if (time - prevTime > 800) {
                            prevTime = time;
                            $state.set('liveBtnOpacity', lvBtnOp === 1 ? 0 : 1, {duration: 500});
                        }
                        $famousNode.requestUpdateOnNextTick(id);
                    }
                });



	            $famousNode.requestUpdateOnNextTick(id);
                //start the loop
                //$famousNode.requestUpdateOnNextTick(id);
            }
        },
        '#liveFrontBtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('flip');
            }
        },
        '#programsBtn': {
            'click': function ($event, $dispatcher) {
                $dispatcher.emit('flip');
            }
        },
    },
    states: states,
    tree: 'front.html'
})
    .config({
        includes: ['../radio.css', '../constants.js','my-famous.js'],
    });

