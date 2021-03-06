import { gsap } from "gsap";

// gsap.to("#red-circle", { duration: 4, x: 200 });

// gsap.from("#blue-square", { duration: 4, scale: 2, alpha: 0, delay: 2, repeat: -1, yoyo: true });


let shapeTL = gsap.timeline();

shapeTL.to("#purple-circle", {duration: 1, scaleX:-1, scaleY:-1, yoyo: true, repeat:5})
    .to("#purple-circle", {duration: 1, scaleX:-5, scaleY:-1})
    .to("#purple-circle", {duration: 1, scaleX:-1, scaleY:-5})
    .to("#purple-circle", {duration: 1, scaleX:-5, scaleY:-1})
    .to("#purple-circle", {duration: 1, scaleX:-1, scaleY:-5})
    .to("#purple-circle", {duration: 1, scaleX:50, scaleY:50})
    .to("#purple-circle", {duration: 1, scaleX:-1, scaleY:-1})
    .to("#purple-circle", {duration: 1, alpha: 0})
    .to("#purple-circle", {duration: 1, backgroundColor: "#FFD700"})
    .to("#purple-circle", {duration: 1, alpha: 1})
    .to("#purple-circle", { duration: 1, ease: "bounce.out", y:200, x:400})
    .to("#purple-circle", { duration: 1, ease: "power2.out", y: -300, scale:2})
    .to("#purple-circle", { duration: 1, ease: "elastic.out", y: 100, x:400, scale:2})
    .to("#purple-circle", { duration: 1, ease: "steps(11)", x: -500})
    .to("#purple-circle", {duration: 1, scaleX:-1, scaleY:-1})
    .to("#purple-circle", { duration: 1, ease: "back.out(1.7)", y: -300 })
    .to("#purple-circle", { duration: 1, ease: "elastic.out(1, 0.3)", y:300 })
    .to("#purple-circle", {duration: 1, backgroundColor: "#191970"})
    .to("#purple-circle", { duration: 1, ease: "bounce.out", y:-1, x:-1})
    .to("#purple-circle", {duration: 1, scaleX:50, scaleY:50});
    


    

    // from("#red-cricle", {duration: 1, x:-300}, "moveShapes")
    // .to("#red-circle", {duration: 1, x:200, y:-200})
    // .to("#red-circle", {duration: 1, x:-600, y:600})