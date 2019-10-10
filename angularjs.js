var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {

    $scope.listOfOptions = ['SC'];
    $scope.calculatedValue = "";

    $scope.selectedItemChanged = function() {
        calculatedValue = String($scope.selectedItem);
        document.getElementsByClassName('filters')[0].style.display = 'block';
    }

    $scope.generateReport = function() { switch (calculatedValue) {
            case 'SC':
                $http.get('http://127.0.0.1:5500/Mock.json')
                    .then(function(response) {
                        $scope.names = response.data.SC;
                        console.log($scope.names);
                    });
                document.getElementsByClassName('logs')[0].style.display = 'block';
                break;
            default:
                console.log('notfound');
        }
    }

});
var getPresentDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("toDate").setAttribute("value", today);
    document.getElementById("fromDate").setAttribute("value", today);
    return today;
}
var setMaxDate = function(id) {
    if (document.getElementById("toDate").value != "") {
        var x = document.getElementById("toDate").value;
        document.getElementById(id).setAttribute("max", x);
    } else {
        var today = getPresentDate();
        document.getElementById(id).setAttribute("max", today);
    }
}

function setMinDate() {
    var minDate = document.getElementById("fromDate").value;
    document.getElementById("toDate").setAttribute("min", minDate);
}