import {
  External$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference,
  PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference,
} from "./payment-method-configuration-update-body-oxxo-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash. Check this [page](https://stripe.com/docs/payments/oxxo) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyOxxo = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyOxxo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyOxxo = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyOxxo
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyOxxo: z.ZodType<
  PaymentMethodConfigurationUpdateBodyOxxo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyOxxo
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyOxxo: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyOxxo, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyOxxo // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyOxxo = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyOxxo,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyOxxo,
};
