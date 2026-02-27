import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalHeader } from "../../Shared-Module/professional-header/professional-header";
import { Navbar } from '../../Shared-Module/navbar/navbar';
  
@Component({
  selector: 'app-professional-dashboard',
  imports: [CommonModule, ProfessionalHeader,Navbar],
  templateUrl: './professional-dashboard.html',
  styleUrl: './professional-dashboard.css',
})
export class ProfessionalDashboard{

  banners = [
     { img: '/images/electric.jpg', title: 'Need a Electrician?', subtitle: 'Fix Electrical Issues' ,button :'View Requests' },
     {img: '/images/petrol.jpg', title: 'Need a Plumber?', subtitle: 'Fix Plumbing Issues' ,button :'View Earnings' }
  ]

  icons=[
    {img : '' ,heading :'' ,subheading :''}
  ]
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