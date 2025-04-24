import {
  External$FinancialConnectionsAccountOwner,
  FinancialConnectionsAccountOwner,
  Schemas$FinancialConnectionsAccountOwner,
} from "./financial-connections-account-owner";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A paginated list of owners for this account.
 */
export type FinancialConnectionsAccountOwnershipOwners = {
  /**
   * Details about each object.
   */
  data: FinancialConnectionsAccountOwner[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * FinancialConnectionsAccountOwnershipOwners without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountOwnershipOwners = {
  data: External$FinancialConnectionsAccountOwner[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountOwnershipOwners
 */
const SchemaIn$FinancialConnectionsAccountOwnershipOwners: z.ZodType<
  FinancialConnectionsAccountOwnershipOwners, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$FinancialConnectionsAccountOwner.in),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountOwnershipOwners
 */
const SchemaOut$FinancialConnectionsAccountOwnershipOwners: z.ZodType<
  External$FinancialConnectionsAccountOwnershipOwners, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountOwnershipOwners // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$FinancialConnectionsAccountOwner.out),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$FinancialConnectionsAccountOwnershipOwners = {
  in: SchemaIn$FinancialConnectionsAccountOwnershipOwners,
  out: SchemaOut$FinancialConnectionsAccountOwnershipOwners,
};
