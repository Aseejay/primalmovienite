import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit{
link:string = '';
id:string = '';
  constructor(private router:ActivatedRoute){}


watchNow(){
  window.open('https://www.youtube.com/watch?v=' + this.id )
}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.link = 'https://img.youtube.com/vi/'  + res['id']  + '/sddefault.jpg';
      this.id = res['id'];
      console.log(this.link)
    })
  }
}
