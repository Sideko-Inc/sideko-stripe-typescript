import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPaymentIntentPresentmentDetails = {
  /**
   * Amount intended to be collected by this payment, denominated in presentment_currency.
   */
  presentmentAmount: number;
  /**
   * Currency presented to the customer during payment.
   */
  presentmentCurrency: string;
};

/**
 * @internal
 * PaymentFlowsPaymentIntentPresentmentDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPaymentIntentPresentmentDetails = {
  presentment_amount: number;
  presentment_currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPaymentIntentPresentmentDetails
 */
const SchemaIn$PaymentFlowsPaymentIntentPresentmentDetails: z.ZodType<
  PaymentFlowsPaymentIntentPresentmentDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    presentment_amount: z.number().int(),
    presentment_currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      presentment_amount: "presentmentAmount",
      presentment_currency: "presentmentCurrency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPaymentIntentPresentmentDetails
 */
const SchemaOut$PaymentFlowsPaymentIntentPresentmentDetails: z.ZodType<
  External$PaymentFlowsPaymentIntentPresentmentDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPaymentIntentPresentmentDetails // the object to be transformed
> = z
  .object({
    presentmentAmount: z.number().int(),
    presentmentCurrency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      presentmentAmount: "presentment_amount",
      presentmentCurrency: "presentment_currency",
    });
  });

export const Schemas$PaymentFlowsPaymentIntentPresentmentDetails = {
  in: SchemaIn$PaymentFlowsPaymentIntentPresentmentDetails,
  out: SchemaOut$PaymentFlowsPaymentIntentPresentmentDetails,
};
