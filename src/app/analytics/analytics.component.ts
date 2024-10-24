import { Component } from '@angular/core';
import { KENDO_MAP, TileUrlTemplateArgs } from '@progress/kendo-angular-map';
import { CardModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { SeriesLabelsContentArgs } from "@progress/kendo-angular-charts";
import { IntlService } from "@progress/kendo-angular-intl";

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [KENDO_MAP, CardModule, ChartsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  tileSubdomains = ["a", "b", "c"];
  tileUrl = (e: TileUrlTemplateArgs): string =>
    `https://mt.google.com/vt/lyrs=m&x=${e.x}&y=${e.y}&z=${e.zoom}`;

  center = [23.8103, 90.4125];
  
  markers = [{ latlng: [23.8103, 90.4125], name: "Dhaka" }];

  public pieData = [
    { category: "Clothing", value: 0.4059 },
    { category: "Groceries", value: 0.1211 },
    { category: "Beauty & Personal Care", value: 0.0933 },
    { category: "Home & Garden", value: 0.2245 },
    { category: "Electronics", value: 0.1552 },
  ];

  constructor(private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: SeriesLabelsContentArgs): string {
    return `${args.dataItem.category} items sold: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`;
  }

}
