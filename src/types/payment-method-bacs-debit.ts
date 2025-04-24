import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodBacsDebit = {
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  /**
   * Sort code of the bank account. (e.g., `10-20-30`)
   */
  sortCode?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodBacsDebit = {
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  sort_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodBacsDebit
 */
const SchemaIn$PaymentMethodBacsDebit: z.ZodType<
  PaymentMethodBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    sort_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      last4: "last4",
      sort_code: "sortCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodBacsDebit
 */
const SchemaOut$PaymentMethodBacsDebit: z.ZodType<
  External$PaymentMethodBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodBacsDebit // the object to be transformed
> = z
  .object({
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    sortCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      last4: "last4",
      sortCode: "sort_code",
    });
  });

export const Schemas$PaymentMethodBacsDebit = {
  in: SchemaIn$PaymentMethodBacsDebit,
  out: SchemaOut$PaymentMethodBacsDebit,
};
