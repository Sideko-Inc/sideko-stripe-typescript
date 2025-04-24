import {
  External$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps,
  PriceUpdateBodyCurrencyOptionsObj0AdditionalProps,
  Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps,
} from "./price-update-body-currency-options-obj0-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceUpdateBodyCurrencyOptionsObj0
 */
export type PriceUpdateBodyCurrencyOptionsObj0 = {
  [additionalProperty: string]:
    | PriceUpdateBodyCurrencyOptionsObj0AdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * PriceUpdateBodyCurrencyOptionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceUpdateBodyCurrencyOptionsObj0 = {
  [additionalProperty: string]:
    | External$PriceUpdateBodyCurrencyOptionsObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceUpdateBodyCurrencyOptionsObj0
 */
const SchemaIn$PriceUpdateBodyCurrencyOptionsObj0: z.ZodType<
  PriceUpdateBodyCurrencyOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceUpdateBodyCurrencyOptionsObj0
 */
const SchemaOut$PriceUpdateBodyCurrencyOptionsObj0: z.ZodType<
  External$PriceUpdateBodyCurrencyOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  PriceUpdateBodyCurrencyOptionsObj0 // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PriceUpdateBodyCurrencyOptionsObj0 = {
  in: SchemaIn$PriceUpdateBodyCurrencyOptionsObj0,
  out: SchemaOut$PriceUpdateBodyCurrencyOptionsObj0,
};
