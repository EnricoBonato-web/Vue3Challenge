const DataDefinition = {
  /*
toAdd:    header
          0-text :  Spesenabrechnung
          1-columns 0-stack['Mitarbeiter', 'Monat']
data                1-stack: ['Demo User']
          content. 
          0-text: 'Reisen'
trips     1-table - body - 0- ['Beginn', 'Ende', 'Anlass', 'Start', 'Ziel', 'Betrag(EUR)']
          2-text: 'Belege'
expenses  3-table - body - 0- ['Datum', 'Typ', 'Bezeichnung', 'Nummer', 'Betrag(EUR)']
          4-columns - stack ... completed
      */
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
    return { text: currentPage.toString() + ' / ' + pageCount, style: 'right' };
  },
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
    { text: ['Gesamt'], style: 'right' },
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
    tripTable: { columngap: 'auto' },
    tableHeader: { alignment: 'center' },
    right: {
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
  defaultStyle: {},
};
export default DataDefinition;
