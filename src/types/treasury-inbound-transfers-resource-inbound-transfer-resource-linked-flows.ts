import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows =
  {
    /**
     * If funds for this flow were returned after the flow went to the `succeeded` state, this field contains a reference to the ReceivedDebit return.
     */
    receivedDebit?: string | null | undefined;
  };

/**
 * @internal
 * TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows =
  {
    received_debit?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows
 */
const SchemaIn$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows: z.ZodType<
  TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    received_debit: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      received_debit: "receivedDebit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows
 */
const SchemaOut$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows: z.ZodType<
  External$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows // the object to be transformed
> = z
  .object({
    receivedDebit: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      receivedDebit: "received_debit",
    });
  });

export const Schemas$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows =
  {
    in: SchemaIn$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
    out: SchemaOut$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
  };
