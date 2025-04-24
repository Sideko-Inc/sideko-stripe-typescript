import {
  External$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference,
  PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference,
} from "./payment-method-configuration-create-body-grabpay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * GrabPay is a payment method developed by [Grab](https://www.grab.com/sg/consumer/finance/pay/). GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with. Check this [page](https://stripe.com/docs/payments/grabpay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyGrabpay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyGrabpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyGrabpay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyGrabpay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyGrabpay: z.ZodType<
  PaymentMethodConfigurationCreateBodyGrabpay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyGrabpay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyGrabpay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyGrabpay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyGrabpay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyGrabpay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyGrabpay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyGrabpay,
};
