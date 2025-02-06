//console.log('connected');

var quotes = ['“I never teach my pupils, I only attempt to provide the conditions in which they can learn.”',
    '“A reader lives a thousand lives before he dies. The man who never reads lives only one.”',
    '“Education is the most powerful weapon which you can use to change the world.”',
    '“Don’t let schooling interfere with your education.”',
    '“An investment in knowledge pays the best interest.”'
]
var author = ['Albert Einstein','George R.R. Martin','Nelson Mandela','Mark Twain','Benjamin Franklin']

var i = Math.floor(Math.random()*quotes.length)
//console.log(i);

document.getElementById('quote').innerHTML=quotes[i]+'<br>~ '+author[i];