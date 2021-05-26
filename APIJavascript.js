var btn= document.getElementById("btnClick")
btn.addEventListener('click',()=>
 {
  var img = document.getElementById('fImg');

  function getFluffy(method) {  
    //fetch('https://random.dog/woof.json')
   fetch('https://randomfox.ca/floof/')
           .then((response) => {
            return response.json();
        })
        .then(method);
}

getFluffy((data) =>
    {
    //img.src=CorrectSlashes(data.url);
    img.src=CorrectSlashes(data.image);
    img.style.display="inline-block"
    });
 }
);
/*
function GetFluffy(method)
{
   // fetch('https://random.dog/woof.json')
   fetch('https://randomfox.ca/floof/')
    .then((response) => {
        return response.json();
    })
    .then(method);
}*/
function CorrectSlashes(x){

    if(x.includes("\\")) { 
      x = x.replace("//","");
      return x;  }
    else
      return x;
}


