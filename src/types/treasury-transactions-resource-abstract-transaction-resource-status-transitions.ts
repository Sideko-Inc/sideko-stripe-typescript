import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions =
  {
    /**
     * Timestamp describing when the Transaction changed status to `posted`.
     */
    postedAt?: number | null | undefined;
    /**
     * Timestamp describing when the Transaction changed status to `void`.
     */
    voidAt?: number | null | undefined;
  };

/**
 * @internal
 * TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions =
  {
    posted_at?: number | null | undefined;
    void_at?: number | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions
 */
const SchemaIn$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions: z.ZodType<
  TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions
 */
const SchemaOut$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions: z.ZodType<
  External$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions // the object to be transformed
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

export const Schemas$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions =
  {
    in: SchemaIn$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
    out: SchemaOut$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
  };
