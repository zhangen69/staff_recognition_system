import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOptions'
})
export class FilterOptionsPipe implements PipeTransform {
  transform(options: any[], value: any, prop: string): any {
    if (!options) {
      return;
    }

    if (!value) {
      return options;
    }

    if (typeof value === 'object') {
      return options.filter(option => {
        const optionValue = prop ? option[prop] : option.name;
        const enteredValue = prop ? value[prop] : value;
        return optionValue.toLowerCase().includes(enteredValue.toLowerCase());
      });
    }

    return options.filter(option => {
      const optionValue = prop ? option[prop] : option.name;
      return optionValue.toLowerCase().includes(value.toLowerCase());
    });
  }
}
