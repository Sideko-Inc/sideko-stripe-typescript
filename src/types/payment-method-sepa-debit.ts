import {
  External$SepaDebitGeneratedFrom,
  Schemas$SepaDebitGeneratedFrom,
  SepaDebitGeneratedFrom,
} from "./sepa-debit-generated-from";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodSepaDebit = {
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
  generatedFrom?: SepaDebitGeneratedFrom | undefined;
  /**
   * Last four characters of the IBAN.
   */
  last4?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodSepaDebit = {
  bank_code?: string | null | undefined;
  branch_code?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  generated_from?: External$SepaDebitGeneratedFrom | undefined;
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodSepaDebit
 */
const SchemaIn$PaymentMethodSepaDebit: z.ZodType<
  PaymentMethodSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    branch_code: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    generated_from: z.lazy(() => Schemas$SepaDebitGeneratedFrom.in.optional()),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      branch_code: "branchCode",
      country: "country",
      fingerprint: "fingerprint",
      generated_from: "generatedFrom",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodSepaDebit
 */
const SchemaOut$PaymentMethodSepaDebit: z.ZodType<
  External$PaymentMethodSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodSepaDebit // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    branchCode: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    generatedFrom: z.lazy(() => Schemas$SepaDebitGeneratedFrom.out.optional()),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      branchCode: "branch_code",
      country: "country",
      fingerprint: "fingerprint",
      generatedFrom: "generated_from",
      last4: "last4",
    });
  });

export const Schemas$PaymentMethodSepaDebit = {
  in: SchemaIn$PaymentMethodSepaDebit,
  out: SchemaOut$PaymentMethodSepaDebit,
};
