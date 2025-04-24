import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataBacsDebit
 */
export type SetupIntentConfirmBodyPaymentMethodDataBacsDebit = {
  accountNumber?: string | undefined;
  sortCode?: string | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataBacsDebit = {
  account_number?: string | undefined;
  sort_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataBacsDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataBacsDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number: z.string().optional(),
    sort_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number: "accountNumber",
      sort_code: "sortCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataBacsDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataBacsDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataBacsDebit // the object to be transformed
> = z
  .object({
    accountNumber: z.string().optional(),
    sortCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumber: "account_number",
      sortCode: "sort_code",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataBacsDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataBacsDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataBacsDebit,
};
