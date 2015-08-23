FamousFramework.scene('svitlana:radio:back:programs:program', {
    behaviors: {
        '#program': {
            'align': [0.5, 0.4],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [140, 120],
            'content': '[[identity]]',
            style: {
                'background-color': 'green',
                'border': '1px solid black',
                'color': '#40b2e8',
                'font-family': 'Lato'
            },
            'class': 'sv-iframe-responsive-wrap',
        }
    },
    events: {
        $public: {
            content: '[[setter]]'
        },
        '$self': {
            'click': function ($index, $repeatPayload) {
                console.log($index);
                console.log($repeatPayload);
            }
        },
    },
    states: {
        content: ''
    },
    tree: `<node id="program">
     </node>`
})
    .config({});

