import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  colorsB=["turquoise","gray","blue","salmon","beige"];
  z="";
  changeBackground(){
    let max=this.colorsB.length;
    let r=Math.floor(Math.random() * max);
    this.z=this.colorsB[r];
    console.log("Background Actual: "+this.z);
  }

  fonts=["Cambria","Times New Roman","Monaco","Roboto","Ginebra"];
  y="";
  changeFontFamily(){
    let max=this.fonts.length;
    let r=Math.floor(Math.random() * max);
    this.y=this.fonts[r];
    console.log("Letra Actual: "+this.y);

  }
 colorsL=["brown","purple","pink","green","yellow"];
 x="";
  changeColor(){
    let max=this.colorsL.length;
    let r=Math.floor(Math.random() * max);
    this.x=this.colorsL[r];
    console.log("Color Actual: "+this.x);

  }
}
