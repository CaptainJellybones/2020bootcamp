function isLeap(year) {
    (year % 4 == 0) ? fourYear = true : fourYear = false;
    (year % 100 == 0) ? hundredYear = true : hundredYear = false;
    (year % 400 == 0) ? fourhundredYear = true : fourhundredYear = false;

    if (fourYear == true) {

        if (hundredYear = false) {

            if (fourhundredYear = true) {

                return year = "Leap Year."
            } 
            else {
                return year = "Not leap year.";
            }
        } 
        else {
            return year = "Leap Year.";
        }
    } 
    else {
        return year = "Not leap year.";
    }
}

isLeap(1948);