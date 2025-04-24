/**
 * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
 */
export type TestHelperTreasuryReceivedCreditCreateBodyNetworkEnum =
  | "ach"
  | "us_domestic_wire";
