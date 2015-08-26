FamousFramework.scene('svitlana:radio:back:programs:program', {
    behaviors: {
        '#program': {
            'align': [0.5, .5],
            'mount-point': [0.5, .5],
            'size': [154, 110],
            'content': '[[identity]]',
            style: {
                'border': '1px solid black',
            },
            'class': 'sv-iframe-responsive-wrap',
        },
        '#sponsorsCard': {
            'align': [0.42, .9],
            'mount-point': [0.42, .9],
            'size': [155, 86],
            'style': function (whiteFrame1) {
                return {
                    'background-color': '#FAFAFA',
                    'box-shadow': whiteFrame1,
                };
            },
        },
        '#sponsorsBtn': {
            'align': [1, 0.7],
            'mount-point': [1, 0.7],
            'size': [24, 38],
            'opacity': '.6',
            'content': function () {
                return '<img src="https://s3-us-west-2.amazonaws.com/svet.com/radio/arrow-right.png" style="height:38px;width:22px;padding-top: 4px"/>';
            }
        },
        '#nextBtn': {
            'align': [1, 0.5],
            'mount-point': [1, 0.5],
            'size': [24, 24],
            'position-z': '4',
            'content': function () {
                return '<img src="https://s3-us-west-2.amazonaws.com/svet.com/ad/get-info.png" style="width:24px;height:24px;padding-top: 4px"/>';
            }
        },
        '#guestsTitle': {
            'align': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [140, 22],
            'style': function (accentColor) {
                return {
                    'text-align': 'left',
                    'color': '#393939',
                }
            },
            'content': '<h4 class="fs-body-1">PROGRAM GUESTS:</h4>'
        },
        '#programGuests': {
            'align': [0.2, 0.5],
            'mount-point': [0.2, 0.5],
            'size': [120, 34],
            'opacity': '[[identity]]',
            'style': {
                'text-align': 'left',
            },
            'content': function (guests, currentGuest) {
                var guest = guests[currentGuest];
                var html = "";

                html += `<div>${guest['name']}</div>`;
                html += `<div>${guest['phone']}</div>`;
                html += `<a href="${guest['webUrl']}">${guest['webAnkor']}</a>`;

                return html;
            }
        }
    },
    events: {
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
    states: {
        /*=colors*/
        //primaryColor: '#3e2723',
        primaryColor: '#24231D',
        primaryColor50: '#efebe9',
        primaryColor100: '#d7ccc8',
        primaryColor200: '#bcaaa4',
        primaryColor800: '4E342E',
        primaryColorLight: '#5d4037',
        accentColor: '#e64a19',
        accentColor50: '#FFF8E1',
        accentColor100: '#FFECB3',
        accentColor200: '#FFE082',
        accentColor400: '#ff7043',
        accentColorLight: '#FFC400',
        whiteFrame1: "rgba(0, 0, 0, 0.298039) 0px 1px ",
        whiteFrame2: "rgba(0, 0, 0, 0.137255) 0px 2px 4px -1px, rgba(0, 0, 0, 0.0980392) 0px 4px 5px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 10px 0px",
        whiteFrame3: "rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px,rgba(0, 0, 0, 0.0980392) 0px 6px 10px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 18px 0px",
        currentGuest: 0,
        opacity: 1,
        content: '',
        index: 0,
        guests: guests
    },
    tree: 'program.html'
})
    .config({
        includes: ['guests.js'],
    });

