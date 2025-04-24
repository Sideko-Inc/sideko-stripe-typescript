import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsWechatPay = {
  /**
   * The app ID registered with WeChat Pay. Only required when client is ios or android.
   */
  appId?: string | null | undefined;
  /**
   * The client type that the end customer will pay from
   */
  client?: ("android" | "ios" | "web") | null | undefined;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsWechatPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsWechatPay = {
  app_id?: string | null | undefined;
  client?: ("android" | "ios" | "web") | null | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsWechatPay
 */
const SchemaIn$PaymentMethodOptionsWechatPay: z.ZodType<
  PaymentMethodOptionsWechatPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app_id: z.string().nullable().optional(),
    client: z.enum(["android", "ios", "web"]).nullable().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app_id: "appId",
      client: "client",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsWechatPay
 */
const SchemaOut$PaymentMethodOptionsWechatPay: z.ZodType<
  External$PaymentMethodOptionsWechatPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsWechatPay // the object to be transformed
> = z
  .object({
    appId: z.string().nullable().optional(),
    client: z.enum(["android", "ios", "web"]).nullable().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appId: "app_id",
      client: "client",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentMethodOptionsWechatPay = {
  in: SchemaIn$PaymentMethodOptionsWechatPay,
  out: SchemaOut$PaymentMethodOptionsWechatPay,
};
