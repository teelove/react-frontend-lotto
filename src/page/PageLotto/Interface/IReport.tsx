export interface IReport {
  dateArrest: string;
  timeArrest: string;
  locationArrest: string;
  suspectorArrest: string;
  evidenceArrest: { i: string; n: number; p: number };
  evidenceDataArrest: string;
  dailyVerseArrest: string;
  dailyBankNumberArrest: Array<string>;
}
