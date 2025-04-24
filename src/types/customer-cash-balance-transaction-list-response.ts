import {
  CustomerCashBalanceTransaction,
  External$CustomerCashBalanceTransaction,
  Schemas$CustomerCashBalanceTransaction,
} from "./customer-cash-balance-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Customers with certain payments enabled have a cash balance, representing funds that were paid
 * by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions
 * represent when funds are moved into or out of this balance. This includes funding by the customer, allocation
 * to payments, and refunds to the customer.
 */
export type CustomerCashBalanceTransactionListResponse = {
  /**
   * Details about each object.
   */
  data: CustomerCashBalanceTransaction[];
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
 * CustomerCashBalanceTransactionListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCashBalanceTransactionListResponse = {
  data: External$CustomerCashBalanceTransaction[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCashBalanceTransactionListResponse
 */
const SchemaIn$CustomerCashBalanceTransactionListResponse: z.ZodType<
  CustomerCashBalanceTransactionListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CustomerCashBalanceTransaction.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCashBalanceTransactionListResponse
 */
const SchemaOut$CustomerCashBalanceTransactionListResponse: z.ZodType<
  External$CustomerCashBalanceTransactionListResponse, // output type of this zod object
  z.ZodTypeDef,
  CustomerCashBalanceTransactionListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$CustomerCashBalanceTransaction.out)),
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

export const Schemas$CustomerCashBalanceTransactionListResponse = {
  in: SchemaIn$CustomerCashBalanceTransactionListResponse,
  out: SchemaOut$CustomerCashBalanceTransactionListResponse,
};
