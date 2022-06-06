const DataDefinition = {
  content: [
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
    { text: 'Reisen', style: 'header' },
    {
      layout: 'lightHorizontalLines',
      table: {
        headerRows: 1,
        width: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],

        body: [
          ['Beginn', 'Ende', 'Anlass', 'Start', 'Ziel', 'Betrag(EUR)'],
          [
            'Beginn',
            'Ende',
            'sadssssssssssssssssssssasdasdasdasd  sa as ssssssssssssss',
            'Start',
            'Ziel',
            'Betrag(EUR)',
          ],
        ],
      },
    },
    { text: 'Belege', style: 'header' },
    {
      layout: 'lightHorizontalLines',
      table: {
        headerRows: 1,
        width: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],

        body: [
          ['Datum', 'Typ', 'Bezeichnung', 'Nummer', 'Betrag(EUR)'],
          [
            'Beginn',
            'Ende',
            'sadssssssssssssssssssssasdasdasdasd  sa as ssssssssssssss',
            'Start',
            'Ziel',
          ],
        ],
      },
    },
    { text: 'Spesenabrechnung', style: 'header' },
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
      style: {
        pageBreak: 'after',
      },
    },
    { text: 'Spesenabrechnung', pageBreak: 'before' },
  ],
  styles: {
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
