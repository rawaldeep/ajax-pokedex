let input = document.getElementsByClassName('trueInput');
let image = document.getElementsByClassName('pokeImage');
let desc = document.getElementsByClassName('descriptionText');
let height = document.getElementsByClassName('heightText');
let weight = document.getElementsByClassName('weightText');
let types = document.getElementsByClassName('typeText');
let frame = document.getElementsByClassName('frame');
// console.log(frame.length)
image[0].src="assets/img/pokeball.png";
input[0].addEventListener("keyup", function(event) {
    let inputData =  input[0].value.trim();
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
    //   document.getElementById("myBtn").click();
    fetch('https://pokeapi.co/api/v2/pokemon/'+inputData.toLowerCase()+'/').then((response) => response.json())
    .then((data)=>{
        image[0].src= data.sprites.front_default;
        let arr = [];
        let nom = data.moves.length;
        console.log(nom);
        if(nom > 4){
            nom = 4;
        }
        for(let i = 0; i < nom; i++){
           arr.push(data.moves[i].move.name)
        } 
        let moves =arr.join(', ');
        desc[0].innerHTML = 'Pokemon id : '+data.id+'<br/>Moves: '+moves;
        desc[0].style.cssText = "font-size: 0.5em;margin-top: -1.5em; padding: 0 1px 0 0";
        height[0].innerHTML = data.height+" ft";
        height[0].style.cssText = "font-size: 0.65em;";
        weight[0].innerHTML = data.weight+" lb";
        weight[0].style.cssText = "font-size: 0.65em;";
        arr = [];
        arr.forEach.call(data.types, function (el) {
                arr.push(el.type.name);
            });
        let element = arr[0];
        if(arr.length > 1){
            element = arr[1]
        }
        console.log(element);
            switch (element) {
                case 'fire':
                document.querySelector('body').style.cssText = "background: url(https://i.pinimg.com/originals/1f/74/fe/1f74fe356703a01e308f510c219733dc.jpg);background-size: cover;"
                break;//1
                case 'water':
                document.querySelector('body').style.cssText = "background: url(https://cdn.pixabay.com/photo/2014/07/05/00/37/wave-384383_960_720.jpg);background-size: cover;"
                break;//2
                case 'psychic':
                document.querySelector('body').style.cssText = "background: url(https://www.dianecanfield.com/wp-content/uploads/2015/07/zdhjdjsffjd.jpg);background-size: cover;"
                break;//3
                case 'dark':
                document.querySelector('body').style.cssText = "background: url(https://wallpapertag.com/wallpaper/full/7/a/a/142768-top-ghost-pokemon-wallpaper-1920x1200-for-samsung-galaxy.jpg);background-size: cover;"
                break;//4
                case 'fighting':
                document.querySelector('body').style.cssText = "background: url(https://i.pinimg.com/originals/de/00/6e/de006e65da6f14015aae9b782f67acd0.jpg);background-size: cover;"
                break;//5
                case 'ice':
                document.querySelector('body').style.cssText = "background: url(https://info.glass.com/content/uploads/2018/02/window-cold-weather.jpg);background-size: cover;"
                break;//6
                case 'electric':
                document.querySelector('body').style.cssText = "background: url(https://i.pinimg.com/originals/a3/54/d7/a354d7c5cf2db4b7663a416512d7a6bd.jpg);background-size: cover;"
                break;//7
                case 'bug':
                document.querySelector('body').style.cssText = "background: url(https://i.kinja-img.com/gawker-media/image/upload/s--VH8uHuBH--/c_scale,f_auto,fl_progressive,q_80,w_800/18mrevua0zhf9jpg.jpg);background-size: cover;"
                break;//8
                case 'rock':
                document.querySelector('body').style.cssText = "background: url(https://cdn.pixabay.com/photo/2016/10/07/02/33/volcanic-rock-1720550_960_720.jpg);background-size: cover;"
                break;//9
                case 'ground':
                document.querySelector('body').style.cssText = "background: url(https://cdn.pixabay.com/photo/2018/04/27/21/39/earth-3355931_960_720.jpg);background-size: cover;"
                break;//10
                case 'poison':
                document.querySelector('body').style.cssText = "background: url(https://i.pinimg.com/originals/96/7d/53/967d538f971baa51f942acaf14960efa.jpg);background-size: cover;"
                break;//11
                case 'ghost':
                document.querySelector('body').style.cssText = "background: url(https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_960_720.jpg);background-size: cover;"
                break;//12
                case 'fairy':
                document.querySelector('body').style.cssText = "background: url(https://i.pinimg.com/originals/e9/53/b9/e953b99e87c7d9aca8432dc07c0623dd.jpg);background-size: cover;"
                break;//13
                case 'dragon':
                document.querySelector('body').style.cssText = "background: url(https://i.imgflip.com/26xqkq.jpg);background-size: cover;"
                break;//14
                case 'grass':
                document.querySelector('body').style.cssText = "background: url(https://presentationpictures.files.wordpress.com/2010/07/fresh-grass-background-presentations.jpg?w=960);background-size: cover;"
                break;//15
                case 'flying':
                document.querySelector('body').style.cssText = "background: url(https://www.maxpixel.net/static/photo/1x/Flying-Cloud-Sky-Blue-Plane-Vacation-Horizon-2546570.jpg);background-size: cover;"
                break;//16
                case 'steel':
                document.querySelector('body').style.cssText = "background: url(https://archive-media-1.nyafuu.org/vp/image/1378/82/1378826810379.jpg);background-size: cover;"
                break;//17
                case 'normal':
                document.querySelector('body').style.cssText = "background: url(https://i.pinimg.com/originals/0c/a0/7e/0ca07edfb47679d6694c03dc2275f0c6.jpg);background-size: cover;"
                break;//18
                default:
                document.querySelector('body').style.cssText = "background: linear-gradient(15deg,rgba(41, 41, 41, 1) 4%,rgba(49, 49, 49, 1) 24%,rgba(128, 128, 128, 1) 64%,rgba(138, 138, 138, 1) 70%,rgba(230, 230, 230, 1) 81%,rgba(255, 255, 255, 1) 86%, rgba(220, 220, 220, 1) 89%, rgba(230, 230, 230, 1) 100%);"
              }
        types[0].innerHTML = arr.join(', ')
        types[0].style.cssText = "font-size: 0.65em;";
        arr = [];
        for(let i = 0; i < frame.length; i++){ arr.push(frame[i])}
        for(let i in arr){
            arr[i].style.cssText = "height: 14vh;"
            arr[i].children[0].style.cssText = "height:"+(100*(parseFloat(data.stats[i].base_stat/200)))+'%';
        }
        document.querySelector('.blueButton').addEventListener('click', ()=>{
            image[0].src= data.sprites.front_shiny;
        })
        document.querySelector('.start').addEventListener('click', ()=>{
            image[0].src= data.sprites.front_default;
            document.querySelector('.blueButton').addEventListener('click', ()=>{
                image[0].src= data.sprites.front_shiny;
            })
        });
        document.querySelector('.select').addEventListener('click', ()=>{
            image[0].src= data.sprites.back_default;
            document.querySelector('.blueButton').addEventListener('click', ()=>{
                image[0].src= data.sprites.back_shiny;
            })
        })



    })
    .catch((err) =>{
        console.log(err);
        image[0].src="assets/img/pokemon.png";
        desc[0].innerHTML = 'Unknown pokemon. High chances it does not exist but maybe you found something we do not know about yet!';
        desc[0].style.cssText = "font-size: 0.5em;margin-top: -1.5em;padding: 0 1px 0 0;";
        document.querySelector('body').style.cssText = "background: linear-gradient(15deg,rgba(41, 41, 41, 1) 4%,rgba(49, 49, 49, 1) 24%,rgba(128, 128, 128, 1) 64%,rgba(138, 138, 138, 1) 70%,rgba(230, 230, 230, 1) 81%,rgba(255, 255, 255, 1) 86%, rgba(220, 220, 220, 1) 89%, rgba(230, 230, 230, 1) 100%);"
        height[0].innerHTML = "N/A";
        height[0].style.cssText = "font-size: 0.65em;";
        weight[0].innerHTML = "N/A";
        weight[0].style.cssText = "font-size: 0.65em;";
        types[0].innerHTML = "N/A";
        types[0].style.cssText = "font-size: 0.65em;";
        [].forEach.call(frame, function (el) {
            el.style.cssText = "height: 0px;";
        });
    });
    }
  });