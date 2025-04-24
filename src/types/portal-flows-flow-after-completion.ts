import {
  External$PortalFlowsAfterCompletionHostedConfirmation,
  PortalFlowsAfterCompletionHostedConfirmation,
  Schemas$PortalFlowsAfterCompletionHostedConfirmation,
} from "./portal-flows-after-completion-hosted-confirmation";
import {
  External$PortalFlowsAfterCompletionRedirect,
  PortalFlowsAfterCompletionRedirect,
  Schemas$PortalFlowsAfterCompletionRedirect,
} from "./portal-flows-after-completion-redirect";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsFlowAfterCompletion = {
  hostedConfirmation?: PortalFlowsAfterCompletionHostedConfirmation | undefined;
  redirect?: PortalFlowsAfterCompletionRedirect | undefined;
  /**
   * The specified type of behavior after the flow is completed.
   */
  type: "hosted_confirmation" | "portal_homepage" | "redirect";
};

/**
 * @internal
 * PortalFlowsFlowAfterCompletion without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsFlowAfterCompletion = {
  hosted_confirmation?:
    | External$PortalFlowsAfterCompletionHostedConfirmation
    | undefined;
  redirect?: External$PortalFlowsAfterCompletionRedirect | undefined;
  type: "hosted_confirmation" | "portal_homepage" | "redirect";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsFlowAfterCompletion
 */
const SchemaIn$PortalFlowsFlowAfterCompletion: z.ZodType<
  PortalFlowsFlowAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_confirmation:
      Schemas$PortalFlowsAfterCompletionHostedConfirmation.in.optional(),
    redirect: Schemas$PortalFlowsAfterCompletionRedirect.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsFlowAfterCompletion
 */
const SchemaOut$PortalFlowsFlowAfterCompletion: z.ZodType<
  External$PortalFlowsFlowAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsFlowAfterCompletion // the object to be transformed
> = z
  .object({
    hostedConfirmation:
      Schemas$PortalFlowsAfterCompletionHostedConfirmation.out.optional(),
    redirect: Schemas$PortalFlowsAfterCompletionRedirect.out.optional(),
    type: z.enum(["hosted_confirmation", "portal_homepage", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedConfirmation: "hosted_confirmation",
      redirect: "redirect",
      type: "type",
    });
  });

export const Schemas$PortalFlowsFlowAfterCompletion = {
  in: SchemaIn$PortalFlowsFlowAfterCompletion,
  out: SchemaOut$PortalFlowsFlowAfterCompletion,
};
