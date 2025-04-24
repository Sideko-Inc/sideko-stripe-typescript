import {
  External$PaymentMethodConfigurationCreateBodyEpsDisplayPreference,
  PaymentMethodConfigurationCreateBodyEpsDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyEpsDisplayPreference,
} from "./payment-method-configuration-create-body-eps-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers. Check this [page](https://stripe.com/docs/payments/eps) for more details.
 */
export type PaymentMethodConfigurationCreateBodyEps = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyEpsDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyEps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyEps = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyEpsDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyEps
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyEps: z.ZodType<
  PaymentMethodConfigurationCreateBodyEps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyEpsDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyEps
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyEps: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyEps, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyEps // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyEpsDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyEps = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyEps,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyEps,
};
