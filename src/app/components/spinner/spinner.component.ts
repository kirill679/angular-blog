import { Component } from '@angular/core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  faSpinner = faSpinner
}
