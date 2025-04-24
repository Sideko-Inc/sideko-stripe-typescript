import {
  External$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference,
  PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference,
} from "./payment-method-configuration-update-body-konbini-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Konbini allows customers in Japan to pay for bills and online purchases at convenience stores with cash. Check this [page](https://stripe.com/docs/payments/konbini) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyKonbini = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyKonbini without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyKonbini = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyKonbini
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyKonbini: z.ZodType<
  PaymentMethodConfigurationUpdateBodyKonbini, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyKonbini
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyKonbini: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyKonbini, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyKonbini // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyKonbini = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyKonbini,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyKonbini,
};
