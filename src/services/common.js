class Common {
    getWeekDayNameByDate(date) {
        const DATE = new Date(date);
        return this.getWeekDayName(DATE.getDay());
    }

    getWeekDayName(day: number): string {
        switch (day) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
                break;
            default:
                return 'All week';
        }
    }
}

const common = new Common();

export default common;
