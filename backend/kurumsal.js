


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
        document.getElementById(entry.target.id).classList.add("from"+id);
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


observer.observe(document.getElementById("Right-1"));
observer.observe(document.getElementById("Right-2"));
observer.observe(document.getElementById("Right-3"));
observer.observe(document.getElementById("Right-4"));
observer.observe(document.getElementById("Right-5"));
observer.observe(document.getElementById("Right-6"));

observer.observe(document.getElementById("Left-1"));
observer.observe(document.getElementById("Left-2"));
observer.observe(document.getElementById("Left-3"));
observer.observe(document.getElementById("Left-4"));
observer.observe(document.getElementById("Left-5"));
observer.observe(document.getElementById("Left-6"));
