import {
  External$TreasuryTransactionListStatusTransitionsPostedAtObj0,
  Schemas$TreasuryTransactionListStatusTransitionsPostedAtObj0,
  TreasuryTransactionListStatusTransitionsPostedAtObj0,
} from "./treasury-transaction-list-status-transitions-posted-at-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
 */
export type TreasuryTransactionListStatusTransitions = {
  postedAt?:
    | (TreasuryTransactionListStatusTransitionsPostedAtObj0 | number)
    | undefined;
};

/**
 * @internal
 * TreasuryTransactionListStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionListStatusTransitions = {
  posted_at?:
    | (External$TreasuryTransactionListStatusTransitionsPostedAtObj0 | number)
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionListStatusTransitions
 */
const SchemaIn$TreasuryTransactionListStatusTransitions: z.ZodType<
  TreasuryTransactionListStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    posted_at: z
      .union([
        Schemas$TreasuryTransactionListStatusTransitionsPostedAtObj0.in,
        z.number().int(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      posted_at: "postedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionListStatusTransitions
 */
const SchemaOut$TreasuryTransactionListStatusTransitions: z.ZodType<
  External$TreasuryTransactionListStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionListStatusTransitions // the object to be transformed
> = z
  .object({
    postedAt: z
      .union([
        Schemas$TreasuryTransactionListStatusTransitionsPostedAtObj0.out,
        z.number().int(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      postedAt: "posted_at",
    });
  });

export const Schemas$TreasuryTransactionListStatusTransitions = {
  in: SchemaIn$TreasuryTransactionListStatusTransitions,
  out: SchemaOut$TreasuryTransactionListStatusTransitions,
};
