
const notifications =Array.from({ length :12 },(_,i) => ({
  id : `notif_${i + 1}`,
  weight: Math.floor(Math.random() *5)+1,
  result: Math.floor(Math.random() *5)+1,
  event: Math.floor(Math.random() *5)+1,
  timestamp: Date.now() -Math.floor(Math.random() * 10000)
}));
notifications.sort((a,b) => {
    if(b.weight!==a.weight) {
        return b.weight-a.weight;
    }
        if(b.result!==a.result) {
            return b.result-a.result;
        }
        if(b.event!==a.event) {
            return b.event-a.event;
        }
        return b.timestamp -a.timestamp;
});
 const top10 = notifications.slice(0,10);
 console.log("---STAGE 1 : TOP 10 NOTIFICATIONS ---");
 console.table(top10);