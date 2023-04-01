export class newTicketDTO {
    flightId: number = 0;
    numberOfPeople: number = 0;
    ticketId:number=0;
    startDate:Date=new Date();
    startingLocation:string=""; 
    destination:string="";      
    
    public constructor(obj?: any) {
        if (obj) {
            this.flightId = obj.flightId;
            this.numberOfPeople = obj.numberOfPeople;
            this.ticketId = obj.ticketId;
            this.startDate = obj.startDate;
            this.startingLocation = obj.startingLocation;
            this.destination = obj.destination;
        }
    }
    
}