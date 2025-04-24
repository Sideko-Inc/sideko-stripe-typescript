import { Account, External$Account, Schemas$Account } from "./account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectAccountReference = {
  /**
   * The connected account being referenced when `type` is `account`.
   */
  account?: (string | Account) | undefined;
  /**
   * Type of the account referenced.
   */
  type: "account" | "self";
};

/**
 * @internal
 * ConnectAccountReference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectAccountReference = {
  account?: (string | External$Account) | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectAccountReference
 */
const SchemaIn$ConnectAccountReference: z.ZodType<
  ConnectAccountReference, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]).optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectAccountReference
 */
const SchemaOut$ConnectAccountReference: z.ZodType<
  External$ConnectAccountReference, // output type of this zod object
  z.ZodTypeDef,
  ConnectAccountReference // the object to be transformed
> = z
  .object({
    account: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

export const Schemas$ConnectAccountReference = {
  in: SchemaIn$ConnectAccountReference,
  out: SchemaOut$ConnectAccountReference,
};
