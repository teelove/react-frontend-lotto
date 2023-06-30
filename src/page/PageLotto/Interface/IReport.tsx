export interface IReport {
  dateArrest: string;
  timeArrest: string;
  locationArrest: string;
  suspectorArrest: string;
  evidenceArrest: [string,number,number];
  evidence2Arrest: Array<string>;
  dailyVerseArrest: Array<string>;
  dailyBankNumberArrest: Array<string>;
}
