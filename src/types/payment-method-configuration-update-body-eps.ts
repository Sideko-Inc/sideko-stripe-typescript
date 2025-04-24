import {
  External$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference,
  PaymentMethodConfigurationUpdateBodyEpsDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference,
} from "./payment-method-configuration-update-body-eps-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers. Check this [page](https://stripe.com/docs/payments/eps) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyEps = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyEpsDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyEps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyEps = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyEps
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyEps: z.ZodType<
  PaymentMethodConfigurationUpdateBodyEps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyEps
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyEps: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyEps, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyEps // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyEps = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyEps,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyEps,
};
