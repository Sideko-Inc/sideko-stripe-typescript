import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount
 */
export type ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
    preset?: number | undefined;
  };

/**
 * @internal
 * ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
    preset?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount
 */
const SchemaIn$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount: z.ZodType<
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    maximum: z.number().int().optional(),
    minimum: z.number().int().optional(),
    preset: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      maximum: "maximum",
      minimum: "minimum",
      preset: "preset",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount
 */
const SchemaOut$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount: z.ZodType<
  External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    maximum: z.number().int().optional(),
    minimum: z.number().int().optional(),
    preset: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      maximum: "maximum",
      minimum: "minimum",
      preset: "preset",
    });
  });

export const Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount =
  {
    in: SchemaIn$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount,
    out: SchemaOut$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount,
  };
