import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/loginPage.component/loginPage.component';
import { GenerateTokenComponent } from './pages/generateToken.component/generateToken.component';

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

