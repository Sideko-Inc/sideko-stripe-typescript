import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
 */
export type PriceCreateBodyCustomUnitAmount = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
  preset?: number | undefined;
};

/**
 * @internal
 * PriceCreateBodyCustomUnitAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyCustomUnitAmount = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
  preset?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyCustomUnitAmount
 */
const SchemaIn$PriceCreateBodyCustomUnitAmount: z.ZodType<
  PriceCreateBodyCustomUnitAmount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyCustomUnitAmount
 */
const SchemaOut$PriceCreateBodyCustomUnitAmount: z.ZodType<
  External$PriceCreateBodyCustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyCustomUnitAmount // the object to be transformed
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

export const Schemas$PriceCreateBodyCustomUnitAmount = {
  in: SchemaIn$PriceCreateBodyCustomUnitAmount,
  out: SchemaOut$PriceCreateBodyCustomUnitAmount,
};
