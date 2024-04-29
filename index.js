let sond = "_";
function getPoke(){ 
    var pokemon = document.getElementById('poke').value;
    console.log(pokemon); 
    var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon; 
    console.log('url:' + url) 
    fetch(url) 
    .then((resp) => resp.json()) 
    .then(function(data) {
         console.log(data); 
         //var aud = new Audio('https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg');
         //aud.play();
         console.log('name:' + data.name);
         console.log('id:' + data.id);
         console.log('sound:' + data.cries.latest);
         console.log('sprit:' + data.sprites.front_default);
         console.log('shiny:' + data.sprites.front_shiny);
         console.log(data.height/10);
         console.log(data.weight/10);
         console.log('no, pokedex:' + data.id);
         getShiny(data);
         getGeneral(data);
            sond = data.cries.latest;
            console.log('sond: ' + sond );
        }) 
        .catch(function(error) {
             console.log(error); 
            }); 
        }

        function getSrc(data){
            return data.cries.latest;
        }

        function getGeneral(data){
            var altura = document.getElementById('altu');
            var peso = document.getElementById('pso');
            var pokImg = document.getElementById('pokeImg');
            peso.innerText = "Peso " + data.weight/10 + "kg";
            altura.innerText = "Altura " + data.height/10 + "m"
            pokImg.src = data.sprites.front_default;
            pokImg.style.top = "10%";
            pokImg.style.height = "190px";
            pokImg.style.width = "190px";

        }
        function reproducir(){
            var snd = new Audio(sond);
            console.log('sond fuera: ' + sond );
            snd.play()
        }
        

       function getShiny(data) {
           var shinyim =  document.getElementById('shinyImg');
           shinyim.src = data.sprites.front_shiny;
           shinyim.style.height = "190px";
           shinyim.style.width = "190px";
       } 