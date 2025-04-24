import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation
 */
export type BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation =
  {
    customMessage?: string | undefined;
  };

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation =
  {
    custom_message?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_message: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_message: "customMessage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation // the object to be transformed
> = z
  .object({
    customMessage: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMessage: "custom_message",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation,
  };
