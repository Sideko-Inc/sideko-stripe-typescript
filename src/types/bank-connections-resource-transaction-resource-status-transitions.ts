import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceTransactionResourceStatusTransitions = {
  /**
   * Time at which this transaction posted. Measured in seconds since the Unix epoch.
   */
  postedAt?: number | null | undefined;
  /**
   * Time at which this transaction was voided. Measured in seconds since the Unix epoch.
   */
  voidAt?: number | null | undefined;
};

/**
 * @internal
 * BankConnectionsResourceTransactionResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceTransactionResourceStatusTransitions =
  {
    posted_at?: number | null | undefined;
    void_at?: number | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceTransactionResourceStatusTransitions
 */
const SchemaIn$BankConnectionsResourceTransactionResourceStatusTransitions: z.ZodType<
  BankConnectionsResourceTransactionResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    posted_at: z.number().int().nullable().optional(),
    void_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      posted_at: "postedAt",
      void_at: "voidAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceTransactionResourceStatusTransitions
 */
const SchemaOut$BankConnectionsResourceTransactionResourceStatusTransitions: z.ZodType<
  External$BankConnectionsResourceTransactionResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceTransactionResourceStatusTransitions // the object to be transformed
> = z
  .object({
    postedAt: z.number().int().nullable().optional(),
    voidAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      postedAt: "posted_at",
      voidAt: "void_at",
    });
  });

export const Schemas$BankConnectionsResourceTransactionResourceStatusTransitions =
  {
    in: SchemaIn$BankConnectionsResourceTransactionResourceStatusTransitions,
    out: SchemaOut$BankConnectionsResourceTransactionResourceStatusTransitions,
  };
