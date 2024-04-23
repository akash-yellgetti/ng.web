export const CHART_OPTIONS_ONE = {
    chart: {
      zoomType: 'xy',
      type: 'spline'
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
  