import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity
 */
export type CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity
 */
const SchemaIn$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity: z.ZodType<
  CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity
 */
const SchemaOut$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity: z.ZodType<
  External$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity =
  {
    in: SchemaIn$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity,
    out: SchemaOut$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity,
  };
