import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePayBody
 */
export type InvoicePayBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * In cases where the source used to pay the invoice has insufficient funds, passing `forgive=true` controls whether a charge should be attempted for the full amount available on the source, up to the amount to fully pay the invoice. This effectively forgives the difference between the amount available on the source and the amount due.
   *
   * Passing `forgive=false` will fail the charge if the source hasn't been pre-funded with the right amount. An example for this case is with ACH Credit Transfers and wires: if the amount wired is less than the amount due by a small amount, you might want to forgive the difference. Defaults to `false`.
   */
  forgive?: boolean | undefined;
  /**
   * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the payment_method param or the invoice's default_payment_method or default_source, if set.
   */
  mandate?: (string | string) | undefined;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `true` (off-session).
   */
  offSession?: boolean | undefined;
  /**
   * Boolean representing whether an invoice is paid outside of Stripe. This will result in no charge being made. Defaults to `false`.
   */
  paidOutOfBand?: boolean | undefined;
  /**
   * A PaymentMethod to be charged. The PaymentMethod must be the ID of a PaymentMethod belonging to the customer associated with the invoice being paid.
   */
  paymentMethod?: string | undefined;
  /**
   * A payment source to be charged. The source must be the ID of a source belonging to the customer associated with the invoice being paid.
   */
  source?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | ((string | string) | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoicePayBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePayBody = {
  expand?: string[] | undefined;
  forgive?: boolean | undefined;
  mandate?: (string | string) | undefined;
  off_session?: boolean | undefined;
  paid_out_of_band?: boolean | undefined;
  payment_method?: string | undefined;
  source?: string | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | ((string | string) | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | External$InvoicePayBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePayBody
 */
const SchemaIn$InvoicePayBody: z.ZodType<
  InvoicePayBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forgive: z.boolean().optional(),
    mandate: z.union([z.string(), z.string()]).optional(),
    off_session: z.boolean().optional(),
    paid_out_of_band: z.boolean().optional(),
    payment_method: z.string().optional(),
    source: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forgive: "forgive",
      mandate: "mandate",
      off_session: "offSession",
      paid_out_of_band: "paidOutOfBand",
      payment_method: "paymentMethod",
      source: "source",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePayBody
 */
const SchemaOut$InvoicePayBody: z.ZodType<
  External$InvoicePayBody, // output type of this zod object
  z.ZodTypeDef,
  InvoicePayBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forgive: z.boolean().optional(),
    mandate: z.union([z.string(), z.string()]).optional(),
    offSession: z.boolean().optional(),
    paidOutOfBand: z.boolean().optional(),
    paymentMethod: z.string().optional(),
    source: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forgive: "forgive",
      mandate: "mandate",
      offSession: "off_session",
      paidOutOfBand: "paid_out_of_band",
      paymentMethod: "payment_method",
      source: "source",
    });
  });

export const Schemas$InvoicePayBody = {
  in: SchemaIn$InvoicePayBody,
  out: SchemaOut$InvoicePayBody,
};
