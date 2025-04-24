import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceStatusTransitions = {
  /**
   * The time that the quote was accepted. Measured in seconds since Unix epoch.
   */
  acceptedAt?: number | null | undefined;
  /**
   * The time that the quote was canceled. Measured in seconds since Unix epoch.
   */
  canceledAt?: number | null | undefined;
  /**
   * The time that the quote was finalized. Measured in seconds since Unix epoch.
   */
  finalizedAt?: number | null | undefined;
};

/**
 * @internal
 * QuotesResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceStatusTransitions = {
  accepted_at?: number | null | undefined;
  canceled_at?: number | null | undefined;
  finalized_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceStatusTransitions
 */
const SchemaIn$QuotesResourceStatusTransitions: z.ZodType<
  QuotesResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted_at: z.number().int().nullable().optional(),
    canceled_at: z.number().int().nullable().optional(),
    finalized_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted_at: "acceptedAt",
      canceled_at: "canceledAt",
      finalized_at: "finalizedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceStatusTransitions
 */
const SchemaOut$QuotesResourceStatusTransitions: z.ZodType<
  External$QuotesResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceStatusTransitions // the object to be transformed
> = z
  .object({
    acceptedAt: z.number().int().nullable().optional(),
    canceledAt: z.number().int().nullable().optional(),
    finalizedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acceptedAt: "accepted_at",
      canceledAt: "canceled_at",
      finalizedAt: "finalized_at",
    });
  });

export const Schemas$QuotesResourceStatusTransitions = {
  in: SchemaIn$QuotesResourceStatusTransitions,
  out: SchemaOut$QuotesResourceStatusTransitions,
};
