import {
  CustomerBalanceTransaction,
  External$CustomerBalanceTransaction,
  Schemas$CustomerBalanceTransaction,
} from "./customer-balance-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceTransactionListResponse = {
  /**
   * Details about each object.
   */
  data: CustomerBalanceTransaction[];
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
 * CustomerBalanceTransactionListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceTransactionListResponse = {
  data: External$CustomerBalanceTransaction[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceTransactionListResponse
 */
const SchemaIn$CustomerBalanceTransactionListResponse: z.ZodType<
  CustomerBalanceTransactionListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CustomerBalanceTransaction.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceTransactionListResponse
 */
const SchemaOut$CustomerBalanceTransactionListResponse: z.ZodType<
  External$CustomerBalanceTransactionListResponse, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceTransactionListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CustomerBalanceTransaction.out)),
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

export const Schemas$CustomerBalanceTransactionListResponse = {
  in: SchemaIn$CustomerBalanceTransactionListResponse,
  out: SchemaOut$CustomerBalanceTransactionListResponse,
};
