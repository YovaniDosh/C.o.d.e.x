export class Task {

    constructor(text){

        this.text = text;

        this.completed = false;

    }

    toggle(){

        this.completed = !this.completed;

    }

}