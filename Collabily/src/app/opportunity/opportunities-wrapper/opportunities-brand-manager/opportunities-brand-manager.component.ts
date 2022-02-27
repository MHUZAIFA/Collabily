import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs';
import { ChatWindowComponent } from 'src/app/chats/chat-wrapper/chat-window/chat-window.component';
import { ThemeService } from 'src/app/components/services/theme.service';
import { CATEGORIES } from '../opportunity-modal-wrapper/mock/Categories';

@Component({
  selector: 'app-opportunities-brand-manager',
  templateUrl: './opportunities-brand-manager.component.html',
  styleUrls: ['./opportunities-brand-manager.component.css'],
})
export class OpportunitiesBrandManagerComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('area_chart_container') el: ElementRef;
  containerHeight: number = undefined;
  containerWidth: number = undefined;
  filterBy: string = 'Created Date';
  panelOpenState: boolean = false;
  facebook = faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;
  youtube = faYoutube;
  category = new FormControl();
  categories: string[] = CATEGORIES;

  opened = [
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      title: 'Promo for Air Force 1 sneakers',
      opportunity_id: '2c816d02-4aa8-4987-b5da-ac6180899c69',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'T-Shirt'],
      postedBy: 'Khan, Azhar',
      region: 'Mumbai, India',
      postedOn: '12 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      title: 'Mercurial v3.0 football shoes',
      opportunity_id: 'f87c455a-53ee-46b6-a3aa-a7bcf7221e69',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'Shoes', 'Mercurial'],
      postedBy: 'Huzaifa, Mohammed',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      title: 'Jordans 1.3 sneakers',
      opportunity_id: '695f7255-99d0-41a3-9d40-56928d05978b',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Casual', 'Shorts', 'Lifestyle'],
      postedBy: 'Mukkat, Geo',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
  ];

  closed = [
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: '1631f8f2-ed52-4e87-b8a4-82a99108cfd7',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'T-Shirt'],
      postedBy: 'Khan, Azhar',
      region: 'Mumbai, India',
      postedOn: '12 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: '3a50924a-0044-4aff-b80a-cccc82b48946',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'Shoes', 'Mercurial'],
      postedBy: 'Huzaifa, Mohammed',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: '572a42c6-38c0-435e-8969-6bc0c05ed52a',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Casual', 'Shorts', 'Lifestyle'],
      postedBy: 'Mukkat, Geo',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
  ];

  responders = [
    {
      name: 'Marques Brownlee',
      image: '../../../../assets/img/faces/mkbhd.jpg',
      categories: ['Technology', 'Youtuber'],
      followers: {
        insta: '3.3M',
        facebook: '600K',
        twitter: '5.2M',
        youtube: '15.3M',
      },
    },
    {
      name: 'Selena Gomez',
      image: '../../../../assets/img/faces/selena.jfif',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      },
    },
    {
      name: 'Elon Musk',
      image: '../../../../assets/img/faces/elon.jpg',
      categories: ['Space', 'Technology', 'Automobile'],
      followers: { insta: '0', facebook: '0', twitter: '73.1M', youtube: '0' },
    },
    {
      name: 'Vineeta Singh',
      image: '../../../../assets/img/faces/vineeta.jpg',
      categories: ['Cosmetics', 'Business'],
      followers: {
        insta: '320K',
        facebook: '2.35K',
        twitter: '47K',
        youtube: '0',
      },
    },
    {
      name: 'The Weeknd',
      image: '../../../../assets/img/faces/weeknd.jpeg',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      },
    },
  ];

  @ViewChild(ChatWindowComponent) chatWindowComponent!: ChatWindowComponent;

  private _opportunity_summary_window_only = false;

  get is_mobile_device(): boolean {
    return this._themeService.is_mobile_device;
  }

  get opportunity_summary_window_only(): boolean {
    return this._opportunity_summary_window_only;
  }

  set opportunity_summary_window_only(isChatWindowOnly: boolean) {
    this._opportunity_summary_window_only = isChatWindowOnly;
  }

  searchTerm = new FormControl('');
  subscription?: Subscription;
  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.containerHeight = this.el.nativeElement.clientHeight;
      this.containerWidth = this.el.nativeElement.clientWidth;
    }, 10);
  }

  toggleFilter() {
    this.panelOpenState = !this.panelOpenState;
  }

  toggleOpportunityView() {
    if (this.is_mobile_device) {
      this._opportunity_summary_window_only =
        !this._opportunity_summary_window_only;
      setTimeout(() => {
        this.containerHeight = this.el.nativeElement.clientHeight;
        this.containerWidth = this.el.nativeElement.clientWidth;
      }, 100);
    }
  }
}
