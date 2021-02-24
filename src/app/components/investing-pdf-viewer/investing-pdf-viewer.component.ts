import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investing-pdf-viewer',
  templateUrl: './investing-pdf-viewer.component.html',
  styleUrls: ['./investing-pdf-viewer.component.scss']
})
export class InvestingPdfViewerComponent implements OnInit {

  PdfSrc ="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }



}
