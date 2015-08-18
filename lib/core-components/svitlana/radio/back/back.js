FamousFramework.scene('svitlana:radio:back', {
    behaviors: {
        '#back': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'rotation-y': Math.PI,

        },
        '#programs': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'style': {
                'background': 'green',
                'color': 'whitesmoke',
                'text-align': 'center'
            },
            'rotation-z': Math.PI / 2,
        },

    },
    events: {},
    states: {},
    tree: 'back.html'
})
    .config({
        imports: {
            'svitlana:radio:back': [
                'programs'

            ],
        }
    });

