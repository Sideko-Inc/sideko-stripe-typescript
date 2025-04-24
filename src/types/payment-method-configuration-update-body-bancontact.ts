import {
  External$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference,
  PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference,
} from "./payment-method-configuration-update-body-bancontact-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. [Customers](https://stripe.com/docs/api/customers) use a Bancontact card or mobile app linked to a Belgian bank account to make online payments that are secure, guaranteed, and confirmed immediately. Check this [page](https://stripe.com/docs/payments/bancontact) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyBancontact = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBancontact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBancontact = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBancontact
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBancontact: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBancontact, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBancontact
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBancontact: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBancontact, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBancontact // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBancontact = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyBancontact,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyBancontact,
};
