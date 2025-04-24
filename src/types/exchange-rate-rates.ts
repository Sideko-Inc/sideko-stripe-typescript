import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.
 */
export type ExchangeRateRates = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * ExchangeRateRates without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExchangeRateRates = {
  [additionalProperty: string]: External$ExchangeRateRates | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExchangeRateRates
 */
const SchemaIn$ExchangeRateRates: z.ZodType<
  ExchangeRateRates, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.number())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExchangeRateRates
 */
const SchemaOut$ExchangeRateRates: z.ZodType<
  External$ExchangeRateRates, // output type of this zod object
  z.ZodTypeDef,
  ExchangeRateRates // the object to be transformed
> = z
  .object({})
  .catchall(z.number())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ExchangeRateRates = {
  in: SchemaIn$ExchangeRateRates,
  out: SchemaOut$ExchangeRateRates,
};
