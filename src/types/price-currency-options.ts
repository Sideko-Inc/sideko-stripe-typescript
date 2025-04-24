import {
  CurrencyOption,
  External$CurrencyOption,
  Schemas$CurrencyOption,
} from "./currency-option";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type PriceCurrencyOptions = {
  [additionalProperty: string]: CurrencyOption | null | undefined;
};

/**
 * @internal
 * PriceCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCurrencyOptions = {
  [additionalProperty: string]:
    | External$PriceCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCurrencyOptions
 */
const SchemaIn$PriceCurrencyOptions: z.ZodType<
  PriceCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$CurrencyOption.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCurrencyOptions
 */
const SchemaOut$PriceCurrencyOptions: z.ZodType<
  External$PriceCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  PriceCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$CurrencyOption.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PriceCurrencyOptions = {
  in: SchemaIn$PriceCurrencyOptions,
  out: SchemaOut$PriceCurrencyOptions,
};
