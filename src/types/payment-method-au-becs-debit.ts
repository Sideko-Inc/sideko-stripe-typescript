import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodAuBecsDebit = {
  /**
   * Six-digit number identifying bank and branch associated with this bank account.
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
};

/**
 * @internal
 * PaymentMethodAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodAuBecsDebit = {
  bsb_number?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodAuBecsDebit
 */
const SchemaIn$PaymentMethodAuBecsDebit: z.ZodType<
  PaymentMethodAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bsb_number: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bsb_number: "bsbNumber",
      fingerprint: "fingerprint",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodAuBecsDebit
 */
const SchemaOut$PaymentMethodAuBecsDebit: z.ZodType<
  External$PaymentMethodAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodAuBecsDebit // the object to be transformed
> = z
  .object({
    bsbNumber: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bsbNumber: "bsb_number",
      fingerprint: "fingerprint",
      last4: "last4",
    });
  });

export const Schemas$PaymentMethodAuBecsDebit = {
  in: SchemaIn$PaymentMethodAuBecsDebit,
  out: SchemaOut$PaymentMethodAuBecsDebit,
};
