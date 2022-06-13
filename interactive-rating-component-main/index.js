
function addRating(value) {
   const btn = document.querySelector('button');  
   rating = value; 
   return rating;
   };
   
  function displayRating() {

   const greetings = document.querySelector(".thanks");
   const card= document.querySelector('.card');
   card.style.visibility= 'hidden';
   const greeting= document.querySelector('.greeting');
   greeting.style.visibility= 'visible';
   greetings.innerHTML = `<p>You selected  ${rating} out of 5 </p> `
};




