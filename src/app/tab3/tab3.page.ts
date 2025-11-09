import { Component } from '@angular/core';
import { SampleDataService } from 'src/services/sample_data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  private sampleDataService: SampleDataService;

  constructor() {
    this.sampleDataService = new SampleDataService();
  }

  getTravelHistory(): { from: string; to: string; color: string; amount: number; date: Date }[] {
    return this.sampleDataService.getTravelHistory('user_001');
  }
}