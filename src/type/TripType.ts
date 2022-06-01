/*
Purpose of the trip (e.g., "Company Weber GmbH visited, project management")
Start time with selection field for date and time (21.05.2022, 06:30)
End time with selection field for date and time (23.05.2022, 23:45)
Start location (e.g., "Berlin")
Destination location (e.g., "Hamburg")
Kilometers traveled. Numeric input field.
In addition: Link to a map app (like Google Maps) with start and destination location, in order to determine the distance
Number of overnight stays to be charged at a fixed rate
Number of breakfasts received
Number of lunches received
Number of dinners received
*/

type TripType = {
  id: string;
  purpose: string;
  startTime: Date;
  endDate: Date;
  startLocation: string;
  endLocation: string;
  overnight: number;
  breakfasts: number;
  lunches: number;
  dinners: number;
};
export default TripType;
