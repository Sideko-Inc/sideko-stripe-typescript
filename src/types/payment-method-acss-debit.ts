import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodAcssDebit = {
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Institution number of the bank account.
   */
  institutionNumber?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  /**
   * Transit number of the bank account.
   */
  transitNumber?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodAcssDebit = {
  bank_name?: string | null | undefined;
  fingerprint?: string | null | undefined;
  institution_number?: string | null | undefined;
  last4?: string | null | undefined;
  transit_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodAcssDebit
 */
const SchemaIn$PaymentMethodAcssDebit: z.ZodType<
  PaymentMethodAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_name: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    institution_number: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    transit_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_name: "bankName",
      fingerprint: "fingerprint",
      institution_number: "institutionNumber",
      last4: "last4",
      transit_number: "transitNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodAcssDebit
 */
const SchemaOut$PaymentMethodAcssDebit: z.ZodType<
  External$PaymentMethodAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodAcssDebit // the object to be transformed
> = z
  .object({
    bankName: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    institutionNumber: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    transitNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankName: "bank_name",
      fingerprint: "fingerprint",
      institutionNumber: "institution_number",
      last4: "last4",
      transitNumber: "transit_number",
    });
  });

export const Schemas$PaymentMethodAcssDebit = {
  in: SchemaIn$PaymentMethodAcssDebit,
  out: SchemaOut$PaymentMethodAcssDebit,
};
