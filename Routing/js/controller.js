var main = angular.module("app", []);

main.controller('MyController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.Message = 'Click Button';
    $scope.charts = [];

    var initializeData = function (index) {
        var limit = 20000;    //increase number of dataPoints by increasing this
        var y = 0;
        var dataSeries = { type: "line" };
        var dataPoints = [];
        for (var i = 0; i < limit; i += 1) {
            y += (Math.random() * 10 - 5);
            dataPoints.push({
                x: i - limit / 2,
                y: y
            });
        }
        dataSeries.dataPoints = dataPoints;
        return dataSeries;
    }
    _.each(_.range(20), function (i) {
        var dataSeries = initializeData(i);

        var chart = 
        new CanvasJS.Chart('chartContainer' + i, {
            zoomEnabled: true,
            zoomType: "xy",
            title: {
                text: "Enable Zooming on X & Y Axis"
            },
            legend: {
                horizontalAlign: "right",
                verticalAlign: "center"
            },
            axisY: {
                includeZero: false
            },
            data: [],  // random generator below
        });
        chart.ID = i;
        chart.options.data.push(dataSeries);
        $scope.charts.push(chart);
    });

    $timeout(function () {
        _.each($scope.charts, function (n) {
            n.render();
        });
    })
}]);
