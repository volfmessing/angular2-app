/**
 * Created by dp-ptcstd-32 on 5/15/2017.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular2 App</h1> <br>Your name: <input type="text" [(ngModel)]="name"><p></p>Hello, {{name}} from Angular2!'
})
export class AppComponent {
    name = "Vit";
}
