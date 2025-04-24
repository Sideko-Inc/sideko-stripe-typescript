import {
  External$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference,
  PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference,
} from "./payment-method-configuration-create-body-konbini-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Konbini allows customers in Japan to pay for bills and online purchases at convenience stores with cash. Check this [page](https://stripe.com/docs/payments/konbini) for more details.
 */
export type PaymentMethodConfigurationCreateBodyKonbini = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyKonbini without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyKonbini = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyKonbini
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyKonbini: z.ZodType<
  PaymentMethodConfigurationCreateBodyKonbini, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyKonbini
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyKonbini: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyKonbini, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyKonbini // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyKonbini = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyKonbini,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyKonbini,
};
