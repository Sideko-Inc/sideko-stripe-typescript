import {
  External$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference,
} from "./payment-method-configuration-update-body-wechat-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * WeChat, owned by Tencent, is China's leading mobile app with over 1 billion monthly active users. Chinese consumers can use WeChat Pay to pay for goods and services inside of businesses' apps and websites. WeChat Pay users buy most frequently in gaming, e-commerce, travel, online education, and food/nutrition. Check this [page](https://stripe.com/docs/payments/wechat-pay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyWechatPay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyWechatPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyWechatPay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyWechatPay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyWechatPay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyWechatPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyWechatPay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyWechatPay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyWechatPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyWechatPay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyWechatPay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyWechatPay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyWechatPay,
};
