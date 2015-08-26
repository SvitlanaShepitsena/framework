FamousFramework.scene('svitlana:radio', {
    behaviors: {

        '#root': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'style': {
                'perspective': '100px',
                'cursor': 'pointer'
            }
        },
        // Initial state of Back side
        '#back': {
            scale: [0, 0]
        },
        'firebaseServ': {
            url: 'https://svet.firebaseio.com/radioWidget'
        },
        'famous:service:http': {

            'request': function (url) {
                var parameters = {};
                var url;

                return {
                    'url': url,
                    'parameters': parameters
                };
            }
        }
    },
    events: {
        '$self': {
            'flip': function ($state, $timelines, $event) {
                if ($state.get("animation")) {
                    return;
                }
                function callback() {
                    $state.set("animation", false);
                };
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
            }
        },
        /*Comment on production*/
        '$lifecycle': {
            'post-load': function ($state, $timelines) {
                $timelines.get('flip-root-back').start({
                    duration: 200
                });
            }
        },
        'famous:service:http': {

            'response': function ($payload, $event, $dispatcher) {

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
        '#root': {},
    },
    states: {
        angle: 0,
        duration: 1000,
        animation: false,
        url: 'https://svet.firebaseio.com/radioWidget.json'
    },
    tree: 'tree.html'
}).config({
    imports: {
        'svitlana:radio': [
            'back',
            'front',
            'firebase-serv'
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


