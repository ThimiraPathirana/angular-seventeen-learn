import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  standalone: true
})
export class ImpurePipe implements PipeTransform {

  transform(users: string[], searchTerm: string) {
    if (!users || !searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();
    return users.filter(user => user.toLowerCase().includes(searchTerm)); 
  }

}
