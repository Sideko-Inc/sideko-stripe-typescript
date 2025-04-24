import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
 */
export type SourceCreateBodyRedirect = {
  returnUrl: string;
};

/**
 * @internal
 * SourceCreateBodyRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyRedirect = {
  return_url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyRedirect
 */
const SchemaIn$SourceCreateBodyRedirect: z.ZodType<
  SourceCreateBodyRedirect, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyRedirect
 */
const SchemaOut$SourceCreateBodyRedirect: z.ZodType<
  External$SourceCreateBodyRedirect, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyRedirect // the object to be transformed
> = z
  .object({
    returnUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      returnUrl: "return_url",
    });
  });

export const Schemas$SourceCreateBodyRedirect = {
  in: SchemaIn$SourceCreateBodyRedirect,
  out: SchemaOut$SourceCreateBodyRedirect,
};
