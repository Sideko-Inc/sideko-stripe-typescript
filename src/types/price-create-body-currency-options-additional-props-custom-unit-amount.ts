import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount
 */
export type PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
  preset?: number | undefined;
};

/**
 * @internal
 * PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
    preset?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount
 */
const SchemaIn$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount: z.ZodType<
  PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount
 */
const SchemaOut$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount: z.ZodType<
  External$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount // the object to be transformed
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

export const Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount =
  {
    in: SchemaIn$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount,
    out: SchemaOut$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount,
  };
