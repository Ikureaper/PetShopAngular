var PetShopAngular;
(function (PetShopAngular) {
    var Models;
    (function (Models) {
        var Pet = (function () {
            function Pet(id, name, species, weight, imageUrl) {
                this.id = id;
                this.name = name;
                this.species = species;
                this.weight = weight;
                this.imageUrl = imageUrl;
            }
            return Pet;
        })();
        Models.Pet = Pet;
    })(Models = PetShopAngular.Models || (PetShopAngular.Models = {}));
})(PetShopAngular || (PetShopAngular = {}));
//# sourceMappingURL=pet.js.map