App.directive('topBarr', function () {
    return {
        restrict: 'E',
        replace: 'true',
        controller: function ($scope) {
        },
        templateUrl: 'shared/directives/top-bar/top-bar.view.html'
    };
});