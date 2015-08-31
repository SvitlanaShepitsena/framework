FamousFramework.scene('svitlana:radio:back:programs:program', {
    behaviors: {
        '#program': {
            'align': [0.5, 0.05],
            'mount-point': [0.5, 0.05],
            'size': [158, 100],
            'content': '[[identity]]',
            style: {
                'border': '1px solid black'
            }
        },
        '#sponsorsCard': {
            'align': [0.5, .92],
            'mount-point': [0.5, .92],
            'size': [150, 86],
        },
        '#sponsorsBtn': {
            'align': [1, 0.7],
            'mount-point': [1, 0.7],
            'size': [24, 38],
            'opacity': '.6',
            'style': {
                'cursor': 'pointer'
            },
            'content': function () {
                return '<img src="https://s3-us-west-2.amazonaws.com/svet.com/radio/arrow-right.png" style="height:38px;width:22px;padding-top: 4px"/>';
            }
        },
        '#guestsTitle': {
            'align': [0, 0.05],
            'mount-point': [0, 0.05],
            'style': function (accentColor) {
                return {
                    'text-align': 'left',
                    'font-weight': '700',
                    'color': '#393939',
                }
            },
            'content': '<h4 class="fs-caption">PROGRAM GUESTS:</h4>'
        },
        '#programGuests': {
            'align': [0, 0.55],
            'mount-point': [0, 0.55],
            'size': [120, 34],
            'opacity': '[[identity]]',
            'style': {
                'text-align': 'left',
            },
            'content': function (guests, currentGuest) {
                var guest = guests[currentGuest];
                var html = "";

                html += `<div class="guestName">${guest['name']}</div>`;
                html += `<div class="guestTextContainer"><img class="guestAdIcon" src="https://s3-us-west-2.amazonaws.com/svet.com/ad/world.png"><a class='guestWebTitle' target="_blank" href="http://${guest['webUrl']}">${guest['webAnkor']}</a></div>`;
                html += `<div class="guestTextContainer"><img class="guestAdIcon" src="https://s3-us-west-2.amazonaws.com/svet.com/ad/phone-green.png"><div class="guestPhone">${guest['phone']}</div></div>`;

                return html;
            }
        }
    },
    events: {
        '$lifecycle': {
            'post-load': function ($state, $famousNode) {
                setInterval(()=> {

                    var max = $state.get('guests').length - 1;
                    var currGuest = $state.get('currentGuest');
                    if (currGuest >= max) {
                        currGuest = 0;
                    } else {
                        currGuest += 1;
                    }
                    $state.set('opacity', 0, {duration: 1000}).thenSet('currentGuest', currGuest).thenSet('opacity', 1, {duration: 1500});
                }, 15000);

            }
        },

        $public: {
            content: '[[setter]]',
            guests: '[[setter]]'
        },
        '#sponsorsBtn': {
            'click': function ($state) {
                var max = $state.get('guests').length - 1;
                var currGuest = $state.get('currentGuest');
                if (currGuest >= max) {
                    currGuest = 0;
                } else {
                    currGuest += 1;
                }
                $state.set('opacity', 0, {duration: 800}).thenSet('currentGuest', currGuest).thenSet('opacity', 1, {duration: 800});
            }
        }
    },
    states: states,
    tree: 'program.html'
})
    .config({
        includes: ['../../../radio.css', '../../../states.js'],
    });

