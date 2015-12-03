namespace PetShopAngular {
    angular.module("PetShopAngular", ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngViews/pets/list.html',
                    controller: PetShopAngular.Controllers.ListController,
                    controllerAs: 'lc'
                })
                .when('/details/:id', {
                    templateUrl: '/ngViews/pets/details.html',
                    controller: PetShopAngular.Controllers.DetailsController,
                    controllerAs: 'dc'
                });
        });
}