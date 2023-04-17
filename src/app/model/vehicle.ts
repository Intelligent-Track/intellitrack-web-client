export class Vehicle {
    constructor(
        public id: number,
        public model: string,
        public plate: number,
        public type: string,
        public failureHistory: string,
        public mechanicHistory: string,
        public volumCapacity: number,
        public weightCapacity: number
        ){}
}
