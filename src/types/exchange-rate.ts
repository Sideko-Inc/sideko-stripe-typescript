import {
  ExchangeRateRates,
  External$ExchangeRateRates,
  Schemas$ExchangeRateRates,
} from "./exchange-rate-rates";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * `ExchangeRate` objects allow you to determine the rates that Stripe is currently
 * using to convert from one currency to another. Since this number is variable
 * throughout the day, there are various reasons why you might want to know the current
 * rate (for example, to dynamically price an item for a user with a default
 * payment in a foreign currency).
 *
 * Please refer to our [Exchange Rates API](https://stripe.com/docs/fx-rates) guide for more details.
 *
 * *[Note: this integration path is supported but no longer recommended]* Additionally,
 * you can guarantee that a charge is made with an exchange rate that you expect is
 * current. To do so, you must pass in the exchange_rate to charges endpoints. If the
 * value is no longer up to date, the charge won't go through. Please refer to our
 * [Using with charges](https://stripe.com/docs/exchange-rates) guide for more details.
 *
 * -----
 *
 * &nbsp;
 *
 * *This Exchange Rates API is a Beta Service and is subject to Stripe's terms of service. You may use the API solely for the purpose of transacting on Stripe. For example, the API may be queried in order to:*
 *
 * - *localize prices for processing payments on Stripe*
 * - *reconcile Stripe transactions*
 * - *determine how much money to send to a connected account*
 * - *determine app fees to charge a connected account*
 *
 * *Using this Exchange Rates API beta for any purpose other than to transact on Stripe is strictly prohibited and constitutes a violation of Stripe's terms of service.*
 */
export type ExchangeRate = {
  /**
   * Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "exchange_rate";
  /**
   * Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.
   */
  rates: ExchangeRateRates;
};

/**
 * @internal
 * ExchangeRate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExchangeRate = {
  id: string;
  object: "exchange_rate";
  rates: External$ExchangeRateRates;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExchangeRate
 */
const SchemaIn$ExchangeRate: z.ZodType<
  ExchangeRate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    object: z.enum(["exchange_rate"]),
    rates: Schemas$ExchangeRateRates.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      object: "object",
      rates: "rates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExchangeRate
 */
const SchemaOut$ExchangeRate: z.ZodType<
  External$ExchangeRate, // output type of this zod object
  z.ZodTypeDef,
  ExchangeRate // the object to be transformed
> = z
  .object({
    id: z.string(),
    object: z.enum(["exchange_rate"]),
    rates: Schemas$ExchangeRateRates.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      object: "object",
      rates: "rates",
    });
  });

export const Schemas$ExchangeRate = {
  in: SchemaIn$ExchangeRate,
  out: SchemaOut$ExchangeRate,
};
