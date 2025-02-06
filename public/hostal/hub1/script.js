const startDate = document.getElementById('date1');
const endDate = document.getElementById('date2');

startDate.addEventListener('change', (event) => {
    var d1 = event.target.value;
    var d2 = endDate.value;
    calculateDate(d1,d2)
});
endDate.addEventListener('change', (event) => {
    var d2 = event.target.value;
    var d1 = startDate.value;
    calculateDate(d1,d2)
});
function calculateDate(d1,d2) {
    try {
        console.log(d1);
        console.log(d2);
        
        var res =d2-d1
    } catch (e) {
        console.log(e);
    }finally{
        console.log(res);
    }
}