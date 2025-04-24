import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Params for disputes related to Treasury FinancialAccounts
 */
export type IssuingDisputeCreateBodyTreasury = {
  receivedDebit: string;
};

/**
 * @internal
 * IssuingDisputeCreateBodyTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyTreasury = {
  received_debit: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyTreasury
 */
const SchemaIn$IssuingDisputeCreateBodyTreasury: z.ZodType<
  IssuingDisputeCreateBodyTreasury, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    received_debit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      received_debit: "receivedDebit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyTreasury
 */
const SchemaOut$IssuingDisputeCreateBodyTreasury: z.ZodType<
  External$IssuingDisputeCreateBodyTreasury, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyTreasury // the object to be transformed
> = z
  .object({
    receivedDebit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      receivedDebit: "received_debit",
    });
  });

export const Schemas$IssuingDisputeCreateBodyTreasury = {
  in: SchemaIn$IssuingDisputeCreateBodyTreasury,
  out: SchemaOut$IssuingDisputeCreateBodyTreasury,
};
