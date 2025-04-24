import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceMandateOptionsCard = {
  /**
   * Amount to be charged for future payments.
   */
  amount?: number | null | undefined;
  /**
   * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
   */
  amountType?: ("fixed" | "maximum") | null | undefined;
  /**
   * A description of the mandate or subscription that is meant to be displayed to the customer.
   */
  description?: string | null | undefined;
};

/**
 * @internal
 * InvoiceMandateOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceMandateOptionsCard = {
  amount?: number | null | undefined;
  amount_type?: ("fixed" | "maximum") | null | undefined;
  description?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceMandateOptionsCard
 */
const SchemaIn$InvoiceMandateOptionsCard: z.ZodType<
  InvoiceMandateOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    amount_type: z.enum(["fixed", "maximum"]).nullable().optional(),
    description: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_type: "amountType",
      description: "description",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceMandateOptionsCard
 */
const SchemaOut$InvoiceMandateOptionsCard: z.ZodType<
  External$InvoiceMandateOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  InvoiceMandateOptionsCard // the object to be transformed
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    amountType: z.enum(["fixed", "maximum"]).nullable().optional(),
    description: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountType: "amount_type",
      description: "description",
    });
  });

export const Schemas$InvoiceMandateOptionsCard = {
  in: SchemaIn$InvoiceMandateOptionsCard,
  out: SchemaOut$InvoiceMandateOptionsCard,
};
