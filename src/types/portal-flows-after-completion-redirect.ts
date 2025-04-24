import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsAfterCompletionRedirect = {
  /**
   * The URL the customer will be redirected to after the flow is completed.
   */
  returnUrl: string;
};

/**
 * @internal
 * PortalFlowsAfterCompletionRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsAfterCompletionRedirect = {
  return_url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsAfterCompletionRedirect
 */
const SchemaIn$PortalFlowsAfterCompletionRedirect: z.ZodType<
  PortalFlowsAfterCompletionRedirect, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    return_url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      return_url: "returnUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsAfterCompletionRedirect
 */
const SchemaOut$PortalFlowsAfterCompletionRedirect: z.ZodType<
  External$PortalFlowsAfterCompletionRedirect, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsAfterCompletionRedirect // the object to be transformed
> = z
  .object({
    returnUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      returnUrl: "return_url",
    });
  });

export const Schemas$PortalFlowsAfterCompletionRedirect = {
  in: SchemaIn$PortalFlowsAfterCompletionRedirect,
  out: SchemaOut$PortalFlowsAfterCompletionRedirect,
};
