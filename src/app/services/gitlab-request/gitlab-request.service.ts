import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GITLAB_API_URL } from '../../core/tokens/gitlab-api-url.token';
import { Observable } from 'rxjs';
@Injectable()
export class GitLabService {
    private gitlabUrl = inject(GITLAB_API_URL);
    private http = inject(HttpClient);
    private getHeaders(): { headers: HttpHeaders } {
        const token = localStorage.getItem('gitlab_token');

        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${token}`
            })
        };
    }

    public getUser() {
        const token = localStorage.getItem('gitlab_token');
        return this.http.get(`${this.gitlabUrl}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    public exchangeCode(code: string): Observable<any> {
        const body = new URLSearchParams();

        body.set('client_id', '8021138b8758fc5204a816d4189726b4a4d825599798f2720352008b10dc4abc');
        body.set('client_secret', 'gloas-efffc44a8037407f08370172a12a8200c71b0890c2ba803226fc6671aaa60ffe');
        body.set('code', code);
        body.set('grant_type', 'authorization_code');
        body.set('redirect_uri', 'http://localhost:4200/auth/callback');

        return this.http.post(
            'https://gitlab.com/oauth/token',
            body.toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
    }
}
