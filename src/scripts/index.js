import '../styles/index.scss'

import { sum, sub } from './math'

console.log('Hello Webpack 4')

console.log(sum(10, 20))
console.log(sub(10, 20))

alert(' Hello I am Sumon, I am a still study learing to javascricpt developer')

function mixine(targer, soruch) {
    Object.assign(targer, soruch)
}

var sewing = {
    sew: function () {
        console.log('I love to Sewing.......');

    }
}

function Sumon(name) {
    this.name = name
}
mixine(Sumon.prototype, sewing)

var s = new Sumon('Anisha rahman sumon')

console.log(s);
