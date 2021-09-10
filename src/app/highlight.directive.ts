import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Patient } from 'src/models/interfaces';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private isHighlighted = false;
  @Input() patient: Patient;
  @Input() occurences: { [key: string]: number };

  constructor(private elementRef: ElementRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    // console.log(this.patient, this.occurences)
    this.patientWithMostVisits();
  }

  patientWithMostVisits() {
    const { name, date_of_birth } = this.patient;
    const mostOccurence = this.frequentEntry.includes(`${name}_${date_of_birth}`);
    if (mostOccurence) {
      if (!this.isHighlighted) {
        this.elementRef.nativeElement.parentElement.setAttribute('class', 'highlight');
        this.isHighlighted = true;
      }
    }
  }

  get frequentEntry() {
    const sorted = [...Object.entries(this.occurences).sort((a: any, b: any) => b[1] - a[1])];
    return sorted[0];
  }
}
