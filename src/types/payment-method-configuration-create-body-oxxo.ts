import {
  External$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference,
  PaymentMethodConfigurationCreateBodyOxxoDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference,
} from "./payment-method-configuration-create-body-oxxo-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash. Check this [page](https://stripe.com/docs/payments/oxxo) for more details.
 */
export type PaymentMethodConfigurationCreateBodyOxxo = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyOxxoDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyOxxo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyOxxo = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyOxxo
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyOxxo: z.ZodType<
  PaymentMethodConfigurationCreateBodyOxxo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyOxxo
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyOxxo: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyOxxo, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyOxxo // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyOxxo = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyOxxo,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyOxxo,
};
