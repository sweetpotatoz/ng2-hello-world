import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component ({
    selector: 'hello-world-1',
//    styles: [`h1 { color: green}`],
    styleUrls: ['./HelloWorld.Component.css'], //sytleUrls is an array
    templateUrl: './HelloWorld.Component.html'
//    template: `
//        <label>Name:</label>
//        <input type="text">
//        <hr>
//        Hello, {{myName}}
//        `
    })

export class HelloWorld1Component {

    @Input()
    myName: string; //default is public

    @Output()
    onClickMe = new EventEmitter<boolean>();


    ClickMe(str){
        alert('Hello ' + str);
        this.onClickMe.emit(true);
    }
}