import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
  /**
   * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
   */
  buyerId?: string | undefined;
  /**
   * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Transaction ID of this particular Alipay transaction.
   */
  transactionId?: string | null | undefined;
};

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsAlipayDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
  buyer_id?: string | undefined;
  fingerprint?: string | null | undefined;
  transaction_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsAlipayDetails
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsAlipayDetails: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsAlipayDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buyer_id: z.string().optional(),
    fingerprint: z.string().nullable().optional(),
    transaction_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyer_id: "buyerId",
      fingerprint: "fingerprint",
      transaction_id: "transactionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsAlipayDetails
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsAlipayDetails: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsAlipayDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsAlipayDetails // the object to be transformed
> = z
  .object({
    buyerId: z.string().optional(),
    fingerprint: z.string().nullable().optional(),
    transactionId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
      fingerprint: "fingerprint",
      transactionId: "transaction_id",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
  in: SchemaIn$PaymentFlowsPrivatePaymentMethodsAlipayDetails,
  out: SchemaOut$PaymentFlowsPrivatePaymentMethodsAlipayDetails,
};
