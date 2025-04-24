import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedDebitsResourceReversalDetails = {
  /**
   * Time before which a ReceivedDebit can be reversed.
   */
  deadline?: number | null | undefined;
  /**
   * Set if a ReceivedDebit can't be reversed.
   */
  restrictedReason?:
    | (
        | "already_reversed"
        | "deadline_passed"
        | "network_restricted"
        | "other"
        | "source_flow_restricted"
      )
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryReceivedDebitsResourceReversalDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedDebitsResourceReversalDetails = {
  deadline?: number | null | undefined;
  restricted_reason?:
    | (
        | "already_reversed"
        | "deadline_passed"
        | "network_restricted"
        | "other"
        | "source_flow_restricted"
      )
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedDebitsResourceReversalDetails
 */
const SchemaIn$TreasuryReceivedDebitsResourceReversalDetails: z.ZodType<
  TreasuryReceivedDebitsResourceReversalDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deadline: z.number().int().nullable().optional(),
    restricted_reason: z
      .enum([
        "already_reversed",
        "deadline_passed",
        "network_restricted",
        "other",
        "source_flow_restricted",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deadline: "deadline",
      restricted_reason: "restrictedReason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedDebitsResourceReversalDetails
 */
const SchemaOut$TreasuryReceivedDebitsResourceReversalDetails: z.ZodType<
  External$TreasuryReceivedDebitsResourceReversalDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedDebitsResourceReversalDetails // the object to be transformed
> = z
  .object({
    deadline: z.number().int().nullable().optional(),
    restrictedReason: z
      .enum([
        "already_reversed",
        "deadline_passed",
        "network_restricted",
        "other",
        "source_flow_restricted",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deadline: "deadline",
      restrictedReason: "restricted_reason",
    });
  });

export const Schemas$TreasuryReceivedDebitsResourceReversalDetails = {
  in: SchemaIn$TreasuryReceivedDebitsResourceReversalDetails,
  out: SchemaOut$TreasuryReceivedDebitsResourceReversalDetails,
};
