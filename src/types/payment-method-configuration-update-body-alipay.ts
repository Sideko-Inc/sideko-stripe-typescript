import {
  External$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference,
} from "./payment-method-configuration-update-body-alipay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. Alipay has a low dispute rate and reduces fraud by authenticating payments using the customer's login credentials. Check this [page](https://stripe.com/docs/payments/alipay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyAlipay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAlipay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAlipay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAlipay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAlipay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAlipay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAlipay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAlipay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAlipay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAlipay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAlipay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAlipay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAlipay,
};
