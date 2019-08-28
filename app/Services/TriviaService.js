import Question from "../Models/Question.js";

//Private
let _state = {
    question: new Question({ hdurl: "placehold.it/200x200" })
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    question: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

// @ts-ignore
let _questionApi = axios.create({
    baseURL: "http://jservice.io/api/clues"
})

//Public
export default class TriviaService {
    constructor() {
        console.log("hello from trivia service")
    }

    get Question() {
        return _state.question
    }

    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    getTrivia() {
        _questionApi.get()
            .then(res => {
                let quest = new Question(res.data)
                _setState("question", quest)
            })
    }
}
