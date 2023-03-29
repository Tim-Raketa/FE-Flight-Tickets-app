export class Flight {
    id: number = 0;
    begin: Date = new Date();
    end: Date = new Date();
    startingPlace: string = '';
    destination: string = '';
    maxSeats: number = 0;
    freeSeats: number = 0;
    seatPrice: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.begin = obj.begin;
            this.end = obj.end;
            this.startingPlace = obj.startingPlace;
            this.destination = obj.destination;
            this.maxSeats = obj.maxSeats;
            this.freeSeats = obj.freeSeats;
            this.seatPrice = obj.seatPrice;        
        }
    }

}
