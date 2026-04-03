import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page.component/login-page.component';
import { GenerateTokenComponent } from './pages/generate-token.component/generate-token.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'generate_token',
        component: GenerateTokenComponent
    }
];

