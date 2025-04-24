import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataBacsDebit
 */
export type PaymentIntentUpdateBodyPaymentMethodDataBacsDebit = {
  accountNumber?: string | undefined;
  sortCode?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit = {
  account_number?: string | undefined;
  sort_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataBacsDebit
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataBacsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataBacsDebit // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit,
};
