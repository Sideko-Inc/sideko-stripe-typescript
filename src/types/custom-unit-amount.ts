import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomUnitAmount = {
  /**
   * The maximum unit amount the customer can specify for this item.
   */
  maximum?: number | null | undefined;
  /**
   * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
   */
  minimum?: number | null | undefined;
  /**
   * The starting unit amount which can be updated by the customer.
   */
  preset?: number | null | undefined;
};

/**
 * @internal
 * CustomUnitAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomUnitAmount = {
  maximum?: number | null | undefined;
  minimum?: number | null | undefined;
  preset?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomUnitAmount
 */
const SchemaIn$CustomUnitAmount: z.ZodType<
  CustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum: z.number().int().nullable().optional(),
    minimum: z.number().int().nullable().optional(),
    preset: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
      preset: "preset",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomUnitAmount
 */
const SchemaOut$CustomUnitAmount: z.ZodType<
  External$CustomUnitAmount, // output type of this zod object
  z.ZodTypeDef,
  CustomUnitAmount // the object to be transformed
> = z
  .object({
    maximum: z.number().int().nullable().optional(),
    minimum: z.number().int().nullable().optional(),
    preset: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
      preset: "preset",
    });
  });

export const Schemas$CustomUnitAmount = {
  in: SchemaIn$CustomUnitAmount,
  out: SchemaOut$CustomUnitAmount,
};
