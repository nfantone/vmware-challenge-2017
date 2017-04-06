/**
 * Describes the response from a call to http://fixer.io/.
 *
 * @export
 * @interface IExchangeRates
 */
export interface IExchangeRates {
  base: string;
  date: string;
  rates: {
    [key: string]: number
  };
}
