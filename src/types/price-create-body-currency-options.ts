import {
  External$PriceCreateBodyCurrencyOptionsAdditionalProps,
  PriceCreateBodyCurrencyOptionsAdditionalProps,
  Schemas$PriceCreateBodyCurrencyOptionsAdditionalProps,
} from "./price-create-body-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type PriceCreateBodyCurrencyOptions = {
  [additionalProperty: string]:
    | PriceCreateBodyCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * PriceCreateBodyCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyCurrencyOptions = {
  [additionalProperty: string]:
    | External$PriceCreateBodyCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyCurrencyOptions
 */
const SchemaIn$PriceCreateBodyCurrencyOptions: z.ZodType<
  PriceCreateBodyCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$PriceCreateBodyCurrencyOptionsAdditionalProps.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyCurrencyOptions
 */
const SchemaOut$PriceCreateBodyCurrencyOptions: z.ZodType<
  External$PriceCreateBodyCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$PriceCreateBodyCurrencyOptionsAdditionalProps.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PriceCreateBodyCurrencyOptions = {
  in: SchemaIn$PriceCreateBodyCurrencyOptions,
  out: SchemaOut$PriceCreateBodyCurrencyOptions,
};
