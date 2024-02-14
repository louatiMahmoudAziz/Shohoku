import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  Object = Object; // Declare Object as a property in your component class

  constructor() {}

  user = {
    name: "Sakuragi Hanamichi",
    age: 22,
    team: "Kainan",
    ImgUrl: "https://butwhytho.net/wp-content/uploads/2023/07/Hanamichi-Sakuragi-But-Why-Tho.jpg"
  };

  players=[
    {name:'Akagi',
     number:4,
     post:'center',
     team:'Shohoku'
    },
    {name:'Ryota',
     number:7,
     post:'Point guard',
     team:'Shohoku'
    },
    {name:'Sakuragi',
     number:10,
     post:'Power forward',
     team:'Shohoku'
    },
    {name:'Rukawa',
     number:11,
     post:'Small forward',
     team:'Shohoku'
    },
    {name:'Mitsui',
     number:14,
     post:'Shooting guard',
     team:'Shohoku'
    },
    {name:'Maki',
     number:4,
     post:'Center',
     team:'Kainan'
    }
  ]

  team: any;
  isPlaying: boolean | null = null;
  Img2 = "https://i.ebayimg.com/images/g/kioAAOSw~BVjjggk/s-l1200.jpg";
  display = false;
  isScoring: string | null=null;
  darkMode: boolean = false;

  toggleDarkMode(enableDarkMode: boolean): void {
    this.darkMode = enableDarkMode;
  }
  

  updateIsPlaying(value: boolean): void {
    this.isPlaying = value;
  }

  updateIsScoring(value: string): void {
    this.isScoring = value;
  }

  get mainStyles() {
    return {
      'background-color': this.darkMode ? '#333333' : '#f5f5f5',
      'color': this.darkMode ? '#ffffff' : '#333333'
    };
  }
}
