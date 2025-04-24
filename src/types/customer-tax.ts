import {
  CustomerTaxLocation,
  External$CustomerTaxLocation,
  Schemas$CustomerTaxLocation,
} from "./customer-tax-location";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerTax = {
  /**
   * Surfaces if automatic tax computation is possible given the current customer location information.
   */
  automaticTax:
    | "failed"
    | "not_collecting"
    | "supported"
    | "unrecognized_location";
  /**
   * A recent IP address of the customer used for tax reporting and tax location inference.
   */
  ipAddress?: string | null | undefined;
  location?: CustomerTaxLocation | undefined;
};

/**
 * @internal
 * CustomerTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerTax = {
  automatic_tax:
    | "failed"
    | "not_collecting"
    | "supported"
    | "unrecognized_location";
  ip_address?: string | null | undefined;
  location?: External$CustomerTaxLocation | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerTax
 */
const SchemaIn$CustomerTax: z.ZodType<
  CustomerTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    automatic_tax: z.enum([
      "failed",
      "not_collecting",
      "supported",
      "unrecognized_location",
    ]),
    ip_address: z.string().nullable().optional(),
    location: Schemas$CustomerTaxLocation.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      automatic_tax: "automaticTax",
      ip_address: "ipAddress",
      location: "location",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerTax
 */
const SchemaOut$CustomerTax: z.ZodType<
  External$CustomerTax, // output type of this zod object
  z.ZodTypeDef,
  CustomerTax // the object to be transformed
> = z
  .object({
    automaticTax: z.enum([
      "failed",
      "not_collecting",
      "supported",
      "unrecognized_location",
    ]),
    ipAddress: z.string().nullable().optional(),
    location: Schemas$CustomerTaxLocation.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      automaticTax: "automatic_tax",
      ipAddress: "ip_address",
      location: "location",
    });
  });

export const Schemas$CustomerTax = {
  in: SchemaIn$CustomerTax,
  out: SchemaOut$CustomerTax,
};
