import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet = {
  /**
   * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
   */
  type: "apple_pay" | "google_pay" | "samsung_pay" | "unknown";
};

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet =
  {
    type: "apple_pay" | "google_pay" | "samsung_pay" | "unknown";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["apple_pay", "google_pay", "samsung_pay", "unknown"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet // the object to be transformed
> = z
  .object({
    type: z.enum(["apple_pay", "google_pay", "samsung_pay", "unknown"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet =
  {
    in: SchemaIn$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
    out: SchemaOut$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
  };
