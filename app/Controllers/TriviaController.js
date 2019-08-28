import TriviaService from "../Services/TriviaService.js";

//Private
let _triviaService = new TriviaService()

function _draw() {
    let quest = _triviaService.Question
    document.getElementById("question").innerHTML = quest.Template
}

//Public
export default class TriviaController {
    constructor() {
        //NOTE Register all subscribers
        // console.log("Hello from trivia controller")
        _triviaService.addSubscriber("question", _draw)

        //NOTE Retrieve data
        _triviaService.getTrivia()
    }



}