import {
  External$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference,
  PaymentMethodConfigurationUpdateBodyIdealDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference,
} from "./payment-method-configuration-update-body-ideal-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online transactions close to 55%. Check this [page](https://stripe.com/docs/payments/ideal) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyIdeal = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyIdealDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyIdeal = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyIdeal
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyIdeal: z.ZodType<
  PaymentMethodConfigurationUpdateBodyIdeal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyIdeal
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyIdeal: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyIdeal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyIdeal // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyIdeal = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyIdeal,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyIdeal,
};
