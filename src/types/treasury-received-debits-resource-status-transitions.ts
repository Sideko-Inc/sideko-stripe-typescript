import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedDebitsResourceStatusTransitions = {
  /**
   * Timestamp describing when the DebitReversal changed status to `completed`.
   */
  completedAt?: number | null | undefined;
};

/**
 * @internal
 * TreasuryReceivedDebitsResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedDebitsResourceStatusTransitions = {
  completed_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedDebitsResourceStatusTransitions
 */
const SchemaIn$TreasuryReceivedDebitsResourceStatusTransitions: z.ZodType<
  TreasuryReceivedDebitsResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    completed_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completed_at: "completedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedDebitsResourceStatusTransitions
 */
const SchemaOut$TreasuryReceivedDebitsResourceStatusTransitions: z.ZodType<
  External$TreasuryReceivedDebitsResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedDebitsResourceStatusTransitions // the object to be transformed
> = z
  .object({
    completedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completedAt: "completed_at",
    });
  });

export const Schemas$TreasuryReceivedDebitsResourceStatusTransitions = {
  in: SchemaIn$TreasuryReceivedDebitsResourceStatusTransitions,
  out: SchemaOut$TreasuryReceivedDebitsResourceStatusTransitions,
};
