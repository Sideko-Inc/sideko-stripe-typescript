import {
  BillingCreditBalanceTransaction,
  External$BillingCreditBalanceTransaction,
  Schemas$BillingCreditBalanceTransaction,
} from "./billing-credit-balance-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditBalanceTransactionListResponse = {
  data: BillingCreditBalanceTransaction[];
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
 * BillingCreditBalanceTransactionListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditBalanceTransactionListResponse = {
  data: External$BillingCreditBalanceTransaction[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditBalanceTransactionListResponse
 */
const SchemaIn$BillingCreditBalanceTransactionListResponse: z.ZodType<
  BillingCreditBalanceTransactionListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$BillingCreditBalanceTransaction.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditBalanceTransactionListResponse
 */
const SchemaOut$BillingCreditBalanceTransactionListResponse: z.ZodType<
  External$BillingCreditBalanceTransactionListResponse, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditBalanceTransactionListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$BillingCreditBalanceTransaction.out)),
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

export const Schemas$BillingCreditBalanceTransactionListResponse = {
  in: SchemaIn$BillingCreditBalanceTransactionListResponse,
  out: SchemaOut$BillingCreditBalanceTransactionListResponse,
};
