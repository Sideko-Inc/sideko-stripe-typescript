import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Tax details about the customer.
 */
export type CustomerUpdateBodyTax = {
  ipAddress?: (string | string) | undefined;
  validateLocation?: ("auto" | "deferred" | "immediately") | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyTax = {
  ip_address?: (string | string) | undefined;
  validate_location?: ("auto" | "deferred" | "immediately") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyTax
 */
const SchemaIn$CustomerUpdateBodyTax: z.ZodType<
  CustomerUpdateBodyTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.union([z.string(), z.string()]).optional(),
    validate_location: z.enum(["auto", "deferred", "immediately"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      validate_location: "validateLocation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyTax
 */
const SchemaOut$CustomerUpdateBodyTax: z.ZodType<
  External$CustomerUpdateBodyTax, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyTax // the object to be transformed
> = z
  .object({
    ipAddress: z.union([z.string(), z.string()]).optional(),
    validateLocation: z.enum(["auto", "deferred", "immediately"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      validateLocation: "validate_location",
    });
  });

export const Schemas$CustomerUpdateBodyTax = {
  in: SchemaIn$CustomerUpdateBodyTax,
  out: SchemaOut$CustomerUpdateBodyTax,
};
