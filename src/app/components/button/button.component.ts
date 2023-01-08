import { Component, Input, OnInit } from '@angular/core'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() styleType = 'primary'
  @Input() icon?: IconDefinition
  @Input() disabled = false

  buttonClasses: { [type: string]: string } = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-neutral-500 text-white',
    danger: 'bg-red-500 text-white',
  }

  classes: string

  ngOnInit () {
    this.classes = this.buttonClasses[this.styleType]
  }
}
