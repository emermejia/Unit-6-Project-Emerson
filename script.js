// Declare your genre arrays here
let comedy = ["https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg","https://hbomax-images.warnermediacdn.com/images/GXmAuwAxxXp4_wwEAACh0/tileburnedin?size=1280x720&partner=hbomaxcom&v=a6a056d0c957d7f42466b1f611175396&host=art-gallery.api.hbo.com&language=es-419&w=1280"];
let action = ["https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"];
let horror = ["https://hbomax-images.warnermediacdn.com/images/GYOYX9gphVFOLNgEAAAQR/tileburnedin?size=1280x720&partner=hbomaxcom&v=892d4950643ab22e60920a4308d4f5b9&host=art-gallery.api.hbo.com&language=es-419&w=1280","https://m.media-amazon.com/images/M/MV5BMTYyMDE5ODIzOF5BMl5BanBnXkFtZTgwOTU4NTc2MjI@._V1_QL75_UX500_CR0,47,500,281_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlRaTdLdV3ZVAToHVs0O9tKkgoSqlWqbX_kYBkg8i0A&usqp=CAU&ec=48600113"];

// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");


// Submit Button 
let submitButton = document.querySelector(".submit");
submitButton.onclick = function() {
        let genreInput = document.querySelector(".genre-input").value;
        if (genreInput === "action") {
            for (let actionMovie of action) {
                let movieImage = "<img src=" + actionMovie + "' />";
                result.insertAdjacentHTML("beforeend", movieImage);
            }
        } else if (genreInput === "comedy") {
            for (let comedyMovie of comedy) {
                let movieImage = "<img src=" + comedyMovie + "' />";
                result.insertAdjacentHTML("beforeend", movieImage);
            }

        }
     else if (genreInput === "horror") {
            for (let horrorMovie of horror) {
                let movieImage = "<img src=" + horrorMovie + "' />";
                result.insertAdjacentHTML("beforeend", movieImage);
            }
     } 
};
        //console.log(genreInput);

// Suggest Button 
let suggestButton=document.querySelector(".Suggest");
suggestButton.onclick = function(){
let typeinput1 = document.querySelector(".type-input1").value;
    let img = "<img src=" + typeinput1 + ">";
    comedy.push(typeinput1);
    action.push(typeinput1);
    horror.push(typeinput1);
  result.insertAdjacentHTML("beforebegin", "<p>" + 
"Thank you for the suggestion!" + "<p/");
};
