function tickets(ticketInfo, sorter) {
   let schedule = [];
   class Tickets {
      constructor(destination, price, status) {
         this.destination = destination;
         this.price = price;
         this.status = status;
      }
   }
   ticketInfo.forEach(city => {
      let [destination, price, status] = city.split("|");
      schedule.push(new Tickets(destination, price, status))
   });

   if (sorter === "price") {
      schedule.sort((a,b) => a.price(b.price));
   } else if (sorter === "destination") {
      schedule.sort((a,b) => a.destination.localeCompare(b.destination));
   } else if (sorter === "status") {
      schedule.sort((a,b) => a.status.localeCompare(b.status));
   }
   
   console.log(schedule)
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
"destination");