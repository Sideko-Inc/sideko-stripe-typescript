import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsSwish = {
  /**
   * Uniquely identifies the payer's Swish account. You can use this attribute to check whether two Swish transactions were paid for by the same payer
   */
  fingerprint?: string | null | undefined;
  /**
   * Payer bank reference number for the payment
   */
  paymentReference?: string | null | undefined;
  /**
   * The last four digits of the Swish account phone number
   */
  verifiedPhoneLast4?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsSwish without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsSwish = {
  fingerprint?: string | null | undefined;
  payment_reference?: string | null | undefined;
  verified_phone_last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsSwish
 */
const SchemaIn$PaymentMethodDetailsSwish: z.ZodType<
  PaymentMethodDetailsSwish, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fingerprint: z.string().nullable().optional(),
    payment_reference: z.string().nullable().optional(),
    verified_phone_last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      payment_reference: "paymentReference",
      verified_phone_last4: "verifiedPhoneLast4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsSwish
 */
const SchemaOut$PaymentMethodDetailsSwish: z.ZodType<
  External$PaymentMethodDetailsSwish, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsSwish // the object to be transformed
> = z
  .object({
    fingerprint: z.string().nullable().optional(),
    paymentReference: z.string().nullable().optional(),
    verifiedPhoneLast4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      paymentReference: "payment_reference",
      verifiedPhoneLast4: "verified_phone_last4",
    });
  });

export const Schemas$PaymentMethodDetailsSwish = {
  in: SchemaIn$PaymentMethodDetailsSwish,
  out: SchemaOut$PaymentMethodDetailsSwish,
};
