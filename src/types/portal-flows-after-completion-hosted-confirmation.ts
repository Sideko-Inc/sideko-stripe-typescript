import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsAfterCompletionHostedConfirmation = {
  /**
   * A custom message to display to the customer after the flow is completed.
   */
  customMessage?: string | null | undefined;
};

/**
 * @internal
 * PortalFlowsAfterCompletionHostedConfirmation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsAfterCompletionHostedConfirmation = {
  custom_message?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsAfterCompletionHostedConfirmation
 */
const SchemaIn$PortalFlowsAfterCompletionHostedConfirmation: z.ZodType<
  PortalFlowsAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_message: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_message: "customMessage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsAfterCompletionHostedConfirmation
 */
const SchemaOut$PortalFlowsAfterCompletionHostedConfirmation: z.ZodType<
  External$PortalFlowsAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsAfterCompletionHostedConfirmation // the object to be transformed
> = z
  .object({
    customMessage: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMessage: "custom_message",
    });
  });

export const Schemas$PortalFlowsAfterCompletionHostedConfirmation = {
  in: SchemaIn$PortalFlowsAfterCompletionHostedConfirmation,
  out: SchemaOut$PortalFlowsAfterCompletionHostedConfirmation,
};
