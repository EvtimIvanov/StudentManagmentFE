import {Pipe, PipeTransform} from "@angular/core";
import { studentsWithGrades } from "src/app/models/courseInfo";

@Pipe({name: "gradeToLetter"})
export class gradeToLetter implements PipeTransform{
  transform(value: number | undefined ): string {
    if(value === undefined){
      return 'No grade'
    }else if(value == 6){
      return "A+";
    }else if(value >= 5.75){
      return "A"
    }else if(value >= 5.5){
      return "A-"
    }else if(value > 5){
      return "B+"
    }else if(value == 5){
      return "B"
    }else if(value >= 4.5){
      return "B-"
    }else if(value > 4){
      return "C+"
    }else if(value == 4){
      return "C"
    }else if(value >= 3.5){
      return "C-"
    }else if(value > 3){
      return "D+"
    }else if(value == 3){
      return "D"
    }else if(value >= 2.5){
      return "D-"
    }else{
      return "F"
    }

  }
}
