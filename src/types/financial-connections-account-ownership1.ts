import {
  External$FinancialConnectionsAccountOwnershipOwners,
  FinancialConnectionsAccountOwnershipOwners,
  Schemas$FinancialConnectionsAccountOwnershipOwners,
} from "./financial-connections-account-ownership-owners";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Describes a snapshot of the owners of an account at a particular point in time.
 */
export type FinancialConnectionsAccountOwnership1 = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "financial_connections.account_ownership";
  /**
   * A paginated list of owners for this account.
   */
  owners: FinancialConnectionsAccountOwnershipOwners;
};

/**
 * @internal
 * FinancialConnectionsAccountOwnership1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountOwnership1 = {
  created: number;
  id: string;
  object: "financial_connections.account_ownership";
  owners: External$FinancialConnectionsAccountOwnershipOwners;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountOwnership1
 */
const SchemaIn$FinancialConnectionsAccountOwnership1: z.ZodType<
  FinancialConnectionsAccountOwnership1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    object: z.enum(["financial_connections.account_ownership"]),
    owners: Schemas$FinancialConnectionsAccountOwnershipOwners.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      object: "object",
      owners: "owners",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountOwnership1
 */
const SchemaOut$FinancialConnectionsAccountOwnership1: z.ZodType<
  External$FinancialConnectionsAccountOwnership1, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountOwnership1 // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    object: z.enum(["financial_connections.account_ownership"]),
    owners: Schemas$FinancialConnectionsAccountOwnershipOwners.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      object: "object",
      owners: "owners",
    });
  });

export const Schemas$FinancialConnectionsAccountOwnership1 = {
  in: SchemaIn$FinancialConnectionsAccountOwnership1,
  out: SchemaOut$FinancialConnectionsAccountOwnership1,
};
