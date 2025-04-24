import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsSepaDebit = {
  /**
   * Bank code of bank associated with the bank account.
   */
  bankCode?: string | null | undefined;
  /**
   * Branch code of bank associated with the bank account.
   */
  branchCode?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Last four characters of the IBAN.
   */
  last4?: string | null | undefined;
  /**
   * Find the ID of the mandate used for this payment under the [payment_method_details.sepa_debit.mandate](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-sepa_debit-mandate) property on the Charge. Use this mandate ID to [retrieve the Mandate](https://stripe.com/docs/api/mandates/retrieve).
   */
  mandate?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsSepaDebit = {
  bank_code?: string | null | undefined;
  branch_code?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  mandate?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsSepaDebit
 */
const SchemaIn$PaymentMethodDetailsSepaDebit: z.ZodType<
  PaymentMethodDetailsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    branch_code: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      branch_code: "branchCode",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate: "mandate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsSepaDebit
 */
const SchemaOut$PaymentMethodDetailsSepaDebit: z.ZodType<
  External$PaymentMethodDetailsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsSepaDebit // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    branchCode: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      branchCode: "branch_code",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate: "mandate",
    });
  });

export const Schemas$PaymentMethodDetailsSepaDebit = {
  in: SchemaIn$PaymentMethodDetailsSepaDebit,
  out: SchemaOut$PaymentMethodDetailsSepaDebit,
};
