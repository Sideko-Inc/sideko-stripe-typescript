import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataSepaDebit
 */
export type SetupIntentConfirmBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataSepaDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataSepaDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataSepaDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataSepaDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataSepaDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataSepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataSepaDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataSepaDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataSepaDebit,
};
