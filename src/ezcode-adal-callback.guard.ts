import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { EZCodeAdalService } from './ezcode-adal.service';

@Injectable()
export class EZCodeAdalCallbackGuard implements CanActivate {
    constructor(private router: Router, private adalService: EZCodeAdalService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.adalService.handleCallback();

        if (this.adalService.userInfo) {
            let redirectPath = ''
            if(this.adalService.adalConfig.redirectPath) {
                redirectPath = this.adalService.adalConfig.redirectPath;
            }

            this.router.navigate([redirectPath]);
            // var returnUrl = route.queryParams['returnUrl'];
            // if (!returnUrl) {
            //     this.router.navigate(['']);
            // } else {
            //     this.router.navigate([returnUrl], { queryParams: route.queryParams });
            // }
        }
        return false;
    }
}
