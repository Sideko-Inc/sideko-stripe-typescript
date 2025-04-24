import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAuBecsDebit = {
  /**
   * Bank-State-Branch number of the bank account.
   */
  bsbNumber?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  /**
   * ID of the mandate used to make this payment.
   */
  mandate?: string | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAuBecsDebit = {
  bsb_number?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  mandate?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAuBecsDebit
 */
const SchemaIn$PaymentMethodDetailsAuBecsDebit: z.ZodType<
  PaymentMethodDetailsAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bsb_number: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bsb_number: "bsbNumber",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate: "mandate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAuBecsDebit
 */
const SchemaOut$PaymentMethodDetailsAuBecsDebit: z.ZodType<
  External$PaymentMethodDetailsAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAuBecsDebit // the object to be transformed
> = z
  .object({
    bsbNumber: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bsbNumber: "bsb_number",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate: "mandate",
    });
  });

export const Schemas$PaymentMethodDetailsAuBecsDebit = {
  in: SchemaIn$PaymentMethodDetailsAuBecsDebit,
  out: SchemaOut$PaymentMethodDetailsAuBecsDebit,
};
