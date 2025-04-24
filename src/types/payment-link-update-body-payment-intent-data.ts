import {
  External$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0,
  PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0,
  Schemas$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0,
} from "./payment-link-update-body-payment-intent-data-metadata-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
 */
export type PaymentLinkUpdateBodyPaymentIntentData = {
  description?: (string | string) | undefined;
  metadata?:
    | (PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 | string)
    | undefined;
  statementDescriptor?: (string | string) | undefined;
  statementDescriptorSuffix?: (string | string) | undefined;
  transferGroup?: (string | string) | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyPaymentIntentData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyPaymentIntentData = {
  description?: (string | string) | undefined;
  metadata?:
    | (External$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 | string)
    | undefined;
  statement_descriptor?: (string | string) | undefined;
  statement_descriptor_suffix?: (string | string) | undefined;
  transfer_group?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyPaymentIntentData
 */
const SchemaIn$PaymentLinkUpdateBodyPaymentIntentData: z.ZodType<
  PaymentLinkUpdateBodyPaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.union([z.string(), z.string()]).optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    statement_descriptor: z.union([z.string(), z.string()]).optional(),
    statement_descriptor_suffix: z.union([z.string(), z.string()]).optional(),
    transfer_group: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      metadata: "metadata",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyPaymentIntentData
 */
const SchemaOut$PaymentLinkUpdateBodyPaymentIntentData: z.ZodType<
  External$PaymentLinkUpdateBodyPaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyPaymentIntentData // the object to be transformed
> = z
  .object({
    description: z.union([z.string(), z.string()]).optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    statementDescriptor: z.union([z.string(), z.string()]).optional(),
    statementDescriptorSuffix: z.union([z.string(), z.string()]).optional(),
    transferGroup: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      metadata: "metadata",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$PaymentLinkUpdateBodyPaymentIntentData = {
  in: SchemaIn$PaymentLinkUpdateBodyPaymentIntentData,
  out: SchemaOut$PaymentLinkUpdateBodyPaymentIntentData,
};
