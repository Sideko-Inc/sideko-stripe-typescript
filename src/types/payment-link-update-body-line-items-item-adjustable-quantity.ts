import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity
 */
export type PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity
 */
const SchemaIn$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity: z.ZodType<
  PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity
 */
const SchemaOut$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity: z.ZodType<
  External$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity = {
  in: SchemaIn$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity,
  out: SchemaOut$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity,
};
