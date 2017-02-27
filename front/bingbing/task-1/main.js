
 (function(){
     var btn = document.getElementById("button");
     var input = document.getElementById("aqi-input");
     var display = document.getElementById("aqi-display");
     btn.addEventListener("click",function(){
         var aqi = input.textContent;
         display.textContent = aqi;
     });
 })();