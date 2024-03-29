import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/shared/service/data/data.service';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.scss']
})
export class ViewFilesComponent implements OnInit {

  id !: any;
  filesObj !: any;

  constructor(
    private route: ActivatedRoute,
    private dataApi : DataService
    ) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getFilesById();
  }

  getFilesById(){
    this.dataApi.getFilesById(this.id).subscribe((res: any) =>{
      this.filesObj = res;
      console.log(this.filesObj);
    });
  }

  
}
