import {
  External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps,
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps,
  Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps,
} from "./product-create-body-default-price-data-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductCreateBodyDefaultPriceDataCurrencyOptions
 */
export type ProductCreateBodyDefaultPriceDataCurrencyOptions = {
  [additionalProperty: string]:
    | ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * ProductCreateBodyDefaultPriceDataCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyDefaultPriceDataCurrencyOptions = {
  [additionalProperty: string]:
    | External$ProductCreateBodyDefaultPriceDataCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyDefaultPriceDataCurrencyOptions
 */
const SchemaIn$ProductCreateBodyDefaultPriceDataCurrencyOptions: z.ZodType<
  ProductCreateBodyDefaultPriceDataCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyDefaultPriceDataCurrencyOptions
 */
const SchemaOut$ProductCreateBodyDefaultPriceDataCurrencyOptions: z.ZodType<
  External$ProductCreateBodyDefaultPriceDataCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyDefaultPriceDataCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptions = {
  in: SchemaIn$ProductCreateBodyDefaultPriceDataCurrencyOptions,
  out: SchemaOut$ProductCreateBodyDefaultPriceDataCurrencyOptions,
};
