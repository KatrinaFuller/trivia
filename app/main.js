import TriviaController from "./Controllers/TriviaController.js";


class App {
    constructor() {
        console.log("Hello from main.js")
        this.controllers = {
            triviaController: new TriviaController()
        }
    }
}

window['app'] = new App()