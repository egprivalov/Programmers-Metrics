import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GitLabService } from '../../services/gitLabService/gitlabService.service';
import { take } from 'rxjs';
@Component({
    selector: 'app-auth',
    imports: [FormsModule, 
        MatFormFieldModule, 
        MatInputModule,
        RouterModule],
    templateUrl: './loginPage.component.html',
    styleUrl: './loginPage.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
    public token: string = '';
    public signInToken(): void {
        localStorage.setItem('gitlab_token', this.token);
        console.log('Токен сохранен');
    }

    private gitlab = inject(GitLabService);

    public testApi() {
        this.gitlab.getUser()
        .pipe(take(1))
        .subscribe(res => {
            console.log(res);
        });
    }
}
