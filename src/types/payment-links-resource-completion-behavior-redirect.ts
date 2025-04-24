import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCompletionBehaviorRedirect = {
  /**
   * The URL the customer will be redirected to after the purchase is complete.
   */
  url: string;
};

/**
 * @internal
 * PaymentLinksResourceCompletionBehaviorRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCompletionBehaviorRedirect = {
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCompletionBehaviorRedirect
 */
const SchemaIn$PaymentLinksResourceCompletionBehaviorRedirect: z.ZodType<
  PaymentLinksResourceCompletionBehaviorRedirect, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCompletionBehaviorRedirect
 */
const SchemaOut$PaymentLinksResourceCompletionBehaviorRedirect: z.ZodType<
  External$PaymentLinksResourceCompletionBehaviorRedirect, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCompletionBehaviorRedirect // the object to be transformed
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

export const Schemas$PaymentLinksResourceCompletionBehaviorRedirect = {
  in: SchemaIn$PaymentLinksResourceCompletionBehaviorRedirect,
  out: SchemaOut$PaymentLinksResourceCompletionBehaviorRedirect,
};
