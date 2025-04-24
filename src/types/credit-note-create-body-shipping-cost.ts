import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
 */
export type CreditNoteCreateBodyShippingCost = {
  shippingRate?: string | undefined;
};

/**
 * @internal
 * CreditNoteCreateBodyShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteCreateBodyShippingCost = {
  shipping_rate?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteCreateBodyShippingCost
 */
const SchemaIn$CreditNoteCreateBodyShippingCost: z.ZodType<
  CreditNoteCreateBodyShippingCost, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteCreateBodyShippingCost
 */
const SchemaOut$CreditNoteCreateBodyShippingCost: z.ZodType<
  External$CreditNoteCreateBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteCreateBodyShippingCost // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
    });
  });

export const Schemas$CreditNoteCreateBodyShippingCost = {
  in: SchemaIn$CreditNoteCreateBodyShippingCost,
  out: SchemaOut$CreditNoteCreateBodyShippingCost,
};
