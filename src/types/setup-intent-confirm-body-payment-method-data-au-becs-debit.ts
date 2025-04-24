import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit
 */
export type SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit = {
  accountNumber: string;
  bsbNumber: string;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit = {
  account_number: string;
  bsb_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit,
};
