import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceRedirectFlow = {
  /**
   * The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`.
   */
  failureReason?: string | null | undefined;
  /**
   * The URL you provide to redirect the customer to after they authenticated their payment.
   */
  returnUrl: string;
  /**
   * The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (succesful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused).
   */
  status: string;
  /**
   * The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.
   */
  url: string;
};

/**
 * @internal
 * SourceRedirectFlow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceRedirectFlow = {
  failure_reason?: string | null | undefined;
  return_url: string;
  status: string;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceRedirectFlow
 */
const SchemaIn$SourceRedirectFlow: z.ZodType<
  SourceRedirectFlow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    failure_reason: z.string().nullable().optional(),
    return_url: z.string(),
    status: z.string(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      failure_reason: "failureReason",
      return_url: "returnUrl",
      status: "status",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceRedirectFlow
 */
const SchemaOut$SourceRedirectFlow: z.ZodType<
  External$SourceRedirectFlow, // output type of this zod object
  z.ZodTypeDef,
  SourceRedirectFlow // the object to be transformed
> = z
  .object({
    failureReason: z.string().nullable().optional(),
    returnUrl: z.string(),
    status: z.string(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      failureReason: "failure_reason",
      returnUrl: "return_url",
      status: "status",
      url: "url",
    });
  });

export const Schemas$SourceRedirectFlow = {
  in: SchemaIn$SourceRedirectFlow,
  out: SchemaOut$SourceRedirectFlow,
};
