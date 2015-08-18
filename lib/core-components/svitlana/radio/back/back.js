FamousFramework.scene('svitlana:radio:back', {
    behaviors: {
        '#back': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'rotation-y': Math.PI,

            'style': {
                'background-color': 'deepskyblue'
            },



        },
        '#navigation': {
            'align': [0.1, 0.5],
            'origin': [0.1, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [20, 20],
            'style': {
                'text-align': 'center',
	            'background-color': 'brown'
            },
	        'position-z': '10',
        },
        '#programs': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'style': {
                'text-align': 'center'
            },
            'rotation-z': Math.PI / 2,
        },

    },
    events: {},
    states: {},
    //tree: 'back.html'
    tree:`<node id="back">

    <navigation id="navigation"></navigation>
    <programs id="programs"></programs>
</node>`
})
    .config({
        imports: {
            'svitlana:radio:back': [
                'programs',
                'navigation'

            ],
        }
    });

