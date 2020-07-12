import { Component, OnInit } from '@angular/core';
import { Rate } from '../rate';
import { RmsService } from '../rms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rate',
  templateUrl: './add-rate.component.html',
  styleUrls: ['./add-rate.component.scss'],
})
export class AddRateComponent implements OnInit {
  newRate: Rate = new Rate();

  constructor(private rateService: RmsService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.rateService.createRate(this.newRate).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.newRate = new Rate();
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rates']);
  }
}
