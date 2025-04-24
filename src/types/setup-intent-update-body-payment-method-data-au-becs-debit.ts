import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit
 */
export type SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit = {
  accountNumber: string;
  bsbNumber: string;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit = {
  account_number: string;
  bsb_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit // the object to be transformed
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit,
};
