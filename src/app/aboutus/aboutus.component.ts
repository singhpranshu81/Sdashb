import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent {
  title = 'From Our Kitchen to Your Table: The Ultimate Food Delivery Experience :)';
  mission = 'The Worldwide Leader in Food Delivery';
  
  ratings = {
    fiveStar: 93,
    fourStar: 90,
    threeStar: 30,
    twoStar: 5,
    oneStar: 0
  };

  stats = {
    happyCustomers: 232,
    items: 121,
    supportHours: 1463,
    hardWorkers: 15
  };

  teamMembers = [
    {
      name: 'Darshan Parmar',
      image: 'assets/IMG1.jpg',
      twitter: 'https://twitter.com/darshankparmar',
      github: 'https://github.com/darshankparmar',
      linkedin: 'https://www.linkedin.com/in/darshankparmar/'
    },
    {
      name: 'Harsh Patel',
      image: 'assets/IMG1.jpg',
      twitter: 'https://twitter.com/7Har',
      github: 'https://github.com/7Har',
      linkedin: 'https://www.linkedin.com/in/7Har/'
    },
    {
      name: 'Bhavesh Parmar',
      image: 'assets/IMG1.jpg',
      twitter: 'https://twitter.com/Blparmar007',
      github: 'https://github.com/Blparmar007',
      linkedin: 'https://www.linkedin.com/in/blparmar007/'
    }
  ];

  getRatingClass(star: number): string {
    switch (star) {
      case 5:
        return 'bg-success'; // Green for 5 stars
      case 4:
        return 'bg-info'; // Light Blue for 4 stars
      case 3:
        return 'bg-warning'; // Yellow for 3 stars
      case 2:
        return 'bg-danger'; // Red for 2 stars
      case 1:
        return 'bg-secondary'; // Gray for 1 star
      default:
        return '';
    }
  }
}
