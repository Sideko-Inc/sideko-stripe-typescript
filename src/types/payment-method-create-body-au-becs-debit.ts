import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
 */
export type PaymentMethodCreateBodyAuBecsDebit = {
  accountNumber: string;
  bsbNumber: string;
};

/**
 * @internal
 * PaymentMethodCreateBodyAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyAuBecsDebit = {
  account_number: string;
  bsb_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyAuBecsDebit
 */
const SchemaIn$PaymentMethodCreateBodyAuBecsDebit: z.ZodType<
  PaymentMethodCreateBodyAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number: z.string(),
    bsb_number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number: "accountNumber",
      bsb_number: "bsbNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyAuBecsDebit
 */
const SchemaOut$PaymentMethodCreateBodyAuBecsDebit: z.ZodType<
  External$PaymentMethodCreateBodyAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyAuBecsDebit // the object to be transformed
> = z
  .object({
    accountNumber: z.string(),
    bsbNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumber: "account_number",
      bsbNumber: "bsb_number",
    });
  });

export const Schemas$PaymentMethodCreateBodyAuBecsDebit = {
  in: SchemaIn$PaymentMethodCreateBodyAuBecsDebit,
  out: SchemaOut$PaymentMethodCreateBodyAuBecsDebit,
};
