import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  standalone: false,
  selector: 'qr',
  templateUrl: './qr.component.html',
})
export class QrComponent implements OnInit {
  result: string = 'Nichts' 
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  ngOnInit(): void {
    console.log('works')
    
  }

  public scanCode(code: string): void {
    this.result = code
  }
}
