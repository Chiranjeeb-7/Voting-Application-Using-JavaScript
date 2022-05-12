 let Congress = document.getElementById('votecongress');
 let BJP = document.getElementById('votebjp');
 let AAP = document.getElementById('voteaap');

 let CongressResult = document.getElementById("congressresult");
 let BJPResult = document.getElementById('bjpresult');
 let AAPResult = document.getElementById('aapresult');

 let Result = document.getElementById('result');

 let ShowResult = document.getElementById('showresult');

 let congresscount=0;
 let bjpcount=0;
 let aapcount=0;

 Congress.addEventListener('click', function(){
     congresscount++;
     CongressResult.innerHTML=congresscount;
 })

 BJP.addEventListener('click', function(){
     bjpcount++;
     BJPResult.innerHTML=bjpcount;
 })

 AAP.addEventListener('click', function(){
     aapcount++;
     AAPResult.innerHTML=aapcount;
 })

 Result.addEventListener('click', function(){
     ShowResult.style.visibility='visible';
 })

