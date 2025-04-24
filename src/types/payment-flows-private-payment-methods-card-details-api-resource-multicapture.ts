import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture =
  {
    /**
     * Indicates whether or not multiple captures are supported.
     */
    status: "available" | "unavailable";
  };

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture =
  {
    status: "available" | "unavailable";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["available", "unavailable"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture // the object to be transformed
> = z
  .object({
    status: z.enum(["available", "unavailable"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture =
  {
    in: SchemaIn$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture,
    out: SchemaOut$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture,
  };
