import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Header data.
 */
export type ForwardedRequestHeader = {
  /**
   * The header name.
   */
  name: string;
  /**
   * The header value.
   */
  value: string;
};

/**
 * @internal
 * ForwardedRequestHeader without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardedRequestHeader = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardedRequestHeader
 */
const SchemaIn$ForwardedRequestHeader: z.ZodType<
  ForwardedRequestHeader, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardedRequestHeader
 */
const SchemaOut$ForwardedRequestHeader: z.ZodType<
  External$ForwardedRequestHeader, // output type of this zod object
  z.ZodTypeDef,
  ForwardedRequestHeader // the object to be transformed
> = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      value: "value",
    });
  });

export const Schemas$ForwardedRequestHeader = {
  in: SchemaIn$ForwardedRequestHeader,
  out: SchemaOut$ForwardedRequestHeader,
};
