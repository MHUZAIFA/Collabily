import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements AfterViewInit {
  @ViewChild('conversationContainer') element: ElementRef;
  @Input() is_mobile_device: boolean = false;
  @Output() closeChatWindowEvent = new EventEmitter<boolean>();

  conversations = [
    {
      sender: {
        displayName: 'Huzaifa',
        profileUrl: '../../../../assets/img/faces/huzaifa_profile_pic.jpg',
      },
      byUser: true,
      timeStamp: '2021-07-20T10:35:41.984Z',
      message:
        'Hi, We are impressed with your social media coverage. We wanted to request you to be the face of our upcoming campaign.',
    },
    {
      sender: {
        displayName: 'Cristiano',
        profileUrl: '../../../../assets/img/faces/cr7.jpg',
      },
      byUser: false,
      timeStamp: '2021-07-20T09:35:41.984Z',
      message:
        'Hi, Sure kindly share the details across. My team and I will evaluate it and come back to you ',
    },
    {
      sender: {
        displayName: 'Huzaifa',
        profileUrl: '../../../../assets/img/faces/huzaifa_profile_pic.jpg',
      },
      byUser: true,
      timeStamp: '2021-07-20T10:35:41.984Z',
      message: 'Sure, Do let us know at the earliest',
    },
    {
      sender: {
        displayName: 'Cristiano',
        profileUrl: '../../../../assets/img/faces/cr7.jpg',
      },
      byUser: false,
      timeStamp: '2021-07-20T09:35:41.984Z',
      message:
        'Hi, We have come to a decision with regards to working with you for your campaign. We are happy to announce the we are looking forward to be part of your campaign.',
    },
    {
      sender: {
        displayName: 'Huzaifa',
        profileUrl: '../../../../assets/img/faces/huzaifa_profile_pic.jpg',
      },
      byUser: true,
      timeStamp: '2021-07-20T10:35:41.984Z',
      message:
        'Thats great news!!! Looking forward to begin working with you closeley.',
    },
  ];

  constructor(private elRef: ElementRef) {
    this.element = elRef;
  }

  ngAfterViewInit(): void {
    this.scrollToLatestMessage();
  }

  closeChatWindow() {
    this.closeChatWindowEvent.emit(true);
  }

  scrollToLatestMessage() {
    setTimeout(() => {
      this.element?.nativeElement?.scrollTo({
        left: 0,
        top: this.element?.nativeElement?.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  }
}
