import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.
 */
export type TaxIdListOwner = {
  account?: string | undefined;
  customer?: string | undefined;
  type: "account" | "application" | "customer" | "self";
};

/**
 * @internal
 * TaxIdListOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxIdListOwner = {
  account?: string | undefined;
  customer?: string | undefined;
  type: "account" | "application" | "customer" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxIdListOwner
 */
const SchemaIn$TaxIdListOwner: z.ZodType<
  TaxIdListOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    customer: z.string().optional(),
    type: z.enum(["account", "application", "customer", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      customer: "customer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxIdListOwner
 */
const SchemaOut$TaxIdListOwner: z.ZodType<
  External$TaxIdListOwner, // output type of this zod object
  z.ZodTypeDef,
  TaxIdListOwner // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    customer: z.string().optional(),
    type: z.enum(["account", "application", "customer", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      customer: "customer",
      type: "type",
    });
  });

export const Schemas$TaxIdListOwner = {
  in: SchemaIn$TaxIdListOwner,
  out: SchemaOut$TaxIdListOwner,
};
