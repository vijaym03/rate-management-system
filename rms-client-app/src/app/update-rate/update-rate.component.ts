import { Component, OnInit } from '@angular/core';
import { Rate } from '../rate';
import { RmsService } from '../rms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-rate',
  templateUrl: './update-rate.component.html',
  styleUrls: ['./update-rate.component.scss'],
})
export class UpdateRateComponent implements OnInit {
  rate: Rate = new Rate();

  constructor(private rateService: RmsService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.rateService.updateRate(this.rate).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.rate = new Rate();
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rates']);
  }
}
