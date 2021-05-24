//var btn =document.querySelector('btnClick');
var btn= document.getElementById("btnClick")
btn.addEventListener('click',()=> {
//  var fluffy=  GetFluffy();
  //var imgSrc = document.querySelector('fImg');
  var imgSrc = document.getElementById('fImg');
  //imgSrc.src = fluffy.url;
  var imgLink = GetFluffy();
//*ED-Need to remove the slashes;
console.log(imgLink);
  imgSrc.src=CorrectSlashes(imgLink);
  imgSrc.style.display="inline-block"
});

function GetFluffy()
{
   // fetch("https://randomfox.ca/floof/")
/*
   fetch('https://random.dog/woof.json')
    .then((response)=>{return response.json().url;
        })*/
       // .then((data)=> {

         //return data.image;
       //   return data.url;
       // })

       //ED- for Testing
       fetch('https://random.dog/woof.json')
            .then((response) => {
                return response.json();
            })
}
function CorrectSlashes(x){

    if(x.includes("\\")){ 
      x = x.replace("//","");
     return x; }
    else
        return x;
}


