const carousel_buttons = document.querySelectorAll("[data-carousel-button]")
const images = document.body.children[1].children[0].children[3].children
// const captions = document.getElementsByClassName("caption")
const captions = document.querySelector("[data-captions]")

carousel_buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newSlideIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newSlideIndex < 0) newSlideIndex = slides.children.length - 1
        if (newSlideIndex >= slides.children.length) newSlideIndex = 0

        slides.children[newSlideIndex].dataset.active = true
        slides.children[newSlideIndex].children[0].style.zIndex = '1'
        delete activeSlide.dataset.active
        activeSlide.children[0].style.zIndex = ''
        
        const activeCaption = captions.querySelector("[data-active]")
        let newCaptionIndex = [...captions.children].indexOf(activeCaption) + offset
        if (newCaptionIndex < 0) newCaptionIndex = captions.children.length - 1
        if (newCaptionIndex >= captions.children.length) newCaptionIndex = 0

        captions.children[newCaptionIndex].dataset.active = true
        delete activeCaption.dataset.active
    })
})

for (let x of images) {
    x.children[0].addEventListener("mouseover", () => {
        x.children[0].style.opacity = "0.15"
        captions.querySelector("[data-active]").style.opacity = 1.0
    })
    x.children[0].addEventListener("mouseout", () => {
        x.children[0].style.opacity = "1.0"
        captions.querySelector("[data-active]").style.opacity = 0.0
    })

    x.children[0].addEventListener("click", () => {
        if (x.children[0].style.opacity == "0.15") {
            x.children[0].style.opacity = "1.0"
            captions.querySelector("[data-active]").style.opacity = 0.0
        } else {
            x.children[0].style.opacity = "0.15"
            captions.querySelector("[data-active]").style.opacity = 1.0
        }
    })
}

const on_start = document.getElementsByClassName("on-start")[0]
// on_start.addEventListener("click", () => {
//     on_start.style.display = 'none'
//     on_start.style.zIndex = '-2'
// })

const close_msg = document.getElementsByClassName("close-msg")[0]
close_msg.addEventListener("click", () => {
    on_start.style.zIndex = '-2'
})