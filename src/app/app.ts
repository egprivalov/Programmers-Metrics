import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitLabService } from './services/gitLabService/gitlabService.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    providers: [GitLabService],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
}
