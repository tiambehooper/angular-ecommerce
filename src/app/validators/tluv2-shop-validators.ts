import { FormControl, ValidationErrors } from "@angular/forms";

export class TLuv2ShopValidators {

  //whiespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null{

    //check if string only contains whitespace
    if (control.value != null && control.value.trim().length === 0) {

      console.log('Control: ', control);
      console.log('Control Value: ', control.value);

      //invalid, retun error object
      return {'notOnlyWhitespace': true};

    }
    else{
       //valid, return error object
      return null;

    }

  }
}
