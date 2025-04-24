import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataAcssDebit
 */
export type SetupIntentConfirmBodyPaymentMethodDataAcssDebit = {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataAcssDebit = {
  account_number: string;
  institution_number: string;
  transit_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataAcssDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataAcssDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataAcssDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataAcssDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataAcssDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataAcssDebit // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataAcssDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataAcssDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataAcssDebit,
};
