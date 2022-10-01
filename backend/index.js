function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting==true){
        var id =  entry.target.id;
        id= id.substr(15, id.length-1);
        document.getElementById(entry.target.id).classList.remove("opacity-0");
        if(entry.target.id== "photo-why-proko"){
        document.getElementById(entry.target.id).classList.add("fromLeft");
        } 
        else if (entry.target.id== "column-2"|| entry.target.id== "column-3") {
        document.getElementById(entry.target.id).classList.add("fromRight");
      }
      else{
        entry.target.children[0].classList.add("counter"+id);
      }
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('photo-why-proko'));
observer.observe(document.getElementById('column-2'));
observer.observe(document.getElementById('column-3'));

observer.observe(document.getElementById('sayilarla-proko-20'));
observer.observe(document.getElementById('sayilarla-proko-500'));
observer.observe(document.getElementById('sayilarla-proko-'));
observer.observe(document.getElementById('sayilarla-proko-100'));
observer.observe(document.getElementById('sayilarla-proko-1'));
