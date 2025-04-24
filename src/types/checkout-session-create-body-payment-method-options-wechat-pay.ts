import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay = {
  appId?: string | undefined;
  client: "android" | "ios" | "web";
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay = {
  app_id?: string | undefined;
  client: "android" | "ios" | "web";
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app_id: z.string().optional(),
    client: z.enum(["android", "ios", "web"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay // the object to be transformed
> = z
  .object({
    appId: z.string().optional(),
    client: z.enum(["android", "ios", "web"]),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appId: "app_id",
      client: "client",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsWechatPay,
};
