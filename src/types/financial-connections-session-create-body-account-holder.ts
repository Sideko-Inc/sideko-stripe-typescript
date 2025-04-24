import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The account holder to link accounts for.
 */
export type FinancialConnectionsSessionCreateBodyAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
  type: "account" | "customer";
};

/**
 * @internal
 * FinancialConnectionsSessionCreateBodyAccountHolder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsSessionCreateBodyAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
  type: "account" | "customer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsSessionCreateBodyAccountHolder
 */
const SchemaIn$FinancialConnectionsSessionCreateBodyAccountHolder: z.ZodType<
  FinancialConnectionsSessionCreateBodyAccountHolder, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsSessionCreateBodyAccountHolder
 */
const SchemaOut$FinancialConnectionsSessionCreateBodyAccountHolder: z.ZodType<
  External$FinancialConnectionsSessionCreateBodyAccountHolder, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsSessionCreateBodyAccountHolder // the object to be transformed
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

export const Schemas$FinancialConnectionsSessionCreateBodyAccountHolder = {
  in: SchemaIn$FinancialConnectionsSessionCreateBodyAccountHolder,
  out: SchemaOut$FinancialConnectionsSessionCreateBodyAccountHolder,
};
