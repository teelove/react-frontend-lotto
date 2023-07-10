export interface IReport {
  dateArrest: string;
  timeArrest: string;
  locationArrest: string;
  suspectorArrest: string;
  evidenceArrest: { i: string; n: number; p: number };
  evidence2Arrest: string;
  dailyVerseArrest: Array<string>;
  dailyBankNumberArrest: Array<string>;
}
