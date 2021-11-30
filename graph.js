const ctx = document.getElementById('myChart').getContext('2d');
const config = new Chart(ctx, {

		  type: 'bar',
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
		  		'#0095ff',
		  		'#0074b8',
		  		'#030ba1'
		  		],
		  		borderRadius: 15,

		  	}]
		  },
		  options: {
		  	barThickness: 100,
		  	plugins: {
		  		legend:{
		  			display: false,
		  		},
		  		title: {
		  			display: true,
		  			text: 'Experience',
		  			font:{
		  				size: 16,
		  			}
		  		}
		  	},
		  	scales: {
		  		y:{
		  			suggestedMin: 0,
		  			suggestedMax: 100,
		  			ticks:{
		  				font:{
		  					size: 16,
		  				}
		  			}
		  		},
		  		x:{
		  			ticks:{

		  				font: {
		  					size: 16,
		  				}
		  			}
		  		}
		  	},
		  	aspectRatio: 2,
		  	layout:{
		  		padding: 20,
		  	},	
		} 		 	 

	});
