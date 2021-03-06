import { Component, OnInit } from '@angular/core';


// Fontawesome icon
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Input } from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName: string;

  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() { this.iconName=''}

  ngOnInit(): void {
  }

}
