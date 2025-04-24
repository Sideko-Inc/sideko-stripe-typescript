import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataBacsDebit
 */
export type SetupIntentUpdateBodyPaymentMethodDataBacsDebit = {
  accountNumber?: string | undefined;
  sortCode?: string | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataBacsDebit = {
  account_number?: string | undefined;
  sort_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataBacsDebit
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataBacsDebit: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataBacsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataBacsDebit
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataBacsDebit: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataBacsDebit // the object to be transformed
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataBacsDebit = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataBacsDebit,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataBacsDebit,
};
