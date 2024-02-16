// smooth scrolling       => using locomotive js                             ✅ 
// gsap
// scrollTrigger

//    Smooth scrolling   steps  (just copy and paste)

// step1 :- search locomotive js github on chrome

// step2 :- css ka code copy karke link kar lo

// step3 :- smooth js ka code copy karke script me link kar lo

// step4 :- querryselector me body ke andar wo div jiske andar sari 
        // website hai use select kar lo 

// step5 :- finally link locomotive js cdn (scroll min js)




const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//             smooth scrolling done


// gsap
// attach gsap cdn


// without gsap
function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);  is dets (details) ka use kar sakte hain kisi chiz ko x , y plane mein move karane ke liye wrt cursur
        document.querySelector("#minicirclemouse").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;

    })
}
circlemousefollower();

// adding animation to first page

//  to nav bar
gsap.from(".nav",{
    duration : 1,
    y: -100,  
    opacity : 0, 

})

var tl1 = gsap.timeline();

tl1.from(".hero .heading h1",{
    y:-70,
    opacity: 0,
    duration : 1,
    

})
tl1.from(".hero .heading h5",{
    y:40,
    opacity: 0,
    duration : .5,

})
tl1.from(".hero_footer",{
    opacity: 0,
    duration : .5,
})



// now animating the moving circle with cursur

var timeout ;

function circlemousekochaptakaro(){

    var xscale = 1;
    var yscale = 1;

    var prevx = 0;
    var prevy =0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);

        // 
        var differencex = dets.clientX - prevx;
        prevx =  dets.clientX;
        var differencey = dets.clientY - prevy;
        prevy = dets.clientY;
        // console.log(differencex,differencey);
        xscale = gsap.utils.clamp(0.8,1.2,differencex);
        yscale = gsap.utils.clamp(0.8,1.2,differencey);

        circlemousefollower(xscale,yscale);

        // 

        timeout = setTimeout(function(){
            document.querySelector("#minicirclemouse").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        },100);

    })
}
circlemousekochaptakaro();



// teeno element ko select karo , uske baad teeno par ek mouse move lagao
// jab mousemove ho toh ye pata karo ki mouse kaha par hai , jiska matlab hai 
// mouse ki x and y position pata karo , ab mouse ki x and y positon ke badle 
// us image ko show karo and us image ko move karo , move karte waqt rotate karo
// aur jaise - jaise mouse tez chale rotation fast kar do

document.querySelectorAll("#page2 .intro").forEach(function(elem){
    var prevxforrotate =0;
    elem.addEventListener("mousemove",function(dets){
        var diffy = dets.clientY - elem.getBoundingClientRect().top;

        var rotate = dets.clientX - prevxforrotate;
        prevxforrotate = dets.clientX;
        var clamprotate = gsap.utils.clamp(-15,15,rotate);

        gsap.to(elem.querySelector("img"),{
            opacity : 1,
            // top : diffy,
            left : dets.clientX - 250,
            rotate : clamprotate,
            ease :Power3
        })
    })
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity : 0
        })
    })
})
