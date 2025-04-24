import {
  External$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference,
  PaymentMethodConfigurationCreateBodyBancontactDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference,
} from "./payment-method-configuration-create-body-bancontact-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. [Customers](https://stripe.com/docs/api/customers) use a Bancontact card or mobile app linked to a Belgian bank account to make online payments that are secure, guaranteed, and confirmed immediately. Check this [page](https://stripe.com/docs/payments/bancontact) for more details.
 */
export type PaymentMethodConfigurationCreateBodyBancontact = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyBancontactDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBancontact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBancontact = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBancontact
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBancontact: z.ZodType<
  PaymentMethodConfigurationCreateBodyBancontact, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBancontact
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBancontact: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBancontact, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBancontact // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBancontact = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyBancontact,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyBancontact,
};
