import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type UsBankAccountNetworks = {
  /**
   * The preferred network.
   */
  preferred?: string | null | undefined;
  /**
   * All supported networks.
   */
  supported: ("ach" | "us_domestic_wire")[];
};

/**
 * @internal
 * UsBankAccountNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UsBankAccountNetworks = {
  preferred?: string | null | undefined;
  supported: ("ach" | "us_domestic_wire")[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UsBankAccountNetworks
 */
const SchemaIn$UsBankAccountNetworks: z.ZodType<
  UsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred: z.string().nullable().optional(),
    supported: z.array(z.enum(["ach", "us_domestic_wire"])),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
      supported: "supported",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UsBankAccountNetworks
 */
const SchemaOut$UsBankAccountNetworks: z.ZodType<
  External$UsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  UsBankAccountNetworks // the object to be transformed
> = z
  .object({
    preferred: z.string().nullable().optional(),
    supported: z.array(z.enum(["ach", "us_domestic_wire"])),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
      supported: "supported",
    });
  });

export const Schemas$UsBankAccountNetworks = {
  in: SchemaIn$UsBankAccountNetworks,
  out: SchemaOut$UsBankAccountNetworks,
};
