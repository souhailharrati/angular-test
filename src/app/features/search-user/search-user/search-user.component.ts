import { Component, OnInit } from '@angular/core';
import {SearchUserService} from './search-user.service';
import { User } from 'src/app/shared/models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  constructor(private searchUserService: SearchUserService, private router: Router) { }

  user = {} as User;
  
  ngOnInit(): void {
   
  }

  onKey(event: any) { // without type info
    const userName = event.target.value;
    if (userName) {
      this.getUserByUserName(userName);
    }
  }

  getUserByUserName(userName) {
    this.searchUserService.getUser(userName)
    .pipe( map(userJson => {
      const newUser = <User>({
        name: userJson['name'],
        bio: userJson['bio'],
        public_repos: userJson['public_repos'],
        avatar_url: userJson['avatar_url'],
        location: userJson['location']
      });
      return newUser;
    })
  )
    .subscribe(
      user => this.user = user,
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
      );
  }

  navigateToShorterLink(){
    this.router.navigate(['../../app/short']);
  }

}
