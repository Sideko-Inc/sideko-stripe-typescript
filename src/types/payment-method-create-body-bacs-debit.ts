import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
 */
export type PaymentMethodCreateBodyBacsDebit = {
  accountNumber?: string | undefined;
  sortCode?: string | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyBacsDebit = {
  account_number?: string | undefined;
  sort_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyBacsDebit
 */
const SchemaIn$PaymentMethodCreateBodyBacsDebit: z.ZodType<
  PaymentMethodCreateBodyBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number: z.string().optional(),
    sort_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number: "accountNumber",
      sort_code: "sortCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyBacsDebit
 */
const SchemaOut$PaymentMethodCreateBodyBacsDebit: z.ZodType<
  External$PaymentMethodCreateBodyBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyBacsDebit // the object to be transformed
> = z
  .object({
    accountNumber: z.string().optional(),
    sortCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumber: "account_number",
      sortCode: "sort_code",
    });
  });

export const Schemas$PaymentMethodCreateBodyBacsDebit = {
  in: SchemaIn$PaymentMethodCreateBodyBacsDebit,
  out: SchemaOut$PaymentMethodCreateBodyBacsDebit,
};
