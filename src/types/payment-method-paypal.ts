import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodPaypal = {
  /**
   * Two-letter ISO code representing the buyer's country. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  country?: string | null | undefined;
  /**
   * Owner's email. Values are provided by PayPal directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  payerEmail?: string | null | undefined;
  /**
   * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
   */
  payerId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodPaypal = {
  country?: string | null | undefined;
  payer_email?: string | null | undefined;
  payer_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodPaypal
 */
const SchemaIn$PaymentMethodPaypal: z.ZodType<
  PaymentMethodPaypal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string().nullable().optional(),
    payer_email: z.string().nullable().optional(),
    payer_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      payer_email: "payerEmail",
      payer_id: "payerId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodPaypal
 */
const SchemaOut$PaymentMethodPaypal: z.ZodType<
  External$PaymentMethodPaypal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodPaypal // the object to be transformed
> = z
  .object({
    country: z.string().nullable().optional(),
    payerEmail: z.string().nullable().optional(),
    payerId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      payerEmail: "payer_email",
      payerId: "payer_id",
    });
  });

export const Schemas$PaymentMethodPaypal = {
  in: SchemaIn$PaymentMethodPaypal,
  out: SchemaOut$PaymentMethodPaypal,
};
