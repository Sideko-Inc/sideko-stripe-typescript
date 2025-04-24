import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit
 */
export type PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit = {
  accountNumber: string;
  bsbNumber: string;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit = {
  account_number: string;
  bsb_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit,
};
