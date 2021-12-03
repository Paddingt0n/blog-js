export class Component {
    constructor(id) {
        this.$el = document.getElementById(id)
        this.init()
    }
    init() {}

    // метод hide, обращается к текущему элементу, его класс листу и добавляет класс hide 
    hide(){
        this.$el.classList.add('hide')
    }
    // метод show, обращается к текущему элементу, его класс листу и добавляет класс hide 
    show(){
        this.$el.classList.remove('hide')
    }
}
