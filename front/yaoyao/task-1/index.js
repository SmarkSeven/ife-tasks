;(function(){
  var inputEl = document.getElementById('input');
  var btn = document.getElementById('btn');
  var tipEl = document.getElementById('tip-tool');
  
  btn.addEventListener('click',function(){
    var inputContent = inputEl.value && inputEl.value.trim();
    if(inputContent){
      if((inputContent.length >= 4) && (inputContent.length <= 16)){
       tipEl.textContent = '格式正确';
       inputEl.classList.remove('input-error'); 
       tipEl.classList.remove('tip-error'); 
       inputEl.classList.add('input-success');
       tipEl.classList.add('tip-success');
      }else{
         tipEl.textContent = '必填，长度为4~16个字符';
       inputEl.classList.add('input-error'); 
       tipEl.classList.add('tip-error'); 
       inputEl.classList.remove('input-success');
       tipEl.classList.remove('tip-success'); 
      }
    }else{
      tipEl.textContent = '姓名不能为空';
      inputEl.classList.add('input-error');
      tipEl.classList.add('tip-error');
    }
  });
})()