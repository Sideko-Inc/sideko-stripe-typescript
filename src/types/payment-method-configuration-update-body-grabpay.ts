import {
  External$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference,
} from "./payment-method-configuration-update-body-grabpay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * GrabPay is a payment method developed by [Grab](https://www.grab.com/sg/consumer/finance/pay/). GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with. Check this [page](https://stripe.com/docs/payments/grabpay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyGrabpay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyGrabpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyGrabpay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyGrabpay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyGrabpay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyGrabpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyGrabpay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyGrabpay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyGrabpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyGrabpay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyGrabpay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyGrabpay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyGrabpay,
};
