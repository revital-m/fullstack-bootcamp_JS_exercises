function currentDate() {
    
    let day = ['Sunday', 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
    let month = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
    let date = new Date();

    return  `Today is ${day[date.getDay()]} the ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`;
};

let today = currentDate();
console.log(today);