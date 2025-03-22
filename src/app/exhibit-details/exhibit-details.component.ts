import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExhibitDetailsService } from './exhibit-details.service';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  standalone: false,
})
export class ExhibitDetailsComponent implements OnInit {

  public selectedExhbit: any = null;
  public images: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private exhibitDetailsService: ExhibitDetailsService
  ) {}

  ngOnInit(): void {
    const exhibitId = this.route.snapshot.paramMap.get('id')
    this.getExhibitData(exhibitId);
  }

  getExhibitData(exhibitId: string|null): void {
    if (!exhibitId) {
      this.selectedExhbit = null;
      return;
    }

    this.exhibitDetailsService.getExhibitData(exhibitId).subscribe((res) => {
      this.selectedExhbit = res;
      this.selectedExhbit.images.forEach((image: any) => {
        this.exhibitDetailsService.getThumbnail(image.id).subscribe((res) => {
          this.images.push(URL.createObjectURL(res))
        })
      });
    })

  }

}
