/**
 * If `category` is `cash`, one of:
 *
 *  - `checking`
 *  - `savings`
 *  - `other`
 *
 * If `category` is `credit`, one of:
 *
 *  - `mortgage`
 *  - `line_of_credit`
 *  - `credit_card`
 *  - `other`
 *
 * If `category` is `investment` or `other`, this will be `other`.
 */
export type FinancialConnectionsAccountSubcategoryEnum =
  | "checking"
  | "credit_card"
  | "line_of_credit"
  | "mortgage"
  | "other"
  | "savings";
