export class DateTimeService{

    private dateTime = new Date();

    getCurrentDateTime = () => {
        return this.dateTime.toISOString();
    }



}