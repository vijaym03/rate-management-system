import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RmsService } from '../rms.service';
import { Rate } from '../rate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-rate',
  templateUrl: './display-rate.component.html',
  styleUrls: ['./display-rate.component.scss'],
})
export class DisplayRateComponent implements OnInit {
  rates: Observable<Rate[]>;

  constructor(private rateService: RmsService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rates = this.rateService.getRateList();
  }

  deleteRate(id: number) {
    this.rateService.deleteRate(id).subscribe(
      (data) => {
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateRate(rate: Rate) {
    this.router.navigate(['/update']);
  }
}
