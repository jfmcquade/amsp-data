import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/shared/service/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalGD : number = 0;
  totalSB : number = 0;

  constructor(
    private dataApi : DataService
  ) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles() {
    this.dataApi.getAllFiles().subscribe((res: any) => {
      res.map((e: any) => {
        if (e.serveur == "Google Drive") this.totalGD++;
        if (e.serveur == "Storage Bucket") this.totalSB++;
      })
    });
  }

}
