import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataSepaDebit
 */
export type SetupIntentCreateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataSepaDebit
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataSepaDebit: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataSepaDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataSepaDebit
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataSepaDebit: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataSepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataSepaDebit = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataSepaDebit,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataSepaDebit,
};
