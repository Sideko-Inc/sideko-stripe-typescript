import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyAfterCompletionRedirect
 */
export type PaymentLinkCreateBodyAfterCompletionRedirect = {
  url: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyAfterCompletionRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyAfterCompletionRedirect = {
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyAfterCompletionRedirect
 */
const SchemaIn$PaymentLinkCreateBodyAfterCompletionRedirect: z.ZodType<
  PaymentLinkCreateBodyAfterCompletionRedirect, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyAfterCompletionRedirect
 */
const SchemaOut$PaymentLinkCreateBodyAfterCompletionRedirect: z.ZodType<
  External$PaymentLinkCreateBodyAfterCompletionRedirect, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyAfterCompletionRedirect // the object to be transformed
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

export const Schemas$PaymentLinkCreateBodyAfterCompletionRedirect = {
  in: SchemaIn$PaymentLinkCreateBodyAfterCompletionRedirect,
  out: SchemaOut$PaymentLinkCreateBodyAfterCompletionRedirect,
};
