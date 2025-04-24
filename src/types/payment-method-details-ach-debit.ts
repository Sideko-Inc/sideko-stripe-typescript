import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAchDebit = {
  /**
   * Type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: ("company" | "individual") | null | undefined;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  /**
   * Routing transit number of the bank account.
   */
  routingNumber?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAchDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAchDebit = {
  account_holder_type?: ("company" | "individual") | null | undefined;
  bank_name?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  routing_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAchDebit
 */
const SchemaIn$PaymentMethodDetailsAchDebit: z.ZodType<
  PaymentMethodDetailsAchDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_type: z
      .enum(["company", "individual"])
      .nullable()
      .optional(),
    bank_name: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_type: "accountHolderType",
      bank_name: "bankName",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAchDebit
 */
const SchemaOut$PaymentMethodDetailsAchDebit: z.ZodType<
  External$PaymentMethodDetailsAchDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAchDebit // the object to be transformed
> = z
  .object({
    accountHolderType: z.enum(["company", "individual"]).nullable().optional(),
    bankName: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderType: "account_holder_type",
      bankName: "bank_name",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      routingNumber: "routing_number",
    });
  });

export const Schemas$PaymentMethodDetailsAchDebit = {
  in: SchemaIn$PaymentMethodDetailsAchDebit,
  out: SchemaOut$PaymentMethodDetailsAchDebit,
};
