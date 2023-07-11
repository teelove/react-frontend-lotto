export interface IReport {
  dateArrest: string;
  timeArrest: string;
  locationArrest: string;
  suspectorArrest: string;
  evidenceArrest: { i: string; n: number; p: number };
  evidence2Arrest: { i: string; n: number; p: number };
  dailyVerseArrest: string;
  dailyBankNumberArrest: Array<string>;
}
