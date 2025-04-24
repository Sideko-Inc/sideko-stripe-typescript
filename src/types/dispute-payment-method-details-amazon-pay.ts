import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputePaymentMethodDetailsAmazonPay = {
  /**
   * The AmazonPay dispute type, chargeback or claim
   */
  disputeType?: ("chargeback" | "claim") | null | undefined;
};

/**
 * @internal
 * DisputePaymentMethodDetailsAmazonPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputePaymentMethodDetailsAmazonPay = {
  dispute_type?: ("chargeback" | "claim") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputePaymentMethodDetailsAmazonPay
 */
const SchemaIn$DisputePaymentMethodDetailsAmazonPay: z.ZodType<
  DisputePaymentMethodDetailsAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dispute_type: z.enum(["chargeback", "claim"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dispute_type: "disputeType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputePaymentMethodDetailsAmazonPay
 */
const SchemaOut$DisputePaymentMethodDetailsAmazonPay: z.ZodType<
  External$DisputePaymentMethodDetailsAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  DisputePaymentMethodDetailsAmazonPay // the object to be transformed
> = z
  .object({
    disputeType: z.enum(["chargeback", "claim"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputeType: "dispute_type",
    });
  });

export const Schemas$DisputePaymentMethodDetailsAmazonPay = {
  in: SchemaIn$DisputePaymentMethodDetailsAmazonPay,
  out: SchemaOut$DisputePaymentMethodDetailsAmazonPay,
};
