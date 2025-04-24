import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect
 */
export type BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect = {
  returnUrl: string;
};

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect =
  {
    return_url: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect // the object to be transformed
> = z
  .object({
    returnUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      returnUrl: "return_url",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataAfterCompletionRedirect,
  };
