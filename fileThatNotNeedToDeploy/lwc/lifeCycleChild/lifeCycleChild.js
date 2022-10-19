import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor() {
        super()
        console.log('child constructor called.')
    }
    timerId

    connectedCallback() {
        console.log("child connectedCalleback called.")
        window.addEventListener('click', this.handleClick)
        this.timerId = window.setInterval()
        throw new Error('Loadi of child component failed.')
    }

    renderedCallback() {
        console.log("child renderedCallback called.")
    }

    disconnectedCallback() {
        window.clearInterval(this.timerId)
    }
}