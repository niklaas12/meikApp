import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';

@Component({
  standalone: false,
  selector: 'qr',
  templateUrl: './qr.component.html',
})
export class QrComponent implements OnInit {
  result: string = 'Nichts' 
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  constructor(private router: Router) {}

  ngOnInit(): void {   
  }

  public scanCode(code: string): void {
    if (!code) {
      return
    }
    
    this.router.navigate(['exhibit/details', code])
  }
}
