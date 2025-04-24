import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0 = {
  appId?: string | undefined;
  client?: ("android" | "ios" | "web") | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0 =
  {
    app_id?: string | undefined;
    client?: ("android" | "ios" | "web") | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app_id: z.string().optional(),
    client: z.enum(["android", "ios", "web"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0 // the object to be transformed
> = z
  .object({
    appId: z.string().optional(),
    client: z.enum(["android", "ios", "web"]).optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appId: "app_id",
      client: "client",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsWechatPayObj0,
  };
