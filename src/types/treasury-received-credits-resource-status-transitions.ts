import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedCreditsResourceStatusTransitions = {
  /**
   * Timestamp describing when the CreditReversal changed status to `posted`
   */
  postedAt?: number | null | undefined;
};

/**
 * @internal
 * TreasuryReceivedCreditsResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCreditsResourceStatusTransitions = {
  posted_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCreditsResourceStatusTransitions
 */
const SchemaIn$TreasuryReceivedCreditsResourceStatusTransitions: z.ZodType<
  TreasuryReceivedCreditsResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    posted_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      posted_at: "postedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCreditsResourceStatusTransitions
 */
const SchemaOut$TreasuryReceivedCreditsResourceStatusTransitions: z.ZodType<
  External$TreasuryReceivedCreditsResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCreditsResourceStatusTransitions // the object to be transformed
> = z
  .object({
    postedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      postedAt: "posted_at",
    });
  });

export const Schemas$TreasuryReceivedCreditsResourceStatusTransitions = {
  in: SchemaIn$TreasuryReceivedCreditsResourceStatusTransitions,
  out: SchemaOut$TreasuryReceivedCreditsResourceStatusTransitions,
};
