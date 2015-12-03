namespace PetShopAngular.Models {

    export class Pet {

        constructor(public id: number,
            public name: string,
            public species: string,
            public weight: number,
            public imageUrl: string) {
        }
    }
}