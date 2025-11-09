import { Component } from '@angular/core';
import { SampleDataService } from 'src/services/sample_data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private sampleDataService: SampleDataService) {}

  saldoFormatted(): string {
    return "$" + this.sampleDataService.getPendingBalance("user_001").toFixed(2);
  }

  getRoutes(): { from: string; to: string; color: string }[] {
    return this.sampleDataService.getRoutes("user_001");
  }

  getLastTravelCost(userId: string): number {
    return this.sampleDataService.getLastTravelCost(userId);
  }

  getLastTravelRoute(): { from: string; to: string; color: string } {
    return this.sampleDataService.getLastTravelRoute("user_001");
  }
}
