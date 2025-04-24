import { Account, External$Account, Schemas$Account } from "./account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceTransferData = {
  /**
   * The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
   */
  amount?: number | null | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
   */
  amountPercent?: number | null | undefined;
  /**
   * The account where funds from the payment will be transferred to upon payment success.
   */
  destination: string | Account;
};

/**
 * @internal
 * QuotesResourceTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceTransferData = {
  amount?: number | null | undefined;
  amount_percent?: number | null | undefined;
  destination: string | External$Account;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceTransferData
 */
const SchemaIn$QuotesResourceTransferData: z.ZodType<
  QuotesResourceTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    amount_percent: z.number().nullable().optional(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_percent: "amountPercent",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceTransferData
 */
const SchemaOut$QuotesResourceTransferData: z.ZodType<
  External$QuotesResourceTransferData, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    amountPercent: z.number().nullable().optional(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountPercent: "amount_percent",
      destination: "destination",
    });
  });

export const Schemas$QuotesResourceTransferData = {
  in: SchemaIn$QuotesResourceTransferData,
  out: SchemaOut$QuotesResourceTransferData,
};
