import {
  BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation,
  External$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation,
  Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation,
} from "./billing-portal-session-create-body-flow-data-after-completion-hosted-confirmation";
import {
  BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect,
  External$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect,
  Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect,
} from "./billing-portal-session-create-body-flow-data-after-completion-redirect";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataAfterCompletion
 */
export type BillingPortalSessionCreateBodyFlowDataAfterCompletion = {
  hostedConfirmation?:
    | BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation
    | undefined;
  redirect?:
    | BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect
    | undefined;
  type: "hosted_confirmation" | "portal_homepage" | "redirect";
};

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataAfterCompletion without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataAfterCompletion = {
  hosted_confirmation?:
    | External$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation
    | undefined;
  redirect?:
    | External$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect
    | undefined;
  type: "hosted_confirmation" | "portal_homepage" | "redirect";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataAfterCompletion
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataAfterCompletion: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_confirmation:
      Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation.in.optional(),
    redirect:
      Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect.in.optional(),
    type: z.enum(["hosted_confirmation", "portal_homepage", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hosted_confirmation: "hostedConfirmation",
      redirect: "redirect",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataAfterCompletion
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataAfterCompletion: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataAfterCompletion // the object to be transformed
> = z
  .object({
    hostedConfirmation:
      Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionHostedConfirmation.out.optional(),
    redirect:
      Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect.out.optional(),
    type: z.enum(["hosted_confirmation", "portal_homepage", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedConfirmation: "hosted_confirmation",
      redirect: "redirect",
      type: "type",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletion = {
  in: SchemaIn$BillingPortalSessionCreateBodyFlowDataAfterCompletion,
  out: SchemaOut$BillingPortalSessionCreateBodyFlowDataAfterCompletion,
};
