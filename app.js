let daysItem = document.querySelector("#days")

let hoursItem = document.querySelector("#hours")

let minItem = document.querySelector("#min")

let secItem = document.querySelector("#sec")



let countDown = () => {
     let futureDate = new Date("1 Jan 2024");
     let currentDate = new Date();
     let myDate = futureDate - currentDate;
     // console.log(myDate);

     let days = Math.floor(myDate / 1000 / 60 / 60/ 24);
     // console.log(days)

     let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
     // console.log(hours)

     let min = Math.floor(myDate / 1000 / 60 ) % 60;
     // console.log(min)

     let sec = Math.floor(myDate / 1000  ) % 60;
     // console.log(sec)


     daysItem.innerHTML = days;
     hoursItem.innerHTML = hours;
     minItem.innerHTML = min;
     secItem.innerHTML = sec;



}

countDown()

setInterval(countDown, 1000)