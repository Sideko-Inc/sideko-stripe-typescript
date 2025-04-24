import {
  External$TreasuryTransactionEntry,
  Schemas$TreasuryTransactionEntry,
  TreasuryTransactionEntry,
} from "./treasury-transaction-entry";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
 */
export type TreasuryTransactionEntries = {
  /**
   * Details about each object.
   */
  data: TreasuryTransactionEntry[];
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
 * TreasuryTransactionEntries without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionEntries = {
  data: External$TreasuryTransactionEntry[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionEntries
 */
const SchemaIn$TreasuryTransactionEntries: z.ZodType<
  TreasuryTransactionEntries, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$TreasuryTransactionEntry.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionEntries
 */
const SchemaOut$TreasuryTransactionEntries: z.ZodType<
  External$TreasuryTransactionEntries, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionEntries // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$TreasuryTransactionEntry.out)),
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

export const Schemas$TreasuryTransactionEntries = {
  in: SchemaIn$TreasuryTransactionEntries,
  out: SchemaOut$TreasuryTransactionEntries,
};
