import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity
 */
export type PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity = {
  enabled: boolean;
  maximum?: number | undefined;
  minimum?: number | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity =
  {
    enabled: boolean;
    maximum?: number | undefined;
    minimum?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity
 */
const SchemaIn$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity: z.ZodType<
  PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity
 */
const SchemaOut$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity: z.ZodType<
  External$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity =
  {
    in: SchemaIn$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity,
    out: SchemaOut$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity,
  };
