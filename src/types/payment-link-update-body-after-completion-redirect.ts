import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyAfterCompletionRedirect
 */
export type PaymentLinkUpdateBodyAfterCompletionRedirect = {
  url: string;
};

/**
 * @internal
 * PaymentLinkUpdateBodyAfterCompletionRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyAfterCompletionRedirect = {
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyAfterCompletionRedirect
 */
const SchemaIn$PaymentLinkUpdateBodyAfterCompletionRedirect: z.ZodType<
  PaymentLinkUpdateBodyAfterCompletionRedirect, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyAfterCompletionRedirect
 */
const SchemaOut$PaymentLinkUpdateBodyAfterCompletionRedirect: z.ZodType<
  External$PaymentLinkUpdateBodyAfterCompletionRedirect, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyAfterCompletionRedirect // the object to be transformed
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

export const Schemas$PaymentLinkUpdateBodyAfterCompletionRedirect = {
  in: SchemaIn$PaymentLinkUpdateBodyAfterCompletionRedirect,
  out: SchemaOut$PaymentLinkUpdateBodyAfterCompletionRedirect,
};
