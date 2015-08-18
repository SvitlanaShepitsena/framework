FamousFramework.scene('svitlana:radio:back:programs', {
	behaviors: {
		'$self': {
		},
		'scroll-view' : {
			'item-height' : 100,
			'scroll-view-size' : [100, 700],
			'scroll-view-position' : [50, 0],


			style:{
			}
		},
		'.scroll-view-item' : {
			style: {
				'background-color' : 'white',
				'border' : '1px solid black',
				'color' : '#40b2e8',
				'font-family' : 'Lato',
			},
			'size-absolute-x': 100,
			'size-absolute-y': 100,
			'rotation-z': -Math.PI/2,
			'$repeat' : function(count) {
				var result = [];
				for(var i =0; i < count; i++) {
					result.push({
						content: `Item ${ i + 1 }`
					});
				}
				return result;
			}
		}
	},
	events: {
		'$public' : {
			count: '[[setter]]'
		},
		'node' : {
			'click' : function($index) {
				console.log('Click on Item ', $index);
			}
		}
	},
	states: {
		count: 10
	},
	tree: `
        <scroll-view class="sv-no-scroll">
            <node class="scroll-view-item"></node>
        </scroll-view>
    `
})
	.config({
		includes: ['../../radioData.js', '../../radio.css'],
		imports: {
			'famous:layouts' : ['scroll-view']
		}
	});
