import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit {

  @Input() recipient: any;
  @Input() last: boolean = false;
  @Input() first: boolean = false;
  @Output() showChatWindowEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  displayMessages() {
    this.showChatWindowEvent.emit();
  }

}
