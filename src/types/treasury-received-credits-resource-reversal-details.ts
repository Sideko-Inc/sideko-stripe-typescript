import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedCreditsResourceReversalDetails = {
  /**
   * Time before which a ReceivedCredit can be reversed.
   */
  deadline?: number | null | undefined;
  /**
   * Set if a ReceivedCredit cannot be reversed.
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
 * TreasuryReceivedCreditsResourceReversalDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCreditsResourceReversalDetails = {
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
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCreditsResourceReversalDetails
 */
const SchemaIn$TreasuryReceivedCreditsResourceReversalDetails: z.ZodType<
  TreasuryReceivedCreditsResourceReversalDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCreditsResourceReversalDetails
 */
const SchemaOut$TreasuryReceivedCreditsResourceReversalDetails: z.ZodType<
  External$TreasuryReceivedCreditsResourceReversalDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCreditsResourceReversalDetails // the object to be transformed
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

export const Schemas$TreasuryReceivedCreditsResourceReversalDetails = {
  in: SchemaIn$TreasuryReceivedCreditsResourceReversalDetails,
  out: SchemaOut$TreasuryReceivedCreditsResourceReversalDetails,
};
