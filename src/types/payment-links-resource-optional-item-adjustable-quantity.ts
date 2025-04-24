import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceOptionalItemAdjustableQuantity = {
  /**
   * Set to true if the quantity can be adjusted to any non-negative integer.
   */
  enabled: boolean;
  /**
   * The maximum quantity of this item the customer can purchase. By default this value is 99.
   */
  maximum?: number | null | undefined;
  /**
   * The minimum quantity of this item the customer must purchase, if they choose to purchase it. Because this item is optional, the customer will always be able to remove it from their order, even if the `minimum` configured here is greater than 0. By default this value is 0.
   */
  minimum?: number | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourceOptionalItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceOptionalItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | null | undefined;
  minimum?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceOptionalItemAdjustableQuantity
 */
const SchemaIn$PaymentLinksResourceOptionalItemAdjustableQuantity: z.ZodType<
  PaymentLinksResourceOptionalItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    maximum: z.number().int().nullable().optional(),
    minimum: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceOptionalItemAdjustableQuantity
 */
const SchemaOut$PaymentLinksResourceOptionalItemAdjustableQuantity: z.ZodType<
  External$PaymentLinksResourceOptionalItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceOptionalItemAdjustableQuantity // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    maximum: z.number().int().nullable().optional(),
    minimum: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$PaymentLinksResourceOptionalItemAdjustableQuantity = {
  in: SchemaIn$PaymentLinksResourceOptionalItemAdjustableQuantity,
  out: SchemaOut$PaymentLinksResourceOptionalItemAdjustableQuantity,
};
