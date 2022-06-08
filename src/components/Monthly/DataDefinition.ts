/*
toAdd:    header
          stack 0-text :  Spesenabrechnung
                1-table -body  0-['Mitarbeiter', 'Monat']
data                           1-['Demo User']
          content. 
          0-text: 'Reisen'
trips     1-table - body - 0- ['Beginn', 'Ende', 'Anlass', 'Start', 'Ziel', 'Betrag(EUR)']
          2-text: 'Belege'
expenses  3-table - body - 0- ['Datum', 'Typ', 'Bezeichnung', 'Nummer', 'Betrag(EUR)']
          4-columns - stack ... completed
      */
import type TripType from '@/type/TripType';
// eslint-disable-next-line @typescript-eslint/ban-types
const DataDefinition: (date: string) => {} = (date: string) => {
  return {
    pageOrientation: 'landscape',
    header: {
      stack: [
        { text: 'Spesenabrechnung', style: 'header' },
        {
          widths: ['auto', 'auto'],
          layout: 'noBorders',
          style: 'marginVe',
          table: {
            body: [
              ['Mitarbeiter', 'Demo User'],
              ['Monat', date],
            ],
          },
        },
      ],
    },
    footer: function (currentPage: number, pageCount: number) {
      return { text: currentPage.toString() + ' / ' + pageCount, style: 'right' };
    },
    pageMargins: [40, 100, 40, 40],
    content: [
      { text: 'Reisen', style: 'header' },
      {
        layout: 'lightHorizontalLines',

        table: {
          headerRows: 1,
          widths: ['auto', 'auto', '*', 'auto', 'auto', '16.6%'],
          body: [['Beginn', 'Ende', 'Anlass', 'Start', 'Ziel', 'Betrag(EUR)']],
        },
      },
      { text: 'Belege', style: 'header' },
      {
        layout: 'lightHorizontalLines',
        style: 'tripTable',
        table: {
          widths: ['auto', '*', '*', 'auto', '16.6%'],
          headerRows: 1,
          body: [['Datum', 'Type', 'Bezeichnung', 'Nummer', 'Betrag(EUR)']],
        },
      },
      { text: ['Gesamt ', '0'], style: 'right' }, //TODO addSumm
      {
        columns: [
          {
            stack: [
              'Unterschrift des Mitarbeiters:',
              'Datum ' +
                new Date().getDay() +
                '.' +
                new Date().getMonth() +
                '.' +
                new Date().getFullYear(),
            ],
          },
          {
            stack: ['Genehmigt:', 'Datum:'],
          },
        ],
      },
    ],
    styles: {
      lineHeight: 1.3,
      marginOr: { margin: [0, 30, 0, 20] },
      marginVe: { margin: [30, 0, 20, 0] },
      tripTable: { columngap: 'auto' },
      tableHeader: { alignment: 'center' },
      right: {
        alignment: 'right',
        margin: 20,
      },
      header: {
        fontSize: 18,
        bold: true,
        margin: [30, 30, 20, 10],
      },
      bigger: {
        fontSize: 15,
        italics: true,
      },
      columnGap: 10,
    },
  };
};
export default DataDefinition;
