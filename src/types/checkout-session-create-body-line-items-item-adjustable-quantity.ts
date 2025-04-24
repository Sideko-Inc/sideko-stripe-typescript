import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity
 */
export type CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity
 */
const SchemaIn$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity: z.ZodType<
  CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    maximum: z.number().int().optional(),
    minimum: z.number().int().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity
 */
const SchemaOut$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity: z.ZodType<
  External$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    maximum: z.number().int().optional(),
    minimum: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity =
  {
    in: SchemaIn$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity,
    out: SchemaOut$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity,
  };
