const DataDefinition = {
  header: [
    { text: 'Spesenabrechnung', style: 'header' },
    {
      columns: [
        {
          width: 'auto',
          stack: ['Mitarbeiter', 'Monat'],
        },
        {
          width: 'auto',
          stack: ['Demo User'],
        },
      ],
    },
  ],
  footer: function (currentPage: number, pageCount: number) {
    return { text: currentPage.toString() + ' / ' + pageCount, style: 'left' };
  },
  content: [
    { text: 'Reisen', style: 'header' },
    {
      layout: 'lightHorizontalLines',
      table: {
        headerRows: 1,
        width: ['auto', 'auto', 200, 'auto', 'auto', 'auto'],

        body: [['Beginn', 'Ende', 'Anlass', 'Start', 'Ziel', 'Betrag(EUR)']],
      },
    },
    { text: 'Belege', style: 'header' },
    {
      layout: 'lightHorizontalLines',
      table: {
        headerRows: 1,
        width: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],

        body: [['Datum', 'Type', 'Bezeichnung', 'Nummer', 'Betrag(EUR)']],
      },
    },
    { text: ['Gesamt'], style: 'left' },
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
    left: {
      alignment: 'right',
      margin: 20,
    },
    header: {
      fontSize: 18,
      bold: true,
    },
    bigger: {
      fontSize: 15,
      italics: true,
    },
  },
  defaultStyle: {
    columnGap: 30,
  },
};
export default DataDefinition;
