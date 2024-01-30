import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {AppMainComponent} from 'src/app/template/app.main.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
  constructor(public app: AppComponent, public appMain: AppMainComponent, private roleService: RoleService, private authService:AuthService, private router: Router) {}

  ngOnInit() {
    this.modelAdmin =
      [
              {
                label: 'Achat',
                icon: 'pi pi-wallet',
                items: [
                          {
                            label: 'Liste achat',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/stock/achat/list']
                          },
                          {
                            label: 'Liste achat item',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/stock/achat-item/list']
                          },
                ]
              },
              {
                label: 'Client',
                icon: 'pi pi-wallet',
                items: [
                          {
                            label: 'Liste client',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/commun/client/list']
                          },
                ]
              },
              {
                label: 'Produit',
                icon: 'pi pi-wallet',
                items: [
                          {
                            label: 'Liste produit',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/commun/produit/list']
                          },
                ]
              },
    ];
        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roles) {
              this.authService.authenticatedUser.roles.forEach(role => {
                  const roleName: string = this.getRole(role);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
