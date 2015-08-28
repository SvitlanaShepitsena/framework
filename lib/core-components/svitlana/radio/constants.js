var states = {
    /*radio.js*/
    angle: 0,
    animation: false,
    duration: 1000,
    url: 'https://svet.firebaseio.com/radioWidget.json',

    //*=webGl/
    rotationBox:0,
	activeProgram:0,
	programIndex:0,


    /*program.js*/
    count: 0,
    currentGuest: 0,
    opacity: 1,
    index: 0,
    programWidth: 170,
    pos: -170,
    radioPrograms: [],
    /*=program.js END*/

    /*=size*/
    liveBtnOpacity: 1,
    rootWidth: 230,
    rootHeight: 300,
    radioFooterHeight: 80,
    programsHeaderHeight: 40,
    programsFooterHeight: 40,
    progWidth: 184,
    progHeight: 200,
    progMargin: 5,

    /*=fonts*/
    fsCaption: '12px',
    fsBody1: '14px',
    fsBody2: '15px',
    fsSubhead: '16px',
    fsTitle: '20px',
    fsHeadline: '24px',

    /*=colors*/
    //primaryColor: '#3e2723',
    textWhite: 'floralwhite',
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

    /*=shadow*/
    whiteFrame1: "rgba(0, 0, 0, 0.298039) 0px 1px ",
    whiteFrame2: "rgba(0, 0, 0, 0.137255) 0px 2px 4px -1px, rgba(0, 0, 0, 0.0980392) 0px 4px 5px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 10px 0px",
    whiteFrame3: "rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px,rgba(0, 0, 0, 0.0980392) 0px 6px 10px 0px, rgba(0, 0, 0, 0.0823529) 0px 1px 18px 0px",

    /*=html*/


    radioPanelContent: `<div><h3 class="h3Panel">Every Sunday at <span>11AM</span></h3>
                <h4 class="h4Panel">
                    <div class="mb4">LIVE Radio Talk Show </div>
                    <div class="mb4">with
                        <span class="fs-title">ALEX ETMAN </span>
                    </div>
                </h4>
            </div>`

}