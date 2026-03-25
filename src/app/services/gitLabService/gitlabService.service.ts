import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { GITLAB_API_URL } from '../../core/tokens/gitlab.token';

export class GitLabService {
    private gitlabUrl = inject(GITLAB_API_URL);

    private http = inject(HttpClient)

    private getHeaders(): { headers: HttpHeaders} {
        const token = localStorage.getItem('gitlab_token');

        return {
            headers: new HttpHeaders({'Authorization': `Bearer ${token}` || ""})
        }
    }

    public getUser() {
        return this.http.get(`${this.gitlabUrl}/user`, this.getHeaders());
    }
}
