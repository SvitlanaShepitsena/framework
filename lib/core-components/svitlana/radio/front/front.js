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
        '#background': {
            'align': [0, 0],
            'origin': [0, 0],
            'mount-point': [0, 0],
            'size': [224, 220],
            'style': {
                'background': 'url("https://s3-us-west-2.amazonaws.com/svet.com/radio/radio-backdrop-4.jpg") no-repeat',
                'color': 'whitesmoke',
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
                return '<img width="192px" style="" src="https://s3-us-west-2.amazonaws.com/svet.com/radio/logo-50.png"/>';
            },
            'position-z': '2'
        },
        '#radioFooter': {
            'align': [0.5, 1],
            'origin': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': function (rootWidth, radioFooterHeight) {

                return [rootWidth, radioFooterHeight];
            },
            'style': function (accentColor50, whiteFrame1) {
                return {
                    'background-color': accentColor50,
                    'box-shadow': whiteFrame1,
                };
            },
            'position-z': '1'
        },
        '#radioPanel': {
            'align': [0.5, .9],
            "origin": [0.5, .9],
            'mount-point': [0.5, .9],
            'size': [220, 82],
            'position-z': '1',
            'opacity': 0.7,
            'style': function () {
                return {
                    'background-color': '#474341',
                };
            },
        },
        '#radioPanelText': {
            'align': [0.5, .92],
            "origin": [0.5, .92],
            'mount-point': [0.5, .92],
            'size': [192, 80],
            'content': function () {
                return '<di><h3 style="font-weight:400;margin-bottom:0px;margin-top:4px">Every Sunday at <span >11AM</span></h3> ' +
                    '<h4 style="line-height:18px;font-weight:400;margin-bottom:0px;margin-top:4px">' +
                    '<span style="display:block;margin-bottom:4px">LIVE Radio Talk Show </span> ' +
                    '<span style="display:block;">with ALEX ETMAN </span> ' +
                    '</h4> </div>';
            },
            'position-z': '4',
            'style': function (accentColor50) {
                return {
                    'color': accentColor50,
                    'text-align': 'left',
                    'font-size': '14px',
                };
            },
        },
        '#liveFrontBtn': {
            'align': [0.14, .9],
            'origin': [0.14, .9],
            'mount-point': [0.14, .9],
            'size': [42, 30],
            'style': function (accentColor, fsBody1) {
                return {
                    'font-size': fsBody1,
                    'color': accentColor,
                    'cursor': 'pointer',
                };
            },
            'content': function () {
                return `<a style="display:block">LIVE</a>`;
            },
            'position-z': '2',
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
                return `<a style="display:block">PROGRAMS 2015</a>`;
            },
            'position-z': '2',
        },

    }, events: {},
    states: {
        /*=size*/
        rootWidth: 230,
        rootHeight: 300,
        radioFooterHeight: 80,
        programsHeaderHeight: 40,
        programsFooterHeight: 40,
        progWidth: 184,
        progHeight: 200,
        progMargin: 5,
        /*=shadow*/
        whiteFrame1: "rgba(0, 0, 0, 0.298039) 0px 1px ",
        whiteFrame2: "rgba(0, 0, 0, 0.137255) 0px 2px 4px -1px, rgba(0, 0, 0, 0.0980392) 0px 4px 5px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 10px 0px",
        whiteFrame3: "rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px,rgba(0, 0, 0, 0.0980392) 0px 6px 10px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 18px 0px",

        /*=fonts*/
        fsCaption: '12px',
        fsBody1: '14px',
        fsBody2: '15px',
        fsSubhead: '16px',
        fsTitle: '20px',
        fsHeadline: '24px',
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

        /*=fonts color*/
        baseColor: '#000000',
        textColor: '#202020',
        secondaryTextColor: '#727272',
        hintTextColor: '#9A9A9A',
        dividersColor: '#DBDBDB',

    },
    tree: 'front.html'
})
    .config({
        imports: {}
    });

