var currentDateTime = newDate()
var year = currentDateTime.getFullYear()
var month = (currentDateTime.getMonth() + 1) 
var date = (currentDateTime.getDate() + 1)
var hour = (currentDateTime.getHours() + 1)

if (date < 10) {
    date = "0" + date
}

if (month < 10) {
    month = "0" + month
}

var dateTomorrow = year + "-" + month + "-" + date;
var dateElem = document.querySelector("#date")
var timeElem = document.querySelector("#time")

dateElem.setAttribute ("date", time)

starttimeElem.onchange = function() {
    endtimeElem.setAttribute ("min", this.value)
}