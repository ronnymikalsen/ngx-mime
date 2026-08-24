import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ThemeService } from './core/navbar/theme-picker/theme-service/theme.service';
import { SidenavComponent } from './core/sidenav/sidenav.component';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MatSidenavModule, SidenavComponent, NavbarComponent, RouterOutlet],
})
export class AppComponent {
  readonly isHandsetOrTabletInPortrait = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );
  readonly sidenavMode = computed<MatDrawerMode>(() =>
    this.isHandsetOrTabletInPortrait() ? 'over' : 'side',
  );
  readonly sidenavIsOpen = computed(() => !this.isHandsetOrTabletInPortrait());
  private readonly overlayContainer = inject(OverlayContainer);
  private readonly themeService = inject(ThemeService);
  private readonly theme = toSignal(this.themeService.onThemeUpdate, {
    initialValue: this.themeService.getStoredTheme(),
  });

  constructor() {
    effect(() => {
      const overlayClasses =
        this.overlayContainer.getContainerElement().classList;
      overlayClasses.add(this.theme().name);
    });
  }
}
