import { Account, External$Account, Schemas$Account } from "./account";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceAccountholder = {
  /**
   * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
   */
  account?: (string | Account) | undefined;
  /**
   * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
   */
  customer?: (string | Customer) | undefined;
  /**
   * Type of account holder that this account belongs to.
   */
  type: "account" | "customer";
};

/**
 * @internal
 * BankConnectionsResourceAccountholder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceAccountholder = {
  account?: (string | External$Account) | undefined;
  customer?: (string | External$Customer) | undefined;
  type: "account" | "customer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceAccountholder
 */
const SchemaIn$BankConnectionsResourceAccountholder: z.ZodType<
  BankConnectionsResourceAccountholder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]).optional(),
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.in)])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceAccountholder
 */
const SchemaOut$BankConnectionsResourceAccountholder: z.ZodType<
  External$BankConnectionsResourceAccountholder, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceAccountholder // the object to be transformed
> = z
  .object({
    account: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.out)])
      .optional(),
    type: z.enum(["account", "customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      customer: "customer",
      type: "type",
    });
  });

export const Schemas$BankConnectionsResourceAccountholder = {
  in: SchemaIn$BankConnectionsResourceAccountholder,
  out: SchemaOut$BankConnectionsResourceAccountholder,
};
