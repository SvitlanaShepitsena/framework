var radioStates = extend(constants, {
    angle: 0,
    animation: false,
    duration: 1000,
});
FamousFramework.scene('svitlana:radio', {
    /*behaviors tell the module how each element should be displayed*/
    behaviors: {
        '#root': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (rootWidth, rootHeight) {
                return [rootWidth, rootHeight];
            },
            'style': {
                /*Setting the perspective changes the apparent distance between the screen and 3D objects*/
                'perspective': '100px'
            }
        },
        // Initial state of Back side
        '#back': {
            scale: [0, 0]
        },
        /*http service to reference any url*/
        'famous:service:http': {
            'request': function () {
                return {
                    'url': constants.url
                };
            }
        }
    },
    events: {
        '$self': {
            'flip': function ($state, $timelines) {
                /*if animation runs, no other events are caught*/
                if ($state.get("animation")) {
                    return;
                }
                /*function available for timeline animation animation
                 * set animation to false*/
                function callback() {
                    $state.set("animation", false);
                };

                $state.set('animation', true);

                var angle = $state.get('angle');
                if (angle === 0) {
                    /*rotate by 180 degrees*/
                    $state.set('angle', Math.PI);
                    /*run timelines animation */
                    $timelines.get('flip-root-back').start({
                        duration: $state.get('duration')
                    }, callback);
                } else {
                    $state.set('angle', 0);
                    $timelines.get('flip-root-front').start({
                        duration: $state.get('duration')
                    }, callback);
                }
            }
        },
        /*Comment on production*/
        //'$lifecycle': {
        //    'post-load': function ($state, $timelines) {
        //        $timelines.get('flip-root-back').start({
        //            duration: 200
        //        });
        //    }
        //},
        'famous:service:http': {
            'response': function ($payload, $event, $dispatcher) {
                $event.stopPropagation();
                var response = $payload.response;
                try {
                    var data = response.data;

                    if (data.code && data.message) {
                        $dispatcher.emit("error", data.message);
                        return;
                    }
                    //send the response event with our parsed data
                    $dispatcher.broadcast("programs-loaded", data);
                }
                catch (ee) {
                    $dispatcher.emit("error", ee);
                }
            },

            'error': function ($payload, $dispatcher) {
                console.warn("Error: ", $payload);
                $dispatcher.emit("error", $payload);
            }
        }
    },
    /*State values are stored as properties in the component's states object*/
    /*Behaviors functions respond to their changes*/
    states: radioStates,
    /*set up an app structure in a tree*/
    tree: 'radio.html',
})
    .config({
        includes: ['radio.css', 'settings.js'],
        imports: {
            'svitlana:radio': [
                'back',
                'front'
            ],
            'famous.service': ['http'],
        }

    })
    .timelines({
        'flip-root-back': {
            /*all stages run sequentially*/
            '#back': {
                'scale': {
                    '49%': {value: [0, 0], curve: 'linear'},
                    '51%': {value: [1, 1], curve: 'linear'}
                }
            },
            '#root': {
                'rotation-y': {
                    '0%': {value: 0, curve: 'linear'},
                    '100%': {value: Math.PI, curve: 'linear'}
                }
            },
            '#front': {
                'scale': {
                    '49%': {value: [1, 1], curve: 'linear'},
                    '50%': {value: [0, 0], curve: 'linear'}
                }
            },
        },
        'flip-root-front': {
            '#front': {
                'scale': {
                    '49%': {value: [0, 0], curve: 'linear'},
                    '51%': {value: [1, 1], curve: 'linear'}
                }
            },
            '#root': {
                'rotation-y': {
                    '0%': {value: Math.PI, curve: 'linear'},
                    '100%': {value: 0, curve: 'linear'}
                }
            },
            '#back': {
                'scale': {
                    '49%': {value: [1, 1], curve: 'linear'},
                    '50%': {value: [0, 0], curve: 'linear'}
                }
            },
        }
    });

