function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting==true){
        var id =  entry.target.id;
        
        if(id[0]=="R"){
            id ="Right"
        }
        else{
            id = "Left"
        }
        document.getElementById(entry.target.id).classList.remove("opacity-0");
        document.getElementById(entry.target.id).classList.add("fromDown");
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  let observer = new IntersectionObserver(callbackFunc, options);
  var i;
  for(i=1; i<47;i++){
    observer.observe(document.getElementById("from"+i));
  }
