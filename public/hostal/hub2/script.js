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
    var dd1 =new Date(d1).getTime()
    var dd2 =new Date(d2).getTime()
    try {
        console.log(dd1);
        console.log(dd2);
        if ((d1!='')&&(d2!='')) {
        var timeDifference = dd2 - dd1
        var diff = timeDifference / (1000 * 3600 * 24);
        }else{
            return
        }
    } catch (e) {
        console.log(e);
    }finally{
        if (diff!=null) {
            document.getElementById('dur').value=diff+' Days'
            console.log(diff);
        }
    }
}