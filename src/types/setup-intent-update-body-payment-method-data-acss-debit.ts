import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataAcssDebit
 */
export type SetupIntentUpdateBodyPaymentMethodDataAcssDebit = {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataAcssDebit = {
  account_number: string;
  institution_number: string;
  transit_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataAcssDebit
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataAcssDebit: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataAcssDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataAcssDebit
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataAcssDebit: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataAcssDebit // the object to be transformed
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataAcssDebit = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataAcssDebit,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataAcssDebit,
};
