import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit = {
  accountNumber: string;
  institutionNumber: string;
  transitNumber: string;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit =
  {
    account_number: string;
    institution_number: string;
    transit_number: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit // the object to be transformed
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

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAcssDebit,
  };
