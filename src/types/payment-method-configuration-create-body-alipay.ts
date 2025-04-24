import {
  External$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference,
  PaymentMethodConfigurationCreateBodyAlipayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference,
} from "./payment-method-configuration-create-body-alipay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. Alipay has a low dispute rate and reduces fraud by authenticating payments using the customer's login credentials. Check this [page](https://stripe.com/docs/payments/alipay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyAlipay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAlipayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAlipay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAlipay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAlipay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAlipay: z.ZodType<
  PaymentMethodConfigurationCreateBodyAlipay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAlipay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAlipay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAlipay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAlipay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAlipay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAlipay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAlipay,
};
