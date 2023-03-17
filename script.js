const LISTA = ['kepek/kep1.jpg', 'kepek/kep2.jpg', 'kepek/kep3.jpg', 'kepek/kep4.jpg', 'kepek/kep5.jpg', 'kepek/kep6.jpg'];
const KIVALASZTOTTKEPEK=[];
var db=0;

$(function () {
    const FELEM = $('#felso');
    const AELEM = $('#also');
   
    let tartalom =osszeAllit();
    FELEM.append(tartalom);
    AELEM.append(tartalom);
    const kepek = $('section div img');
    kepek.on("click",kattintas);
    visszafordit()
    
});
function osszeAllit() {
    let txt = "";
    for (let index = 0; index < LISTA.length; index++) {
        txt += (`<div><img id="${index}" src="kepek/hatter.jpg"></div>`);
    }
    return txt;
}
function kattintas(){
    const kiskepek = event.target;
    console.log($(kiskepek).attr("id"));
    kiskepek.src=LISTA[kiskepek.id]
    KIVALASZTOTTKEPEK.push($(kiskepek).attr("id"))
    db++;
    if(db == 2){
        visszafordit()
        db = 0;
        console.log(KIVALASZTOTTKEPEK)
        
    }
    
}
function visszafordit(){
    setTimeout(function(){
        const FELEM = $('#felso');
        const AELEM = $('#also');
     let aktkep=FELEM.eq(KIVALASZTOTTKEPEK[0]);
     $(aktkep).attr("src","kepek/hatter.jpg");
     aktkep=FELEM.eq(KIVALASZTOTTKEPEK[1]);
     $(aktkep).attr("src","kepek/hatter.jpg");
     KIVALASZTOTTKEPEK.pop()
    KIVALASZTOTTKEPEK.pop()
    }, 1000);
    
}