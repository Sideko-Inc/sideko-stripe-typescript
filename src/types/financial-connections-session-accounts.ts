import {
  External$FinancialConnectionsAccount,
  FinancialConnectionsAccount,
  Schemas$FinancialConnectionsAccount,
} from "./financial-connections-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The accounts that were collected as part of this Session.
 */
export type FinancialConnectionsSessionAccounts = {
  /**
   * Details about each object.
   */
  data: FinancialConnectionsAccount[];
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
 * FinancialConnectionsSessionAccounts without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsSessionAccounts = {
  data: External$FinancialConnectionsAccount[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsSessionAccounts
 */
const SchemaIn$FinancialConnectionsSessionAccounts: z.ZodType<
  FinancialConnectionsSessionAccounts, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$FinancialConnectionsAccount.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsSessionAccounts
 */
const SchemaOut$FinancialConnectionsSessionAccounts: z.ZodType<
  External$FinancialConnectionsSessionAccounts, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsSessionAccounts // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$FinancialConnectionsAccount.out)),
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

export const Schemas$FinancialConnectionsSessionAccounts = {
  in: SchemaIn$FinancialConnectionsSessionAccounts,
  out: SchemaOut$FinancialConnectionsSessionAccounts,
};
