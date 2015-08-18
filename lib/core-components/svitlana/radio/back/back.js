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
        '#backbtn': {
            'align': [0.1, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/backbtn.png" style="width:30px">',

            'position-z': '5'
        },
        '#forwbtn': {
            'align': [0.9, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [30, 30],
            'content': '<img src="{{BASE_URL}}img/forwbtn.png" style="width:30px">',

            'position-z': '5'
        },
    },
    events: {
        $self:  {
            'scrollback':function($dispatcher){
                console.log('main');
                $dispatcher.broadcast('scrollback');
            },
            'scrollforw':function($dispatcher){
                console.log('main');
                $dispatcher.broadcast('scrollforw');
            }

        },
        '#backbtn': {
            'click': function ($event,$dispatcher) {
                console.log('btn');
                $dispatcher.emit('scrollback');
                $event.stopPropagation();
            }
        },
        '#forwbtn': {
            'click': function ($event,$dispatcher) {
                $dispatcher.emit('scrollforw');
                $event.stopPropagation();
                $event.stopPropagation();
            }
        }
    },
    states: {},
    //tree: 'back.html'
    tree: `<node id="back">

<node id="backbtn">
</node>
<node id="forwbtn"></node>
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

