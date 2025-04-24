import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentNextActionRedirectToUrl = {
  /**
   * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
   */
  returnUrl?: string | null | undefined;
  /**
   * The URL you must redirect your customer to in order to authenticate.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * SetupIntentNextActionRedirectToUrl without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentNextActionRedirectToUrl = {
  return_url?: string | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentNextActionRedirectToUrl
 */
const SchemaIn$SetupIntentNextActionRedirectToUrl: z.ZodType<
  SetupIntentNextActionRedirectToUrl, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    return_url: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      return_url: "returnUrl",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentNextActionRedirectToUrl
 */
const SchemaOut$SetupIntentNextActionRedirectToUrl: z.ZodType<
  External$SetupIntentNextActionRedirectToUrl, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentNextActionRedirectToUrl // the object to be transformed
> = z
  .object({
    returnUrl: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      returnUrl: "return_url",
      url: "url",
    });
  });

export const Schemas$SetupIntentNextActionRedirectToUrl = {
  in: SchemaIn$SetupIntentNextActionRedirectToUrl,
  out: SchemaOut$SetupIntentNextActionRedirectToUrl,
};
