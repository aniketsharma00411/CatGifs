import { cats } from './cats.js';

document.addEventListener('DOMContentLoaded', yall({
    observeChanges: true
}));

new Vue({
    el: '#cats',
    data: {
        loaded: 12,
        cats: _.shuffle(cats)
    },
    methods: {
        load() {
            if (this.loaded + 12 > this.cats.length) {
                this.loaded += this.cats.length - this.loaded;
            } else {
                this.loaded += 12;
            }
        }
    }
});