import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAcssDebit = {
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Institution number of the bank account
   */
  institutionNumber?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  /**
   * ID of the mandate used to make this payment.
   */
  mandate?: string | undefined;
  /**
   * Transit number of the bank account.
   */
  transitNumber?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAcssDebit = {
  bank_name?: string | null | undefined;
  fingerprint?: string | null | undefined;
  institution_number?: string | null | undefined;
  last4?: string | null | undefined;
  mandate?: string | undefined;
  transit_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAcssDebit
 */
const SchemaIn$PaymentMethodDetailsAcssDebit: z.ZodType<
  PaymentMethodDetailsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_name: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    institution_number: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().optional(),
    transit_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_name: "bankName",
      fingerprint: "fingerprint",
      institution_number: "institutionNumber",
      last4: "last4",
      mandate: "mandate",
      transit_number: "transitNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAcssDebit
 */
const SchemaOut$PaymentMethodDetailsAcssDebit: z.ZodType<
  External$PaymentMethodDetailsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAcssDebit // the object to be transformed
> = z
  .object({
    bankName: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    institutionNumber: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().optional(),
    transitNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankName: "bank_name",
      fingerprint: "fingerprint",
      institutionNumber: "institution_number",
      last4: "last4",
      mandate: "mandate",
      transitNumber: "transit_number",
    });
  });

export const Schemas$PaymentMethodDetailsAcssDebit = {
  in: SchemaIn$PaymentMethodDetailsAcssDebit,
  out: SchemaOut$PaymentMethodDetailsAcssDebit,
};
