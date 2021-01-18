import { Component, OnInit } from '@angular/core';
import { DocxToolService } from '../../service/docx-tool.service';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-docx-view',
  templateUrl: './docx-view.component.html',
  styleUrls: ['./docx-view.component.css']
})
export class DocxViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public download(): void {
    var docxTool = new DocxToolService();
    var docResult = docxTool.create();

    Packer.toBlob(docResult).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
}
