const tripDefinition = {
  pageBreak: 'before',
  table: {
    headerRows: 2,
    body: [
      [{ text: 'nome' }],
      [{ text: 'città' }],
      [
        {
          stack: [
            {
              table: {
                body: [
                  [
                    { text: 'Reisedaten', colspan: 2 },

                    { text: 'Reisezeit', colspan: 2 },

                    { text: 'Fahrkosten', colspan: 2 },
                  ],
                ],
              },
            },
            {
              table: {
                body: [
                  [
                    { text: 'Verpflegungspauschale', colspan: 2 },

                    { text: 'Übernachtungspauschale', colspan: 2 },
                  ],
                ],
              },
            },
          ],
        },
      ],
      [{ text: 'Summe Kosten', alignment: 'left' }],
    ],
  },
};
export default tripDefinition;
