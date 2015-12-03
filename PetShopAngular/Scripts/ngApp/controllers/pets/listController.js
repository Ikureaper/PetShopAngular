var PetShopAngular;
(function (PetShopAngular) {
    var Controllers;
    (function (Controllers) {
        var Pet = PetShopAngular.Models.Pet;
        var ListController = (function () {
            function ListController($location) {
                this.$location = $location;
                this.pets = [
                    new Pet(1, 'Fido', 'Dog', 40.0, 'http://dognamesearch.com/wp-content/uploads/2014/05/cool-dog.jpg'),
                    new Pet(2, 'Rover', 'Dog', 40.0, 'http://images.fineartamerica.com/images-medium/cool-dog-cliff-norton.jpg')
                ];
            }
            ListController.prototype.showDetails = function (id) {
                this.$location.path("/details/" + id);
            };
            return ListController;
        })();
        Controllers.ListController = ListController;
    })(Controllers = PetShopAngular.Controllers || (PetShopAngular.Controllers = {}));
})(PetShopAngular || (PetShopAngular = {}));
//# sourceMappingURL=listController.js.map