import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit =
  {
    accountNumber: string;
    bsbNumber: string;
  };

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit =
  {
    account_number: string;
    bsb_number: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit // the object to be transformed
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

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataAuBecsDebit,
  };
