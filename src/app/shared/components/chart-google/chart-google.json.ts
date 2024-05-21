export const pieChartOptions = {
    title : 'Browser market shares at a specific website, 2014',
    type : 'PieChart',
    data : [
       ['Firefox', 45.0],
       ['IE', 26.8],
       ['Chrome', 12.8],
       ['Safari', 8.5],
       ['Opera', 6.2],
       ['Others', 0.7] 
    ],
    columnNames : ['Browser', 'Percentage'],
    options : {
        legend: { 
            position: 'bottom', 
          alignment: 'center' ,
          orientation: 'vertical',
      }
    },
    width : 350,
    height : 300,
}

export const ColumnChartDefault = {
    title: 'Browser market shares at a specific website, 2014',
    type: 'ColumnChart',
    data: [
        [
            "Apr-2023",
            1867177,
            2176540.59
        ],
        [
            "May-2023",
            534353,
            519737.3800000001
        ],
        [
            "Jun-2023",
            638134.1699999999,
            621378.7900000002
        ],
        [
            "Jul-2023",
            1150303,
            981139.86
        ],
        [
            "Aug-2023",
            176768,
            365352.16000000003
        ],
        [
            "Sep-2023",
            539918,
            545939.8500000001
        ],
        [
            "Oct-2023",
            1228420,
            1220565.5299999998
        ],
        [
            "Nov-2023",
            243202,
            251792.75
        ],
        [
            "Dec-2023",
            376833,
            358508.9000000001
        ],
        [
            "Jan-2024",
            379056.89,
            365214.67000000004
        ],
        [
            "Feb-2024",
            2217117.05,
            2255151.76
        ],
        [
            "Mar-2024",
            2284962.25,
            2284962.6399999997
        ]
    ],
    columnNames:  ['Year', 'Income','Expense'],
    chartOptions: { 
    },
    width: "1500",
    height: "400"
}