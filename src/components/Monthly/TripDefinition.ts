import type TripType from '@/type/TripType';
import { CalcDate, FormattData, FormattEuro } from '@/type/UtilityFunctions';

const tripDefinition: (trip: TripType) => {} = (trip: TripType) => {
  return {
    pageBreak: 'before',
    layout: 'noBorders',
    table: {
      headerRows: 2,
      body: [
        [{ text: 'Reisen', style: 'header' }],
        [{ text: trip.startLocation + ' - ' + trip.endLocation }],
        [
          {
            stack: [
              {
                layout: 'noBorders',
                style: 'marginOr',
                table: {
                  layout: 'noBorders',
                  body: [
                    ['Reisedaten', 'Reisezeit', 'Fahrkosten'],
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
                            ['Beginn', FormattData(new Date(trip.startTime))],
                            ['Ende', FormattData(new Date(trip.endTime))],
                          ],
                        },
                      },
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Stecke', trip.kilometersTravelled.toString()],
                            ['Fahrkosten', FormattEuro(trip.kilometersTravelled / (10 / 3))], //TODO is it right?
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                layout: 'noBorders',
                style: 'marginOr',
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
                            [
                              'Pauschale für Verpflegung',
                              FormattEuro(
                                CalcDate(new Date(trip.startTime), new Date(trip.endTime)) -
                                  4.8 * trip.breakfasts -
                                  9.6 * trip.lunches -
                                  9.6 * trip.dinners,
                              ),
                            ], // TODO add function
                          ],
                        },
                      },
                      {
                        layout: 'noBorders',
                        table: {
                          body: [
                            ['Berechnete Nächte', trip.overnight],
                            ['Pauschale für Übernachtungen', FormattEuro(trip.overnight)], //TODO addfunction
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
        [
          {
            text: [
              'Summe Kosten ',
              FormattEuro(
                CalcDate(new Date(trip.startTime), new Date(trip.endTime)) -
                  4.8 * trip.breakfasts -
                  9.6 * trip.lunches -
                  9.6 * trip.dinners +
                  trip.kilometersTravelled / (10 / 3),
              ),
            ],
            alignment: 'right',
          },
        ], //TODO add summ
      ],
    },
  };
};
export default tripDefinition;
