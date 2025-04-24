import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedPaymentsFeatures = {
  /**
   * Whether to allow capturing and cancelling payment intents. This is `true` by default.
   */
  capturePayments: boolean;
  /**
   * Whether to allow connected accounts to manage destination charges that are created on behalf of them. This is `false` by default.
   */
  destinationOnBehalfOfChargeManagement: boolean;
  /**
   * Whether to allow responding to disputes, including submitting evidence and accepting disputes. This is `true` by default.
   */
  disputeManagement: boolean;
  /**
   * Whether to allow sending refunds. This is `true` by default.
   */
  refundManagement: boolean;
};

/**
 * @internal
 * ConnectEmbeddedPaymentsFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedPaymentsFeatures = {
  capture_payments: boolean;
  destination_on_behalf_of_charge_management: boolean;
  dispute_management: boolean;
  refund_management: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedPaymentsFeatures
 */
const SchemaIn$ConnectEmbeddedPaymentsFeatures: z.ZodType<
  ConnectEmbeddedPaymentsFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_payments: z.boolean(),
    destination_on_behalf_of_charge_management: z.boolean(),
    dispute_management: z.boolean(),
    refund_management: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_payments: "capturePayments",
      destination_on_behalf_of_charge_management:
        "destinationOnBehalfOfChargeManagement",
      dispute_management: "disputeManagement",
      refund_management: "refundManagement",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedPaymentsFeatures
 */
const SchemaOut$ConnectEmbeddedPaymentsFeatures: z.ZodType<
  External$ConnectEmbeddedPaymentsFeatures, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedPaymentsFeatures // the object to be transformed
> = z
  .object({
    capturePayments: z.boolean(),
    destinationOnBehalfOfChargeManagement: z.boolean(),
    disputeManagement: z.boolean(),
    refundManagement: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capturePayments: "capture_payments",
      destinationOnBehalfOfChargeManagement:
        "destination_on_behalf_of_charge_management",
      disputeManagement: "dispute_management",
      refundManagement: "refund_management",
    });
  });

export const Schemas$ConnectEmbeddedPaymentsFeatures = {
  in: SchemaIn$ConnectEmbeddedPaymentsFeatures,
  out: SchemaOut$ConnectEmbeddedPaymentsFeatures,
};
