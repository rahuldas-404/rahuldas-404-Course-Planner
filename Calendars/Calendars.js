(function(){
    var today = new Date();
    var month,day,year,firstDay;
    month = today.getMonth();
    day = today.getDate();
    year = today.getFullYear();
    
    firstDay = new Date(year,month,1);
    
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    
    function displayDate() {
        var holder = document.getElementById("dateHolder");
        holder.innerText = months[month] + ' ' + year;
    }
    
    function createDayHeaders() {
        var wrapper = document.getElementById("calWrapper");
        var row = document.createElement("tr");
        for(var i = 0; i<days.length; i++) {
            var el = document.createElement("th");
            el.setAttribute("class","dayHeader");
            el.innerText = days[i];
            row.appendChild(el);
        }
        wrapper.appendChild(row);
    }
    
    function createDayCells() {
        var dayOne = firstDay.getDay();
        var iDay = 0;
        
        var wrapper = document.getElementById("calWrapper");
        var lastDay = new Date(year,month+1,0).getDate();
        
        while(iDay < lastDay) {
            var row = document.createElement("tr");
            for(var i = 0; i<days.length; i++) {
                var el = document.createElement("td");

                if(dayOne === i || iDay > 0) {
                    if(day === iDay)
                        el.setAttribute("class", "dayCell today");
                    else
                        el.setAttribute("class", "dayCell");
                        
                    if(iDay < lastDay)
                        iDay++;
                    else
                        break;
                    el.innerText = iDay;
                }
                row.appendChild(el);
            }
            wrapper.appendChild(row);
        }
    }
    
    displayDate(today);
    createDayHeaders();
    createDayCells();
})();