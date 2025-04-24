import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
 */
export type CreditNotePreviewLinesShippingCost = {
  shippingRate?: string | undefined;
};

/**
 * @internal
 * CreditNotePreviewLinesShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreviewLinesShippingCost = {
  shipping_rate?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreviewLinesShippingCost
 */
const SchemaIn$CreditNotePreviewLinesShippingCost: z.ZodType<
  CreditNotePreviewLinesShippingCost, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreviewLinesShippingCost
 */
const SchemaOut$CreditNotePreviewLinesShippingCost: z.ZodType<
  External$CreditNotePreviewLinesShippingCost, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreviewLinesShippingCost // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
    });
  });

export const Schemas$CreditNotePreviewLinesShippingCost = {
  in: SchemaIn$CreditNotePreviewLinesShippingCost,
  out: SchemaOut$CreditNotePreviewLinesShippingCost,
};
