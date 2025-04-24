import {
  External$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference,
  PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference,
} from "./payment-method-configuration-create-body-wechat-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * WeChat, owned by Tencent, is China's leading mobile app with over 1 billion monthly active users. Chinese consumers can use WeChat Pay to pay for goods and services inside of businesses' apps and websites. WeChat Pay users buy most frequently in gaming, e-commerce, travel, online education, and food/nutrition. Check this [page](https://stripe.com/docs/payments/wechat-pay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyWechatPay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyWechatPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyWechatPay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyWechatPay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyWechatPay: z.ZodType<
  PaymentMethodConfigurationCreateBodyWechatPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyWechatPay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyWechatPay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyWechatPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyWechatPay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyWechatPay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyWechatPay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyWechatPay,
};
