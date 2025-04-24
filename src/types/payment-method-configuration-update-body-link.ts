import {
  External$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference,
  PaymentMethodConfigurationUpdateBodyLinkDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference,
} from "./payment-method-configuration-update-body-link-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * [Link](https://stripe.com/docs/payments/link) is a payment method network. With Link, users save their payment details once, then reuse that information to pay with one click for any business on the network.
 */
export type PaymentMethodConfigurationUpdateBodyLink = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyLinkDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyLink = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyLink
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyLink: z.ZodType<
  PaymentMethodConfigurationUpdateBodyLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyLink
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyLink: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyLink, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyLink // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyLink = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyLink,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyLink,
};
