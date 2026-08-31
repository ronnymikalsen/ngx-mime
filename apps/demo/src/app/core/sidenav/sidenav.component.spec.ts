import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ManifestService } from '../manifest-service/manifest.service';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let navigate: jest.MockedFunction<Router['navigate']>;

  beforeEach(() => {
    const queryParamMap = new BehaviorSubject(
      convertToParamMap({
        manifestUri: 'assets/fixtures/presentation/3/simple-ltr-manifest.json',
        v: '3',
      }),
    );
    navigate = jest.fn().mockResolvedValue(true);

    TestBed.configureTestingModule({
      providers: [
        ManifestService,
        { provide: ActivatedRoute, useValue: { queryParamMap } },
        { provide: Router, useValue: { navigate } },
      ],
    });

    component = TestBed.runInInjectionContext(() => new SidenavComponent());
  });

  it('should load the equivalent manifest when the IIIF version changes', () => {
    component.iiifVersionModel.set('2');

    component.selectIiifVersion('2');

    expect(navigate).toHaveBeenCalledWith(['demo'], {
      queryParams: {
        manifestUri: [
          'assets/fixtures/presentation/2/simple-ltr-manifest.json',
        ],
        v: '2',
      },
    });
  });
});
