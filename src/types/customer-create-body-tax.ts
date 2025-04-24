import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Tax details about the customer.
 */
export type CustomerCreateBodyTax = {
  ipAddress?: (string | string) | undefined;
  validateLocation?: ("deferred" | "immediately") | undefined;
};

/**
 * @internal
 * CustomerCreateBodyTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyTax = {
  ip_address?: (string | string) | undefined;
  validate_location?: ("deferred" | "immediately") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyTax
 */
const SchemaIn$CustomerCreateBodyTax: z.ZodType<
  CustomerCreateBodyTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.union([z.string(), z.string()]).optional(),
    validate_location: z.enum(["deferred", "immediately"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      validate_location: "validateLocation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyTax
 */
const SchemaOut$CustomerCreateBodyTax: z.ZodType<
  External$CustomerCreateBodyTax, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyTax // the object to be transformed
> = z
  .object({
    ipAddress: z.union([z.string(), z.string()]).optional(),
    validateLocation: z.enum(["deferred", "immediately"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      validateLocation: "validate_location",
    });
  });

export const Schemas$CustomerCreateBodyTax = {
  in: SchemaIn$CustomerCreateBodyTax,
  out: SchemaOut$CustomerCreateBodyTax,
};
