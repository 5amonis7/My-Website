

const ctx = document.getElementById('myChart').getContext('2d');

const config = new Chart(ctx, {

		  type: 'pie',
		  data: {
		  	labels:['HTML', 'CSS', 'JS', 'Python'],
		  	datasets:[{
		  		label:'Experience',
		  		data:[
		  			75,
		  			65,
		  			60,
		  			35
		  		],
		  		backgroundColor:[
		  		'#00f2ff',
		  		'#03bafc',
		  		'#0095ff',
		  		'#030ba1'
		  		]

		  	}]
		  },
		  options: {
		  	plugins: {
		  		deferred:{
					xOffset: 150,
					yOffset: 150,
					delay: 3000
			},
		  		legend:{
		  			labels:{
		  				font:{
		  					size: 30
		  				}
		  			}
		  		}
		  	},
		  	scales: {
		  	},
		  	aspectRatio: 2,
		  	layout:{
		  		padding: 20,
		  	},	
		} 		 

	});
