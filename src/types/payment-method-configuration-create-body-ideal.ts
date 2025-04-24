import {
  External$PaymentMethodConfigurationCreateBodyIdealDisplayPreference,
  PaymentMethodConfigurationCreateBodyIdealDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyIdealDisplayPreference,
} from "./payment-method-configuration-create-body-ideal-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online transactions close to 55%. Check this [page](https://stripe.com/docs/payments/ideal) for more details.
 */
export type PaymentMethodConfigurationCreateBodyIdeal = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyIdealDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyIdeal = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyIdealDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyIdeal
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyIdeal: z.ZodType<
  PaymentMethodConfigurationCreateBodyIdeal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyIdealDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyIdeal
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyIdeal: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyIdeal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyIdeal // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyIdealDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyIdeal = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyIdeal,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyIdeal,
};
