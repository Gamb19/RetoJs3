let reviewArray= JSON.parse(localStorage.getItem("Lista Review"));
let hotelArray = JSON.parse(localStorage.getItem("Lista Hoteles"));
let reviewsByHotel= JSON.parse(localStorage.getItem("click hotel"));
let hotelReview= hotelArray.filter(element => element.id === reviewsByHotel);
let section = document.getElementById("hoteles");
let reviews = document.getElementById("reviews");
const form = document.getElementById("form")
console.log(reviewArray);

function crearElements(){

    section.innerHTML="";
      if(hotelReview === null){
        hotelReview=[];
      }
      else{
        
        hotelReview.forEach(element => {
    
          let div_Hotel = document.createElement("div");
          div_Hotel.className="div-hotel"
          let div_img = document.createElement("div");
          div_img.className="div_img"
    
          let imagen = document.createElement("img")
          imagen.src=element.thumbnail;
          imagen.className='img'
          let divContentHotel = document.createElement("div");
          divContentHotel.className="div-container"
    
          let titles = document.createElement("a");
          titles.href='hoteles.html'
          titles.textContent=element.titles;
    
          let textDes = document.createElement("p");
          textDes.textContent = element.textDes;
          
    // Html
        section.insertAdjacentElement("beforeend",div_Hotel);
        div_Hotel.insertAdjacentElement("beforeend",div_img);
        div_img.insertAdjacentElement("beforeend",imagen);
        div_Hotel.insertAdjacentElement("beforeend",divContentHotel);
        divContentHotel.insertAdjacentElement("beforeend",titles);
        divContentHotel.insertAdjacentElement("beforeend",textDes);
    
        let grayStar = 5 - element.rating;
          for(i=0; i <  element.rating; i++){
            let star = document.createElement("i");
            star.className="fa-solid fa-star";
            divContentHotel.insertAdjacentElement("beforeend",star);
          }
          for(j=0; j<grayStar; j++){
            let star = document.createElement("i");
            star.className="fa-regular fa-star gray-star";
            divContentHotel.insertAdjacentElement("beforeend",star);
          }
          
        });
        
      }
    }

function dataReviews(){
  reviews.innerHTML="";
  if(reviewArray === null){
    reviewArray=[];
  }
  else{
    reviewArray.forEach(element =>{
    if(element.hotelId===reviewsByHotel){

      let divReview= document.createElement("div")
      divReview.className="div-review";

      let divContent= document.createElement("div")
      divContent.className="div-content"

      let titleReview=document.createElement("h2")
      titleReview.textContent=element.titles
      titleReview.className="title-review"

      let reviewContenedor=document.createElement("p")
      reviewContenedor.textContent= element.textDes
      reviewContenedor.className="review-containt"

      
      //Reviews por defecto
      reviews.insertAdjacentElement("beforeend", divReview);
      divReview.insertAdjacentElement("beforeend",divContent);
      divContent.insertAdjacentElement("beforeend", titleReview)
      divContent.insertAdjacentElement("beforeend", reviewContenedor);

      //Input reviews

      let grayStar = 5 - element.rating;
          for(i=0; i <  element.rating; i++){
            
            let star = document.createElement("i");
            star.className="fa-solid fa-star";
            divContent.insertAdjacentElement("beforeend",star);
          }
          for(j=0; j<grayStar; j++){
            let star = document.createElement("i");
            star.className="fa-regular fa-star gray-star";
            divContent.insertAdjacentElement("beforeend",star);
          }



        }
    })


}

}
function inputReview(title,descripcion,rating){
  
let inputReceive= {
  "id": 1,
  "hotelId": reviewsByHotel,
  "titles": title,
  "textDes": descripcion,
  "rating": rating,
}

reviewArray.push(inputReceive)

}
form.addEventListener("submit", function(event){
  let titleInput=document.getElementById("title").value;
  let reviewInput=document.getElementById("review-opinion").value;
  let ratingInput=document.getElementById("rating").value;
  if(ratingInput < 0){
    alert("Esta introduciendo un valor menor que 0, su calificacion sera 0")
    ratingInput=0;
  }
  else if(ratingInput > 5){
    alert("Esta introduciendo un valor mayor que 5, su calificacion sera 5")
    ratingInput=5;
  }

  inputReview(titleInput,reviewInput,ratingInput);
  
  localStorage.setItem("Lista Review",JSON.stringify(reviewArray));
event.preventDefault();
dataReviews();
form.reset();
})

    document.addEventListener('DOMContentLoaded',crearElements); 
    document.addEventListener('DOMContentLoaded',dataReviews); 