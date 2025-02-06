import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  id:string = '';
  copied = false;
  youtubeLink = '';
copyText(){
  this.copied = true;
  navigator.clipboard.writeText('*Watch Now*\n' + 'https://nollytv.vercel.app/' + this.id)
}

generatePost(){
  let arrayOne = this.youtubeLink.split('/');
  console.log(arrayOne)
  let arrayTwo = arrayOne[3].split('?')
  this.id =  arrayTwo[0]
  console.log(arrayTwo)
}
}
