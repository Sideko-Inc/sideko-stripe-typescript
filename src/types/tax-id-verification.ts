import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxIdVerification = {
  /**
   * Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
   */
  status: "pending" | "unavailable" | "unverified" | "verified";
  /**
   * Verified address.
   */
  verifiedAddress?: string | null | undefined;
  /**
   * Verified name.
   */
  verifiedName?: string | null | undefined;
};

/**
 * @internal
 * TaxIdVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxIdVerification = {
  status: "pending" | "unavailable" | "unverified" | "verified";
  verified_address?: string | null | undefined;
  verified_name?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxIdVerification
 */
const SchemaIn$TaxIdVerification: z.ZodType<
  TaxIdVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["pending", "unavailable", "unverified", "verified"]),
    verified_address: z.string().nullable().optional(),
    verified_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
      verified_address: "verifiedAddress",
      verified_name: "verifiedName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxIdVerification
 */
const SchemaOut$TaxIdVerification: z.ZodType<
  External$TaxIdVerification, // output type of this zod object
  z.ZodTypeDef,
  TaxIdVerification // the object to be transformed
> = z
  .object({
    status: z.enum(["pending", "unavailable", "unverified", "verified"]),
    verifiedAddress: z.string().nullable().optional(),
    verifiedName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
      verifiedAddress: "verified_address",
      verifiedName: "verified_name",
    });
  });

export const Schemas$TaxIdVerification = {
  in: SchemaIn$TaxIdVerification,
  out: SchemaOut$TaxIdVerification,
};
