import {Component} from '../core/component'

// наследование класса component
export class HeaderComponent extends Component { 
    constructor(id){
        super(id) //вызывает конструктор id 
    }

    init() {
        if (localStorage.getItem('visited')) { // условие скрывает header если пользователь посещал страницу
            this.hide()
        }
        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))
     } 
}


function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
}