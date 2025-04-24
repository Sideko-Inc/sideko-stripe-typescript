import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ForwardingRequestCreateBodyRequestHeadersItem
 */
export type ForwardingRequestCreateBodyRequestHeadersItem = {
  name: string;
  value: string;
};

/**
 * @internal
 * ForwardingRequestCreateBodyRequestHeadersItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardingRequestCreateBodyRequestHeadersItem = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardingRequestCreateBodyRequestHeadersItem
 */
const SchemaIn$ForwardingRequestCreateBodyRequestHeadersItem: z.ZodType<
  ForwardingRequestCreateBodyRequestHeadersItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardingRequestCreateBodyRequestHeadersItem
 */
const SchemaOut$ForwardingRequestCreateBodyRequestHeadersItem: z.ZodType<
  External$ForwardingRequestCreateBodyRequestHeadersItem, // output type of this zod object
  z.ZodTypeDef,
  ForwardingRequestCreateBodyRequestHeadersItem // the object to be transformed
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

export const Schemas$ForwardingRequestCreateBodyRequestHeadersItem = {
  in: SchemaIn$ForwardingRequestCreateBodyRequestHeadersItem,
  out: SchemaOut$ForwardingRequestCreateBodyRequestHeadersItem,
};
