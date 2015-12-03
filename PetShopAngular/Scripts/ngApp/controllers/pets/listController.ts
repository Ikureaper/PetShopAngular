namespace PetShopAngular.Controllers {
    import Pet = PetShopAngular.Models.Pet;

    export class ListController {

        

        public pets: Pet[];

        private $location;

        constructor($location) {
            this.$location = $location;
            this.pets = [
                new Pet(1, 'Fido', 'Dog', 40.0, 'http://dognamesearch.com/wp-content/uploads/2014/05/cool-dog.jpg'),  
                new Pet(2, 'Rover', 'Dog', 40.0, 'http://images.fineartamerica.com/images-medium/cool-dog-cliff-norton.jpg')
                   
                ];
        }
        public showDetails(id: number) {
            this.$location.path(`/details/${id}`);
        }
    }
}