import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsWechatPay = {
  /**
   * Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Transaction ID of this particular WeChat Pay transaction.
   */
  transactionId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsWechatPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsWechatPay = {
  fingerprint?: string | null | undefined;
  transaction_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsWechatPay
 */
const SchemaIn$PaymentMethodDetailsWechatPay: z.ZodType<
  PaymentMethodDetailsWechatPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fingerprint: z.string().nullable().optional(),
    transaction_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      transaction_id: "transactionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsWechatPay
 */
const SchemaOut$PaymentMethodDetailsWechatPay: z.ZodType<
  External$PaymentMethodDetailsWechatPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsWechatPay // the object to be transformed
> = z
  .object({
    fingerprint: z.string().nullable().optional(),
    transactionId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fingerprint: "fingerprint",
      transactionId: "transaction_id",
    });
  });

export const Schemas$PaymentMethodDetailsWechatPay = {
  in: SchemaIn$PaymentMethodDetailsWechatPay,
  out: SchemaOut$PaymentMethodDetailsWechatPay,
};
