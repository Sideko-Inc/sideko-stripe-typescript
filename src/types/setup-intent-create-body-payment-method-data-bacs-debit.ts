import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataBacsDebit
 */
export type SetupIntentCreateBodyPaymentMethodDataBacsDebit = {
  accountNumber?: string | undefined;
  sortCode?: string | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataBacsDebit = {
  account_number?: string | undefined;
  sort_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataBacsDebit
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataBacsDebit: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataBacsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataBacsDebit
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataBacsDebit: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataBacsDebit // the object to be transformed
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

export const Schemas$SetupIntentCreateBodyPaymentMethodDataBacsDebit = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataBacsDebit,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataBacsDebit,
};
