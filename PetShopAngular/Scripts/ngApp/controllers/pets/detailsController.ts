namespace PetShopAngular.Controllers {

    import Pet = PetShopAngular.Models.Pet;

    export class DetailsController {
        
        public pet: Pet;

        constructor() {
            this.pet = new Pet(1, 'Fido', 'Dog', 40.0, 'http://dognamesearch.com/wp-content/uploads/2014/05/cool-dog.jpg');
        }
    }
}