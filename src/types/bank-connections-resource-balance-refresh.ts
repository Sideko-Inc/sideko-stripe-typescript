import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceBalanceRefresh = {
  /**
   * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
   */
  lastAttemptedAt: number;
  /**
   * Time at which the next balance refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
   */
  nextRefreshAvailableAt?: number | null | undefined;
  /**
   * The status of the last refresh attempt.
   */
  status: "failed" | "pending" | "succeeded";
};

/**
 * @internal
 * BankConnectionsResourceBalanceRefresh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalanceRefresh = {
  last_attempted_at: number;
  next_refresh_available_at?: number | null | undefined;
  status: "failed" | "pending" | "succeeded";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalanceRefresh
 */
const SchemaIn$BankConnectionsResourceBalanceRefresh: z.ZodType<
  BankConnectionsResourceBalanceRefresh, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    last_attempted_at: z.number().int(),
    next_refresh_available_at: z.number().int().nullable().optional(),
    status: z.enum(["failed", "pending", "succeeded"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      last_attempted_at: "lastAttemptedAt",
      next_refresh_available_at: "nextRefreshAvailableAt",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalanceRefresh
 */
const SchemaOut$BankConnectionsResourceBalanceRefresh: z.ZodType<
  External$BankConnectionsResourceBalanceRefresh, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalanceRefresh // the object to be transformed
> = z
  .object({
    lastAttemptedAt: z.number().int(),
    nextRefreshAvailableAt: z.number().int().nullable().optional(),
    status: z.enum(["failed", "pending", "succeeded"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      lastAttemptedAt: "last_attempted_at",
      nextRefreshAvailableAt: "next_refresh_available_at",
      status: "status",
    });
  });

export const Schemas$BankConnectionsResourceBalanceRefresh = {
  in: SchemaIn$BankConnectionsResourceBalanceRefresh,
  out: SchemaOut$BankConnectionsResourceBalanceRefresh,
};
