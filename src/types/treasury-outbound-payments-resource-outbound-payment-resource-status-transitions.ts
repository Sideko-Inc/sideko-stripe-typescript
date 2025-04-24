import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions =
  {
    /**
     * Timestamp describing when an OutboundPayment changed status to `canceled`.
     */
    canceledAt?: number | null | undefined;
    /**
     * Timestamp describing when an OutboundPayment changed status to `failed`.
     */
    failedAt?: number | null | undefined;
    /**
     * Timestamp describing when an OutboundPayment changed status to `posted`.
     */
    postedAt?: number | null | undefined;
    /**
     * Timestamp describing when an OutboundPayment changed status to `returned`.
     */
    returnedAt?: number | null | undefined;
  };

/**
 * @internal
 * TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions =
  {
    canceled_at?: number | null | undefined;
    failed_at?: number | null | undefined;
    posted_at?: number | null | undefined;
    returned_at?: number | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions
 */
const SchemaIn$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions: z.ZodType<
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    canceled_at: z.number().int().nullable().optional(),
    failed_at: z.number().int().nullable().optional(),
    posted_at: z.number().int().nullable().optional(),
    returned_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled_at: "canceledAt",
      failed_at: "failedAt",
      posted_at: "postedAt",
      returned_at: "returnedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions
 */
const SchemaOut$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions: z.ZodType<
  External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions // the object to be transformed
> = z
  .object({
    canceledAt: z.number().int().nullable().optional(),
    failedAt: z.number().int().nullable().optional(),
    postedAt: z.number().int().nullable().optional(),
    returnedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceledAt: "canceled_at",
      failedAt: "failed_at",
      postedAt: "posted_at",
      returnedAt: "returned_at",
    });
  });

export const Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions =
  {
    in: SchemaIn$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
    out: SchemaOut$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
  };
