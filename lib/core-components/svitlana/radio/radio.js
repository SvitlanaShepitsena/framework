FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#root': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'style': {
                /*3d effect property*/
                'perspective': '1000px',
                'cursor': 'pointer'
            }
        },
        // Initial state of Back side
        '#back': {
            /*scale back side to hide it on initial position*/
            scale: [0, 0]
        },
        // By using famous service inside behavior we provide settings for http request
        // For example, which firebase url
        'famous:service:http': {
            'request': function (url) {
                return {
                    'url': url
                };
            }
        }
    },
    events: {
        'famous:service:http': {

            'response': function ($payload, $event, $dispatcher) {
                // Preventing event bubling
                $event.stopPropagation();

                var response = $payload.response;

                try {
                    var data = response.data;

                    if (data.cod && data.message) {
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
        },
        '$self': {
            'flip': function ($state, $timelines, $event) {
                // check animation status. In case animation is in progress
                // do not run another one.
                if ($state.get("animation")) {
                    return;
                }
                $state.set('animation', true);
                var angle = $state.get('angle');
                if (angle === 0) {
                    $state.set('angle', Math.PI);
                    $timelines.get('flip-root-back').start({
                        duration: $state.get('duration')
                    }, callback);
                } else {
                    $state.set('angle', 0);
                    $timelines.get('flip-root-front').start({
                        duration: $state.get('duration')
                    }, callback);
                }

                function callback() {
                    $state.set("animation", false);
                };
            }
        },
        /*        /!*Comment on production*!/
         //'$lifecycle': {
         //    'post-load': function ($state, $timelines) {
         //        $timelines.get('flip-root-back').start({
         //            duration: 200
         //        });
         //    }
         //},*/
    },
    // Initialize states parameters and set their initial value.
    states: states,
    tree: 'radio.html'

}).config({
    includes: ['radio.css', 'constants.js'],
    imports: {
        'svitlana:radio': [
            'back',
            'front'
        ],
    }
}).timelines({
    'flip-root-back': {
        '#back': {
            'scale': {
                '0%': {value: [0, 0], curve: 'linear'},
                '1%': {value: [1, 1], curve: 'linear'}
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
                '99%': {value: [1, 1], curve: 'linear'},
                '100%': {value: [0, 0], curve: 'linear'}
            }
        },
    },
    'flip-root-front': {
        '#front': {
            'scale': {
                '0%': {value: [0, 0], curve: 'linear'},
                '1%': {value: [1, 1], curve: 'linear'}
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
                '99%': {value: [1, 1], curve: 'linear'},
                '100%': {value: [0, 0], curve: 'linear'}
            }
        },
    }
});

