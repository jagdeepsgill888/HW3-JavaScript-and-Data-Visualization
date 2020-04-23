 new Chart(document.getElementById('horizontalBar'), {
    type: 'horizontalBar',
    data:  {
    	labels: ['Canada', 'Finnland', 'Norway', 'Sweden', 'USA'],
    	datasets: [{
    		label: 'Medals',
    		backgroundColor: ['#4e79a7', '#8e5ea2', '#3cba9f', '#ffae34', '#c45850'],
    		data: [625,434,457,433,653]

    	}]
    },

    options: {
    	legend: {
    		display: false
    	},

    	title: {
    		display: true,
    		text: 'Number of overall medals won'
    	}
    }
});

//chart 2//
new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['1924', '1936', '1952', '1964', '1972', '1984', '1994', '2006', '2014'],
    datasets: [

      {
        label: "Male",
        data: [9, 13, 17, 5, 0, 4, 30, 21, 46],
        fill: false,
        borderColor: '#4e79a7',
      },

      {
        label: 'Female',
        data: [0, 0, 0, 2, 1, 0, 10, 47, 44],
        fill: false,
        borderColor: '#e15759',
      },


    ]
  },
    
  options: {
      title: {
        display: true,
        text: 'Number of Wins'
      }
    }

});



// chart 3//

var updatingChart = new Chart(document.getElementById('updatingDataChart'), {
    type: 'bar',
    data:  {
      labels: ['Skating', 'Skiing'],
      datasets: [{
        label: 'Medals',
        backgroundColor: ['#8cc2ca', '#55ad89'],
        data: [2, 2]

      }]
    },

    options: {
      legend: {
        display: false
      },

      title: {
        display: true,
        text: 'Number of Medals Won by Female Athletes in 1988'
      }
    }
});


function addData(chart, label, data, backgroundColor) {
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(data);
  chart.data.datasets[0].backgroundColor.push(backgroundColor);
  chart.update();
}



function updateAllData(chart, data) {
  chart.data.datasets[0].data = data;
  chart.update();

}

function updateConfig(chart, title) {
  chart.options.title.text = title;
  chart.update();
}

setTimeout(function () {
  updateConfig(updatingChart, 'Number of Medals Won by Female Athletes in 2014');
   addData(updatingChart, 'Bobsleigh', 0, '#6388b4');
 addData(updatingChart, 'Curling', 0, '#ffae34');
 addData(updatingChart, 'Ice Hockey', 0, '#FF5733');
   updateAllData(updatingChart, [9,7,3,5,21]); 
 }, 3000);


// Chart 4
new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['Male', 'Female'],
      datasets: [
           {
             data: [68, 32],
             backgroundColor: ['#ea3e1b', '#f09281']
           }

      ]
    },

     options: {
      title: {
        display: true,
        text: 'Overall Medal Distribution in Percentage'
      }
    }        

});








