export default class Question {
  constructor(data) {
    console.log("hello from trivia.js")
    this.question = data.question
    this.value = data.value
    this.answer = data.answer
  }

  get Template() {
    return `
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">${this.question}</h4>
                    <h6 class="card-text">${this.value}</h6>
                    <p class="card-text">${this.answer}</p>
                </div>
            </div>
        `
  }
}