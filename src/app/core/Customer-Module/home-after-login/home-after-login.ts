import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Header } from '../../Shared-Module/header/header';
import { Navbar } from '../../Shared-Module/navbar/navbar';
import { link } from 'fs';
@Component({
  selector: 'app-home-after-login',
  imports: [CommonModule, RouterLink, RouterLinkActive, Header, Navbar],
  templateUrl: './home-after-login.html',
  styleUrl: './home-after-login.css',
})
export class HomeAfterLogin {

  banners = [
     { img: '/images/electric.jpg', title: 'Need a Electrician?', subtitle: 'Fix Electrical Issues' ,button : 'Book Now',link : '/service'},
     {img: '/images/petrol.jpg', title: 'Need a Electrician?', subtitle: 'Fix Electrical Issues', button : 'Book Now',link : '/service' },
      {img: '/images/petrol.jpg', title: 'Need a Plumber?', subtitle: 'Fix Plumbing Issues', button : 'Book Now',link : '/service' }
  ]

  services = [
    {
      title: 'Plumber',
      icon: 'fa-solid fa-wrench',
      iconClass: 'plumber'
    },
    {
      title: 'Electrician',
      icon: 'fa-solid fa-lightbulb',
      iconClass: 'electrician'
    },    {
      title: 'Plumber',
      icon: 'fa-solid fa-wrench',
      iconClass: 'plumber'
    },
    {
      title: 'Electrician',
      icon: 'fa-solid fa-lightbulb',
      iconClass: 'electrician'
    }
    // Add more services as needed
  ];

  serviceCurrentIndex = 0;
    // Carousel navigation for services
    // Show two cards at a time
    nextService() {
      if (this.serviceCurrentIndex < this.services.length - 2) {
        this.serviceCurrentIndex++;
      }
    }

    prevService() {
      if (this.serviceCurrentIndex > 0) {
        this.serviceCurrentIndex--;
      }
    }
  currentIndex = 0;
  // Touch / drag state
  private touchStartX: number | null = null;
  private touchCurrentX: number | null = null;
  private isDragging = false;

  // Scroll indices for horizontal navigation
  trendingScrollIndex = 0;
  essentialScrollIndex = 0;
  sponsoredScrollIndex = 0;
  categoriesScrollIndex = 0;
  // Fix for ExpressionChangedAfterItHasBeenCheckedError
  setCurrentIndex(i: number) {
    setTimeout(() => {
      this.currentIndex = i;
    });
  }
  
  // Touch handlers for mobile
  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging || this.touchStartX === null) return;
    this.touchCurrentX = event.touches[0].clientX;
  }

  onTouchEnd(_event: TouchEvent) {
    if (!this.isDragging || this.touchStartX === null || this.touchCurrentX === null) {
      this.resetTouch();
      return;
    }
    const dx = this.touchCurrentX - this.touchStartX;
    if (dx > 50) {
      this.prev();
    } else if (dx < -50) {
      this.next();
    }
    this.resetTouch();
  }

  // Mouse drag handlers for desktop
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.touchStartX = event.clientX;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging || this.touchStartX === null) return;
    this.touchCurrentX = event.clientX;
  }

  onMouseUp(_event: MouseEvent) {
    if (!this.isDragging) return;
    if (this.touchStartX === null || this.touchCurrentX === null) {
      this.resetTouch();
      return;
    }
    const dx = this.touchCurrentX - this.touchStartX;
    if (dx > 50) {
      this.prev();
    } else if (dx < -50) {
      this.next();
    }
    this.resetTouch();
  }

  onMouseLeave(_event: MouseEvent) {
    // if user drags out of container, finalize
    if (this.isDragging) this.onMouseUp(_event as any);
  }
    private resetTouch() {
    this.isDragging = false;
    this.touchStartX = null;
    this.touchCurrentX = null;
  }
    next() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  // Previous slide
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

    
}
