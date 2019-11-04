console.log('connected')
function OrderFormController($scope) {

    // Define the model properties. The view will loop
    // through the services array and genreate a li
    // element for every one of its items.

    $scope.services = [
        {
            name: 'Cincinnati Zoo',
            price: 17,
            active: true
        }, {
            name: 'Newport Aquarium',
            price: 25.99,
            active: false
        }, {
            name: 'Cincinnati Art Museum',
            price: 0,
            active: false
        }, {
            name: 'Cincinnati Contemporary Arts Center',
            price: 0,
            active: false
        },
        {
            name: 'Union Terminal',
            price: 14.5,
            active: false
        },
        {
            name: 'Underground Railroad',
            price: 14.5,
            active: false
        },
        {
            name: "King's Island",
            price: 51.99,
            active: false
        },
        {
            name: "Coney Island",
            price: 19.95,
            active: false
        }
    ];

    $scope.toggleActive = function (s) {
        s.active = !s.active;
    };

    // Helper method for calculating the total price

    $scope.total = function () {

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.services, function (s) {
            if (s.active) {
                total += s.price;
            }
        });

        return total;
    };
}
