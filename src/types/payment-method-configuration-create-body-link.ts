import {
  External$PaymentMethodConfigurationCreateBodyLinkDisplayPreference,
  PaymentMethodConfigurationCreateBodyLinkDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyLinkDisplayPreference,
} from "./payment-method-configuration-create-body-link-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * [Link](https://stripe.com/docs/payments/link) is a payment method network. With Link, users save their payment details once, then reuse that information to pay with one click for any business on the network.
 */
export type PaymentMethodConfigurationCreateBodyLink = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyLinkDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyLink = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyLinkDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyLink
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyLink: z.ZodType<
  PaymentMethodConfigurationCreateBodyLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyLinkDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyLink
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyLink: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyLink, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyLink // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyLinkDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyLink = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyLink,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyLink,
};
