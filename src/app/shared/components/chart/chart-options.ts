import * as Highcharts from 'highcharts';

export const pieChartOptions = {
  chart: {
      type: 'pie'
  },
  title: {
      text: 'Egg Yolk Composition'
  },
  tooltip: {
      valueSuffix: '%'
  },
  subtitle: {
      text:
      'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
  },
  plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
              distance: 20
          }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
              },
              filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
              }
          }]
      }
  },
  series: [
      {
          name: 'Percentage',
          colorByPoint: true,
          data: [
              {
                  name: 'Water',
                  y: 55.02
              },
              {
                  name: 'Fat',
                  sliced: true,
                  selected: true,
                  y: 26.71
              },
              {
                  name: 'Carbohydrates',
                  y: 1.09
              },
              {
                  name: 'Protein',
                  y: 15.5
              },
              {
                  name: 'Ash',
                  y: 1.68
              }
          ]
      }
  ]
};

export const lineChartOptions = {
  chart: {
      type: 'line'
  },
  
  plotOptions: {
      line: {
          // dataLabels: {
          //     enabled: true
          // },
          // enableMouseTracking: false
      }
  },
  series: [{
      name: 'Reggane',
      data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          22.0, 17.8]
  }, {
      name: 'Tallinn',
      data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
          2.0, -0.9]
  }]
};

export const stackedBarChartOptions = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Major trophies for some English teams',
      align: 'left'
  },
  
  
  legend: {
      align: 'left',
      x: 70,
      verticalAlign: 'top',
      y: 70,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.legend?.backgroundColor ?? 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          // dataLabels: {
          //     enabled: true
          // }
      }
  },
  series: [{
      name: 'BPL',
      data: [3, 5, 1, 13]
  }, {
      name: 'FA Cup',
      data: [14, 8, 8, 12]
  }, {
      name: 'CL',
      data: [0, 2, 6, 3]
  }, {
    name: 'SL',
    data: [3, 2, 4, 5]
}]
};


export const CHART_OPTIONS_ONE = {
    chart: {
      zoomType: 'xy',
      type: 'area'
    },
    xAxis: {
      //type: "datetime",
      type: 'linear',
      minorTicks: true,
      categories: false
    },
    yAxis: {
      title: {
        text: 'Line Chart'
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080'
        }
      ],
      min: 0
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: 0
        }
      }
    },
    series: [
      { name: 'Series1', data: [34, 34, 35] },
      { name: 'Series2', data: [24, 25, 26] },
      { name: 'Total', data: [40, 42, 38] }
    ],
    title: {
      text: 'Line Chart'
    },
    subtitle: {
      text: '202009 - 202011'
    },
    credits: false
  };
  
  export const CHART_OPTIONS_TWO = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      type: 'category',
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
        name: 'Test',
        data: [1, 2, 3]
      },
      {
        name: 'Foo',
        data: [9, 9, 9]
      },
      {
        name: 'Bar',
        data: [2, 6, 5]
      }
    ]
  };
  