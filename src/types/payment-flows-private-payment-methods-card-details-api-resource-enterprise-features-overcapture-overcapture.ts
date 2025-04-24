import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture =
  {
    /**
     * The maximum amount that can be captured.
     */
    maximumAmountCapturable: number;
    /**
     * Indicates whether or not the authorized amount can be over-captured.
     */
    status: "available" | "unavailable";
  };

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture =
  {
    maximum_amount_capturable: number;
    status: "available" | "unavailable";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum_amount_capturable: z.number().int(),
    status: z.enum(["available", "unavailable"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum_amount_capturable: "maximumAmountCapturable",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture // the object to be transformed
> = z
  .object({
    maximumAmountCapturable: z.number().int(),
    status: z.enum(["available", "unavailable"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximumAmountCapturable: "maximum_amount_capturable",
      status: "status",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture =
  {
    in: SchemaIn$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture,
    out: SchemaOut$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture,
  };
