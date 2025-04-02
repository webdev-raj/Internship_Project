import { gsap } from 'gsap'
const allImg = document.querySelectorAll(".images")


window.addEventListener("DOMContentLoaded", () => {
    loadingAnimation()
    imageAndTextAnimation()
    mouseAnimationOnImg()
})
const loadingAnimation = () => {
    var tl = gsap.timeline();
    tl.from(".textContainer h1", {
        y: "100%",
        duration: 0.5,
        stagger: 0.3,
        ease: "power2.out",
    })
        .from(".images", {
            scale: 0,
            transform: "rotate(10deg)",
            duration: 0.5,
            stagger: 0.4,
            ease: "power2.out",
        })
}
const imageAndTextAnimation = () => {
    let elementDiv = null
    allImg.forEach((imgdiv, indx) => {
        imgdiv.addEventListener("mouseover", (e) => {
            elementDiv = e.target
            elementDiv.style.backgroundImage = `url("/assets/images/img${indx}.png")`
            gsap.to(elementDiv, {
                zIndex: 1,
                duration: 0.5,
                ease: "power2.out",
            }, "same")
            gsap.to(".textContainer h1", {
                color: "transparent",
                WebkitTextStroke: "0.5px #4e4d4d",
                duration: 0.5,
                ease: "power2.out",
            }, "same")
        })
        indx++
        imgdiv.addEventListener("mouseleave", (e) => {
            elementDiv = e.target
            elementDiv.style.backgroundImage = null
            gsap.to(elementDiv, {
                zIndex: 0,
                duration: 0.5,
                ease: "power2.out",
            }, "both")
            gsap.to(".textContainer h1", {
                color: "white",
                duration: 0.5,
                ease: "power2.out",
            }, "both");
        })
    })
}

const mouseAnimationOnImg = () => {
    allImg.forEach((elem) => {
        let headings = elem.querySelectorAll(".heading")
        elem.addEventListener("mouseenter", () => {
            headings.forEach((heading) => {
                gsap.to(heading, {
                    opacity: 1
                })
            })
        })
        elem.addEventListener("mousemove", (e) => {
            let rect = elem.getBoundingClientRect()
            let x = (e.clientX - rect.left) - rect.width / 2 * .40
            let y = (e.clientY - rect.top) - rect.width / 2 * .40
            gsap.to(elem, {
                x: x,
                y: y,
            })
        })
        elem.addEventListener("mouseleave", (e) => {
            gsap.to(elem, {
                x: 0,
                y: 0
            })
            headings.forEach((heading) => {
                gsap.to(heading, {
                    opacity: 0
                })
            })
        })
    })
}