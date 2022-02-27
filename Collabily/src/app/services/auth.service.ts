import { Injectable } from '@angular/core';
import { User } from '../opportunity/opportunities-wrapper/opportunity-modal-wrapper/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getLoggedInUser(): User {
    return new User(
      '1af8265b-60ca-42d7-ba21-9ab3e558d39c',
      'Huzaifa Anjum',
      '95b3d52c-b0c9-420c-bb36-494cded8e978',
      'Nike',
      '../../../../../assets/img/brands/nike.jpg'
    );
  }
}
