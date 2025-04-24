import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit
 */
export type PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit = {
  accountNumber: string;
  bsbNumber: string;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit = {
  account_number: string;
  bsb_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit,
};
