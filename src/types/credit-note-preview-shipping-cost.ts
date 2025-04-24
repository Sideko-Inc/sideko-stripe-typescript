import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
 */
export type CreditNotePreviewShippingCost = {
  shippingRate?: string | undefined;
};

/**
 * @internal
 * CreditNotePreviewShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreviewShippingCost = {
  shipping_rate?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreviewShippingCost
 */
const SchemaIn$CreditNotePreviewShippingCost: z.ZodType<
  CreditNotePreviewShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreviewShippingCost
 */
const SchemaOut$CreditNotePreviewShippingCost: z.ZodType<
  External$CreditNotePreviewShippingCost, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreviewShippingCost // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
    });
  });

export const Schemas$CreditNotePreviewShippingCost = {
  in: SchemaIn$CreditNotePreviewShippingCost,
  out: SchemaOut$CreditNotePreviewShippingCost,
};
