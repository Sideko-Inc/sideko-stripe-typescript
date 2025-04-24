import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions =
  {
    /**
     * Timestamp describing when an InboundTransfer changed status to `canceled`.
     */
    canceledAt?: number | null | undefined;
    /**
     * Timestamp describing when an InboundTransfer changed status to `failed`.
     */
    failedAt?: number | null | undefined;
    /**
     * Timestamp describing when an InboundTransfer changed status to `succeeded`.
     */
    succeededAt?: number | null | undefined;
  };

/**
 * @internal
 * TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions =
  {
    canceled_at?: number | null | undefined;
    failed_at?: number | null | undefined;
    succeeded_at?: number | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions
 */
const SchemaIn$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions: z.ZodType<
  TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    canceled_at: z.number().int().nullable().optional(),
    failed_at: z.number().int().nullable().optional(),
    succeeded_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled_at: "canceledAt",
      failed_at: "failedAt",
      succeeded_at: "succeededAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions
 */
const SchemaOut$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions: z.ZodType<
  External$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions // the object to be transformed
> = z
  .object({
    canceledAt: z.number().int().nullable().optional(),
    failedAt: z.number().int().nullable().optional(),
    succeededAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceledAt: "canceled_at",
      failedAt: "failed_at",
      succeededAt: "succeeded_at",
    });
  });

export const Schemas$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions =
  {
    in: SchemaIn$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
    out: SchemaOut$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
  };
