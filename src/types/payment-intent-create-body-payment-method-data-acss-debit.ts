import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataAcssDebit
 */
export type PaymentIntentCreateBodyPaymentMethodDataAcssDebit = {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataAcssDebit = {
  account_number: string;
  institution_number: string;
  transit_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataAcssDebit
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataAcssDebit: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataAcssDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataAcssDebit
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataAcssDebit: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataAcssDebit // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataAcssDebit = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataAcssDebit,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataAcssDebit,
};
