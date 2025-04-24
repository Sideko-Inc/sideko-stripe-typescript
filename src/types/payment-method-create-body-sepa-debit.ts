import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
 */
export type PaymentMethodCreateBodySepaDebit = {
  iban: string;
};

/**
 * @internal
 * PaymentMethodCreateBodySepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodySepaDebit = {
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodySepaDebit
 */
const SchemaIn$PaymentMethodCreateBodySepaDebit: z.ZodType<
  PaymentMethodCreateBodySepaDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodySepaDebit
 */
const SchemaOut$PaymentMethodCreateBodySepaDebit: z.ZodType<
  External$PaymentMethodCreateBodySepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodySepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$PaymentMethodCreateBodySepaDebit = {
  in: SchemaIn$PaymentMethodCreateBodySepaDebit,
  out: SchemaOut$PaymentMethodCreateBodySepaDebit,
};
