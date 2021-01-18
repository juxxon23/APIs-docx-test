import * as fs from 'fs';
import { Injectable } from '@angular/core';
import { Document, Header, Footer, Media, Packer, Paragraph, TextRun } from 'docx';

@Injectable({
  providedIn: 'root'
})
export class DocxToolService {

  constructor() { }

  doc = new Document();
  //imageSena = Media.addImage(this.doc, "https://i.imgur.com/qKRS7aG.png");

  public create(): Document { 
    
    this.doc.addSection({
      properties: {},
      children: [
          new Paragraph({
              children: [
                  new TextRun("Hello World"),
                  new TextRun({
                      text: "Foo Bar",
                      bold: true,
                  }),
                  new TextRun({
                      text: "\tGithub is the best",
                      bold: true,
                  }),
              ],
          }),
      ],
  });
  return this.doc;
  }
}
