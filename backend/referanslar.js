
var gallery = document.getElementsByClassName("square");
var i;

    
    for(i = 0; i<gallery.length; i++){


          gallery[i].addEventListener("click",function(){
           
        var head =  this.getElementsByClassName("head")[0].innerText;
        var location =  this.getElementsByClassName("location")[0].innerText;
        var mainPhoto = this.style.backgroundImage;
        mainPhoto =  mainPhoto.substr(5,mainPhoto.length-7);
        
        
        var my = window.open('proje.html');


        my.onload = function () {
        my.document.title = head;

        my.document.getElementsByClassName("project-name")[0].innerText = head + "\n" + location;
        my.document.getElementsByClassName("myslideshow")[1].src = mainPhoto;
        };
    
        
    });

    gallery[i].addEventListener("mouseover",function(){
        this.style.scale="1.05";
    })
    gallery[i].addEventListener("mouseout",function(){
        this.style.scale="1";
    })
}