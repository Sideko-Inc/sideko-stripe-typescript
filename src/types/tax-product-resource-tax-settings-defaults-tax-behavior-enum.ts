/**
 * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
 */
export type TaxProductResourceTaxSettingsDefaultsTaxBehaviorEnum =
  | "exclusive"
  | "inclusive"
  | "inferred_by_currency";
