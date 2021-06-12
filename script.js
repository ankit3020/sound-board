const btn= document.querySelectorAll('.btn');

btn.forEach((button,index) => {
    btn[index].addEventListener('click', () => {

        var audio = new Audio(`sounds/${index+1}.mp3`);
        audio.play();
    });
    
    });
// for (var i=0; i <= btn.length; i++){
// btn[i].addEventListener('click', () => {
//     var audio = new Audio(`sounds/${i}.mp3`);
//     audio.play();
// })
// };



