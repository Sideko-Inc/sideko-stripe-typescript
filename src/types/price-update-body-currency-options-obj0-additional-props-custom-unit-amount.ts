import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount
 */
export type PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
    preset?: number | undefined;
  };

/**
 * @internal
 * PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
    preset?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount
 */
const SchemaIn$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount: z.ZodType<
  PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount
 */
const SchemaOut$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount: z.ZodType<
  External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount // the object to be transformed
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

export const Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount =
  {
    in: SchemaIn$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount,
    out: SchemaOut$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount,
  };
