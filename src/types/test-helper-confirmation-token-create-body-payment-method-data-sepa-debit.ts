import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit =
  {
    iban: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataSepaDebit,
  };
