import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ButtonModule, 
    InputTextModule, 
    PasswordModule, 
    CheckboxModule, 
    CarouselModule, 
    DividerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: AuthService, private router: Router, private cd: ChangeDetectorRef) {}

slides = [
  {
    title: 'GoSure Product 1',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEW9mFJpdKeBw/feedshare-shrink_800/B56ZsvvbbkIEAk-/0/1766032521846?e=2147483647&v=beta&t=-BfS4s16Wv5bk2K3-KV5PTuHnBknlYK6DovwRgcCLZo'
  },
  {
    title: 'GoSure Product 2',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGokI_fsJU23Q/feedshare-shrink_800/B4DZmZwVynJQAg-/0/1759221212818?e=2147483647&v=beta&t=GdL3AW29RlemZ3Cpk-j_MRP6X-7nS5FXk0qxEMTxGWE'
  },
  {
    title: 'GoSure Blog',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFg7CLFp-xb7w/feedshare-shrink_800/B56ZoqOiBHJYAg-/0/1761645044444?e=2147483647&v=beta&t=susTZIiql0Mw1ncRxfPS-4tbxghv8KPmdiY-91oy14U'
  },
   {
    title: 'GoSure Blog',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFg7CLFp-xb7w/feedshare-shrink_800/B56ZoqOiBHJYAg-/0/1761645044444?e=2147483647&v=beta&t=susTZIiql0Mw1ncRxfPS-4tbxghv8KPmdiY-91oy14U'
  },
   {
    title: 'GoSure Blog',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFg7CLFp-xb7w/feedshare-shrink_800/B56ZoqOiBHJYAg-/0/1761645044444?e=2147483647&v=beta&t=susTZIiql0Mw1ncRxfPS-4tbxghv8KPmdiY-91oy14U'
  }
];

 loginWithGoogle() { this.router.navigate(['google']) }
  loginWithEmail() { console.log('Email login'); }
  loginWithGithub() { console.log('Github login'); }
  loginWithApple() { console.log('Apple login'); }
 
}