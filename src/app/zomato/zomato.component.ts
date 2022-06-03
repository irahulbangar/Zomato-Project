import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zomato',
  templateUrl: './zomato.component.html',
  styleUrls: ['./zomato.component.css']
})
export class ZomatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calc() {
    this.montotal = this.caluclate(this.mon);
    this.tuetotal = this.caluclate(this.tue);
    this.wedtotal = this.caluclate(this.wed);
    this.thutotal = this.caluclate(this.thu);
    this.fritotal = this.caluclate(this.fri);
    this.sattotal = this.caluclate(this.sat);
    this.suntotal = this.caluclate(this.sun);
    this.Total = this.montotal + this.tuetotal + this.wedtotal + this.thutotal + this.fritotal + this.sattotal + this.suntotal;

    if (this.Total <= 0) {
      this.remark = 'Fired';
    } else if (this.Total > 0 && this.Total <= 1000) {
      this.remark = 'You need to improve';
    } else if (this.Total > 1000 && this.Total <= 5000) {
      this.remark = 'Good job try some more...';
    } else if (this.Total > 5000 && this.Total <= 10000) {
      this.remark = 'Excellent Job...!!';
    } else if (this.Total > 10000) {
      this.remark = 'Avenger...!!!';
    }
  }
  caluclate(delivery: number) {
    let total = 0;
    if (delivery == 0) {
      total = -200;
    } else if (delivery > 0 && delivery < 5) {
      total = delivery * 100;
    }
    else if (delivery >= 5 && delivery <= 10) {
      total = (delivery * 100) + (delivery * 100 * (0.05));
    } else if (delivery > 10 && delivery < 15) {
      total = (delivery * 100) + (delivery * 100 * (0.10));
    } else if (delivery >= 15) {
      total = (delivery * 100) + (delivery * 100 * (0.15));
    }
    return total;

    // this.tuetotal = this.tue * 100;
    // if (this.tue == 0) {
    //   this.tuetotal = -200;
    // }
    // else if (this.tue >= 5 && this.tue <= 10) {
    //   this.tuetotal = (this.tue * 100) + (this.tue * 100 * (0.05));
    // } else if (this.tue > 10 && this.tue < 15) {
    //   this.tuetotal = (this.tue * 100) + (this.tue * 100 * (0.10));
    // } else if (this.tue >= 10) {
    //   this.tuetotal = (this.tue * 100) + (this.tue * 100 * (0.15));
    // }


    // this.wedtotal = this.wed * 100;
    // if (this.wed == 0) {
    //   this.wedtotal = -200;
    // }
    // else if (this.wed >= 5 && this.wed <= 10) {
    //   this.wedtotal = (this.wed * 100) + (this.wed * 100 * (0.05));
    // } else if (this.wed > 10 && this.wed <= 15) {
    //   this.wedtotal = (this.wed * 100) + (this.wed * 100 * (0.10));
    // } else if (this.wed > 15) {
    //   this.wedtotal = (this.wed * 100) + (this.wed * 100 * (0.15));
    // }


    // this.thutotal = this.thu * 100;
    // if (this.thu == 0) {
    //   this.thutotal = -200;
    // }
    // else if (this.thu >= 5 && this.thu <= 10) {
    //   this.thutotal = (this.thu * 100) + (this.thu * 100 * (0.05));
    // } else if (this.thu > 10 && this.thu <= 15) {
    //   this.thutotal = (this.thu * 100) + (this.thu * 100 * (0.10));
    // } else if (this.thu > 15) {
    //   this.thutotal = (this.thu * 100) + (this.thu * 100 * (0.15));
    // }

    // this.fritotal = this.fri * 100;
    // if (this.fri == 0) {
    //   this.fritotal = -200;
    // }
    // else if (this.fri >= 5 && this.fri <= 10) {
    //   this.fritotal = (this.fri * 100) + (this.fri * 100 * (0.05));
    // } else if (this.fri > 10 && this.fri <= 15) {
    //   this.fritotal = (this.fri * 100) + (this.fri * 100 * (0.10));
    // } else if (this.fri > 15) {
    //   this.fritotal = (this.fri * 100) + (this.fri * 100 * (0.15));
    // }

    // this.sattotal = this.sat * 100;
    // if (this.sat == 0) {
    //   this.sattotal = -200;
    // }
    // if (this.sat >= 5 && this.sat <= 10) {
    //   this.sattotal = (this.sat * 100) + (this.sat * 100 * (0.05));
    // } else if (this.sat > 10 && this.sat <= 15) {
    //   this.sattotal = (this.sat * 100) + (this.sat * 100 * (0.10));
    // } else if (this.sat > 15) {
    //   this.sattotal = (this.sat * 100) + (this.sat * 100 * (0.15));
    // }

    // this.suntotal = this.sun * 100;
    // if (this.sun == 0) {
    //   this.suntotal = -200;
    // }
    // if (this.sun >= 5 && this.sun <= 10) {
    //   this.suntotal = (this.sun * 100) + (this.sun * 100 * (0.05));
    // } else if (this.sun > 10 && this.sun <= 15) {
    //   this.suntotal = (this.sun * 100) + (this.sun * 100 * (0.10));
    // } else if (this.sun > 15) {
    //   this.suntotal = (this.sun * 100) + (this.sun * 100 * (0.15));
    // }

    // this.Total = (this.montotal) + (this.tuetotal) + (this.wedtotal) + (this.thutotal) + (this.fritotal) + (this.sattotal) + (this.suntotal);
  }
}
