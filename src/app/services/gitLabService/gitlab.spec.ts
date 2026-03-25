import { TestBed } from '@angular/core/testing';

import { GitLabService } from './gitlabService.service';

describe('Gitlab', () => {
    let service: GitLabService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GitLabService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
