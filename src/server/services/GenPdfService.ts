import {DataBaseService} from './DataBaseService';
import {User} from '../models/UserModel';
const PDF = require('pdfkit');
const base64 = require('base64-stream');
const Binary = require('mongodb').Binary;

export class GenPdfService {

  public static getPdf = (firstName) => {

    return new Promise((resolve, reject) => {

      DataBaseService.getUser(firstName)
        .then((result: User) => {

          if (!result) {
            resolve('User not found');
          }

          if (result.pdf) {
            resolve('Pdf already generated');
          }

          const user = new User(result, true);
          const doc = new PDF();

          let finalString = '';
          const stream = doc.pipe(base64.encode());

          doc.text(`First Name: ${user.firstName}\nLast Name: ${user.lastName}\n`);
          doc.image('data:image/jpeg;base64,' + JSON.stringify(user.image), 100, 100, {height: 300});
          doc.end();

          stream.on('data', (chunk) => {
            finalString += chunk;
          });

          stream.on('end', () => {

            const pdfB = new Binary(new Buffer(finalString, 'base64'));

            DataBaseService.addPdf(firstName, pdfB)
              .then(() => {
                resolve('Pdf generated');
              });
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
