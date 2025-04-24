import {
  External$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference,
  PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference,
} from "./payment-method-configuration-update-body-sepa-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The [Single Euro Payments Area (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area) is an initiative of the European Union to simplify payments within and across member countries. SEPA established and enforced banking standards to allow for the direct debiting of every EUR-denominated bank account within the SEPA region, check this [page](https://stripe.com/docs/payments/sepa-debit) for more details.
 */
export type PaymentMethodConfigurationUpdateBodySepaDebit = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySepaDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySepaDebit
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySepaDebit: z.ZodType<
  PaymentMethodConfigurationUpdateBodySepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySepaDebit
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySepaDebit: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySepaDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySepaDebit = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodySepaDebit,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodySepaDebit,
};
