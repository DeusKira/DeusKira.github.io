var job = ["Software Developer","Astronaut","Musician","Lawyer"];
var city = ["Dallas","Los Angeles","Austin","Miami"];
var wife = ["Athena","Aphrodite","Penelope","Calliope"];
var numKids = ["2","0","3","5"];

var xx = Math.floor(Math.random() * 4 )

function fortune(job,city,wife,numKids){
  document.write("You will be a " + job + " in " + city + ", and married to " + wife + " with " + numKids + " kids,");
}

fortune (job[xx],city[xx],wife[xx],numKids[xx])