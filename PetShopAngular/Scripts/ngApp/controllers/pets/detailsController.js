var PetShopAngular;
(function (PetShopAngular) {
    var Controllers;
    (function (Controllers) {
        var Pet = PetShopAngular.Models.Pet;
        var DetailsController = (function () {
            function DetailsController() {
                this.pet = new Pet(1, 'Fido', 'Dog', 40.0, 'http://dognamesearch.com/wp-content/uploads/2014/05/cool-dog.jpg');
            }
            return DetailsController;
        })();
        Controllers.DetailsController = DetailsController;
    })(Controllers = PetShopAngular.Controllers || (PetShopAngular.Controllers = {}));
})(PetShopAngular || (PetShopAngular = {}));
//# sourceMappingURL=detailsController.js.map