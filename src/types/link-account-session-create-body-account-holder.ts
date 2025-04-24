import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The account holder to link accounts for.
 */
export type LinkAccountSessionCreateBodyAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
  type: "account" | "customer";
};

/**
 * @internal
 * LinkAccountSessionCreateBodyAccountHolder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinkAccountSessionCreateBodyAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
  type: "account" | "customer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinkAccountSessionCreateBodyAccountHolder
 */
const SchemaIn$LinkAccountSessionCreateBodyAccountHolder: z.ZodType<
  LinkAccountSessionCreateBodyAccountHolder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    customer: z.string().optional(),
    type: z.enum(["account", "customer"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinkAccountSessionCreateBodyAccountHolder
 */
const SchemaOut$LinkAccountSessionCreateBodyAccountHolder: z.ZodType<
  External$LinkAccountSessionCreateBodyAccountHolder, // output type of this zod object
  z.ZodTypeDef,
  LinkAccountSessionCreateBodyAccountHolder // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    customer: z.string().optional(),
    type: z.enum(["account", "customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      customer: "customer",
      type: "type",
    });
  });

export const Schemas$LinkAccountSessionCreateBodyAccountHolder = {
  in: SchemaIn$LinkAccountSessionCreateBodyAccountHolder,
  out: SchemaOut$LinkAccountSessionCreateBodyAccountHolder,
};
