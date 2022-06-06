import type TripType from '@/type/TripType';

const tripDefinition: (trip: TripType) => {} = (trip: TripType) => {
  return {
    pageBreak: 'before',
    layout: 'noBorders',
    table: {
      headerRows: 2,
      body: [
        [{ text: trip.purpose }],
        [{ text: trip.startLocation + ' - ' + trip.endLocation }],
        [
          {
            stack: [
              {
                layout: 'noBorders',
                table: {
                  layout: 'noBorders',
                  body: [
                    [{ text: 'Reisedaten' }, { text: 'Reisezeit' }, { text: 'Fahrkosten' }],
                    [
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Anlass', trip.purpose],
                            ['Start', trip.startLocation],
                            ['Ziel', trip.endLocation],
                          ],
                        },
                      },
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Beginn', trip.startTime],
                            ['Ende', trip.endTime],
                          ],
                        },
                      },
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Stecke', trip.kilometersTravelled],
                            ['Fahrkosten', trip.id], //TODO insert cost
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                layout: 'noBorders',
                table: {
                  body: [
                    [{ text: 'Verpflegungspauschale' }, { text: 'Übernachtungspauschale' }],
                    [
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Erhaltene Frühstücke', trip.breakfasts],
                            ['Erhaltene Mittagessen', trip.lunches],
                            ['Erhaltene Abendessen', trip.dinners],
                            ['Pauschale für Verpflegung', 0], // TODO add function
                          ],
                        },
                      },
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Berechnete Nächte', trip.overnight],
                            ['Pauschale für Übernachtungen', '0'], //TODO addfunction
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
            ],
          },
        ],
        [{ text: ['Summe Kosten', '0'], alignment: 'left' }], //TODO add summ
      ],
    },
  };
};
export default tripDefinition;
