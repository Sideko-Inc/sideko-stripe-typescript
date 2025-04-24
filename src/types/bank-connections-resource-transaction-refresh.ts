import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceTransactionRefresh = {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
   */
  lastAttemptedAt: number;
  /**
   * Time at which the next transaction refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
   */
  nextRefreshAvailableAt?: number | null | undefined;
  /**
   * The status of the last refresh attempt.
   */
  status: "failed" | "pending" | "succeeded";
};

/**
 * @internal
 * BankConnectionsResourceTransactionRefresh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceTransactionRefresh = {
  id: string;
  last_attempted_at: number;
  next_refresh_available_at?: number | null | undefined;
  status: "failed" | "pending" | "succeeded";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceTransactionRefresh
 */
const SchemaIn$BankConnectionsResourceTransactionRefresh: z.ZodType<
  BankConnectionsResourceTransactionRefresh, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    last_attempted_at: z.number().int(),
    next_refresh_available_at: z.number().int().nullable().optional(),
    status: z.enum(["failed", "pending", "succeeded"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      last_attempted_at: "lastAttemptedAt",
      next_refresh_available_at: "nextRefreshAvailableAt",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceTransactionRefresh
 */
const SchemaOut$BankConnectionsResourceTransactionRefresh: z.ZodType<
  External$BankConnectionsResourceTransactionRefresh, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceTransactionRefresh // the object to be transformed
> = z
  .object({
    id: z.string(),
    lastAttemptedAt: z.number().int(),
    nextRefreshAvailableAt: z.number().int().nullable().optional(),
    status: z.enum(["failed", "pending", "succeeded"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      lastAttemptedAt: "last_attempted_at",
      nextRefreshAvailableAt: "next_refresh_available_at",
      status: "status",
    });
  });

export const Schemas$BankConnectionsResourceTransactionRefresh = {
  in: SchemaIn$BankConnectionsResourceTransactionRefresh,
  out: SchemaOut$BankConnectionsResourceTransactionRefresh,
};
