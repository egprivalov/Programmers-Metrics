import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTokenComponent } from './generateToken.component';

describe('GenerateToken', () => {
    let component: GenerateTokenComponent;
    let fixture: ComponentFixture<GenerateTokenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GenerateTokenComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GenerateTokenComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
