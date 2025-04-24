import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity = {
  /**
   * Set to true if the quantity can be adjusted to any non-negative integer.
   */
  enabled: boolean;
  /**
   * The maximum quantity of this item the customer can purchase. By default this value is 99. You can specify a value up to 999999.
   */
  maximum?: number | null | undefined;
  /**
   * The minimum quantity of this item the customer must purchase, if they choose to purchase it. Because this item is optional, the customer will always be able to remove it from their order, even if the `minimum` configured here is greater than 0. By default this value is 0.
   */
  minimum?: number | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity =
  {
    enabled: boolean;
    maximum?: number | null | undefined;
    minimum?: number | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity
 */
const SchemaIn$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity: z.ZodType<
  PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity
 */
const SchemaOut$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity: z.ZodType<
  External$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity // the object to be transformed
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

export const Schemas$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity =
  {
    in: SchemaIn$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity,
    out: SchemaOut$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity,
  };
