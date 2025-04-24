import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsPaymentsFeatures
 */
export type AccountSessionsCreateBodyComponentsPaymentsFeatures = {
  capturePayments?: boolean | undefined;
  destinationOnBehalfOfChargeManagement?: boolean | undefined;
  disputeManagement?: boolean | undefined;
  refundManagement?: boolean | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsPaymentsFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsPaymentsFeatures = {
  capture_payments?: boolean | undefined;
  destination_on_behalf_of_charge_management?: boolean | undefined;
  dispute_management?: boolean | undefined;
  refund_management?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsPaymentsFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsPaymentsFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsPaymentsFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_payments: z.boolean().optional(),
    destination_on_behalf_of_charge_management: z.boolean().optional(),
    dispute_management: z.boolean().optional(),
    refund_management: z.boolean().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsPaymentsFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsPaymentsFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsPaymentsFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsPaymentsFeatures // the object to be transformed
> = z
  .object({
    capturePayments: z.boolean().optional(),
    destinationOnBehalfOfChargeManagement: z.boolean().optional(),
    disputeManagement: z.boolean().optional(),
    refundManagement: z.boolean().optional(),
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

export const Schemas$AccountSessionsCreateBodyComponentsPaymentsFeatures = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsPaymentsFeatures,
  out: SchemaOut$AccountSessionsCreateBodyComponentsPaymentsFeatures,
};
