import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

// @がついているものはデコレーター
@Component({
  /*
  selectorはコンポーネントを識別します。
  セレクターは、ページ上にHTML要素としてレンダリングされるときにAngularコンポーネントに付ける名前です。 
  慣例により、Angularコンポーネントセレクターは接頭辞 app-で始まり、その後にコンポーネント名が続きます。
  */
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
