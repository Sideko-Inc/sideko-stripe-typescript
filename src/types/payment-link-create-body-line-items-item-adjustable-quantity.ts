import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyLineItemsItemAdjustableQuantity
 */
export type PaymentLinkCreateBodyLineItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyLineItemsItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyLineItemsItemAdjustableQuantity
 */
const SchemaIn$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity: z.ZodType<
  PaymentLinkCreateBodyLineItemsItemAdjustableQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity
 */
const SchemaOut$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity: z.ZodType<
  External$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyLineItemsItemAdjustableQuantity // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity = {
  in: SchemaIn$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity,
  out: SchemaOut$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity,
};
