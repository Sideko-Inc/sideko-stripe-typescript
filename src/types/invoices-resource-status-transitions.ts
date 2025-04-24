import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesResourceStatusTransitions = {
  /**
   * The time that the invoice draft was finalized.
   */
  finalizedAt?: number | null | undefined;
  /**
   * The time that the invoice was marked uncollectible.
   */
  markedUncollectibleAt?: number | null | undefined;
  /**
   * The time that the invoice was paid.
   */
  paidAt?: number | null | undefined;
  /**
   * The time that the invoice was voided.
   */
  voidedAt?: number | null | undefined;
};

/**
 * @internal
 * InvoicesResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesResourceStatusTransitions = {
  finalized_at?: number | null | undefined;
  marked_uncollectible_at?: number | null | undefined;
  paid_at?: number | null | undefined;
  voided_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesResourceStatusTransitions
 */
const SchemaIn$InvoicesResourceStatusTransitions: z.ZodType<
  InvoicesResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    finalized_at: z.number().int().nullable().optional(),
    marked_uncollectible_at: z.number().int().nullable().optional(),
    paid_at: z.number().int().nullable().optional(),
    voided_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      finalized_at: "finalizedAt",
      marked_uncollectible_at: "markedUncollectibleAt",
      paid_at: "paidAt",
      voided_at: "voidedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesResourceStatusTransitions
 */
const SchemaOut$InvoicesResourceStatusTransitions: z.ZodType<
  External$InvoicesResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  InvoicesResourceStatusTransitions // the object to be transformed
> = z
  .object({
    finalizedAt: z.number().int().nullable().optional(),
    markedUncollectibleAt: z.number().int().nullable().optional(),
    paidAt: z.number().int().nullable().optional(),
    voidedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      finalizedAt: "finalized_at",
      markedUncollectibleAt: "marked_uncollectible_at",
      paidAt: "paid_at",
      voidedAt: "voided_at",
    });
  });

export const Schemas$InvoicesResourceStatusTransitions = {
  in: SchemaIn$InvoicesResourceStatusTransitions,
  out: SchemaOut$InvoicesResourceStatusTransitions,
};
