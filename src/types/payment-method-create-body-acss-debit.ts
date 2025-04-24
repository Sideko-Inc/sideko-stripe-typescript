import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
 */
export type PaymentMethodCreateBodyAcssDebit = {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
};

/**
 * @internal
 * PaymentMethodCreateBodyAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyAcssDebit = {
  account_number: string;
  institution_number: string;
  transit_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyAcssDebit
 */
const SchemaIn$PaymentMethodCreateBodyAcssDebit: z.ZodType<
  PaymentMethodCreateBodyAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number: z.string(),
    institution_number: z.string(),
    transit_number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number: "accountNumber",
      institution_number: "institutionNumber",
      transit_number: "transitNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyAcssDebit
 */
const SchemaOut$PaymentMethodCreateBodyAcssDebit: z.ZodType<
  External$PaymentMethodCreateBodyAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyAcssDebit // the object to be transformed
> = z
  .object({
    accountNumber: z.string(),
    institutionNumber: z.string(),
    transitNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumber: "account_number",
      institutionNumber: "institution_number",
      transitNumber: "transit_number",
    });
  });

export const Schemas$PaymentMethodCreateBodyAcssDebit = {
  in: SchemaIn$PaymentMethodCreateBodyAcssDebit,
  out: SchemaOut$PaymentMethodCreateBodyAcssDebit,
};
