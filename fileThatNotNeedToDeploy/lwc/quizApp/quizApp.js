import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}

    correctAnswer = 0 // to show correct answer

    // used for disabling submit button 
    get allNotSelected () {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer ? `slds-text-color_success`: `slds-text-color_error`}`
    }

    isSubmitted = false // use to show the result

    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which of the file is invalid in LWC component floder?",
            answers: {
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question: "Which one of the following is not directive?",
            answers: {
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer: "c"
        },
    ]

    // changeHandler get's called on every click on the options
    changeHandler(event) {
        console.log("name " + event.target.name)
        console.log("value " + event.target.value)
        const {name, value} = event.target
        this.selected={...this.selected, [name]: value}
    }

    // form submit handler
    submitHandler (event) {
        event.preventDefault()
        //this.selected = {"Question1": "a", "Question1": "b", "Question1": "c"} 
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswer = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswers" , this.correctAnswer)
    }

    // form reset handler
    resetHandler () {
        this.selected = {}
        this.correctAnswer = 0
        this.isSubmitted = false
    }
}