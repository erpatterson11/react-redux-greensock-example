import { TweenMax } from 'gsap'



const duration = 0.33

export default {
    show(target,cb) {
        console.log('show', target, duration, cb)
        return TweenMax.from(target,duration, {
            opacity: 0, 
            height: 0, 
            transform: "rotateY(-1080deg)",
            onComplete() {
                cb()
            },
        })
    },
    move(target,cb) {
        return TweenMax.to(target,duration, {
            transform: "rotateZ(540deg)",
            onComplete() {
                cb ? cb() : null
            }
        })
    },
    hide(target,cb) {
        console.log('hide', target, duration, cb)
        return TweenMax.to(target,duration, {
            opacity: 0, 
            height: 0, 
            onComplete() {
                cb()
            },
        })
    }
}