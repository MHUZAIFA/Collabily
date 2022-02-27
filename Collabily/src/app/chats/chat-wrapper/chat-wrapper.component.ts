import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Subscription,
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { ThemeService } from '../../components/services/theme.service';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.css'],
})
export class ChatWrapperComponent implements OnInit {
  @ViewChild(ChatWindowComponent) chatWindowComponent!: ChatWindowComponent;

  private _chat_window_only = false;

  get is_mobile_device(): boolean {
    return this._themeService.is_mobile_device;
  }

  get chat_window_only(): boolean {
    return this._chat_window_only;
  }

  set chat_window_only(isChatWindowOnly: boolean) {
    this._chat_window_only = isChatWindowOnly;
  }

  private _recipients = [
    {
      image: '../../../../assets/img/faces/cr7.jpg',
      name: 'Cristiano Ronaldo',
      lastMessageTimestamp: '11:23PM',
      lastMessage: 'You: Thats great news!!! Looking forward to begin working with you closeley.',
    },
    {
      image: '../../../../assets/img/faces/selena.jfif',
      name: 'Selena Gomez',
      lastMessageTimestamp: '10:34PM',
      lastMessage: "You: Let's proceed with the contractual agreements and other formalities.",
    },
    {
      image: '../../../../assets/img/faces/Rousey.jpg',
      name: 'Ronda Rousey',
      lastMessageTimestamp: '09:56PM',
      lastMessage: 'You: Kindly, share the post on or before your match.',
    },
    {
      image: '../../../../assets/img/faces/arijit.jpg',
      name: 'Arijit Sign',
      lastMessageTimestamp: '08:20PM',
      lastMessage: 'Arijit: Material recieved.',
    },
    {
      image: '../../../../assets/img/faces/elon.jpg',
      name: 'Elon Musk',
      lastMessageTimestamp: '07:13PM',
      lastMessage: 'Elon: Next spacex event in September.',
    },
    {
      image: '../../../../assets/img/faces/kohli.jpg',
      name: 'Virat Kohli',
      lastMessageTimestamp: '06:43PM',
      lastMessage: 'You: Ad shoot schedule for Tuesday.',
    },
    {
      image: '../../../../assets/img/faces/taylor.jpeg',
      name: 'Taylor Swift',
      lastMessageTimestamp: '05:55PM',
      lastMessage: 'Taylor: My upcoming tour looks like the best occasion.',
    },
    {
      image: '../../../../assets/img/faces/elon.jpg',
      name: 'Elon Musk',
      lastMessageTimestamp: '07:13PM',
      lastMessage: 'Elon: Next spacex event in September.',
    },
    {
      image: '../../../../assets/img/faces/kohli.jpg',
      name: 'Virat Kohli',
      lastMessageTimestamp: '06:43PM',
      lastMessage: 'You: Ad shoot schedule for Tuesday.',
    },
    {
      image: '../../../../assets/img/faces/taylor.jpeg',
      name: 'Taylor Swift',
      lastMessageTimestamp: '05:55PM',
      lastMessage: 'Taylor: My upcoming tour looks like the best occasion.',
    },
  ];

  recipients: any;


  // searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchTerm = new FormControl('');
  subscription?: Subscription;
  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {
    this.recipients = this._recipients;
    this.subscription = this.searchTerm.valueChanges.pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((searchTerm: string) => this.recipients =
        searchTerm.trim().length > 0
          ? this._recipients.filter((r) => r.name.toLowerCase().includes(searchTerm.toLowerCase()))
          : this._recipients
      );
  }

  toggleChatPanel() {
    if (this.is_mobile_device) {
      this._chat_window_only = !this._chat_window_only;
      if (this._chat_window_only) {
        this.chatWindowComponent.scrollToLatestMessage();
      }
    }
  }
}
