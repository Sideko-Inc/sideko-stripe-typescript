import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryInboundTransfersResourceFailureDetails = {
  /**
   * Reason for the failure.
   */
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "debit_not_authorized"
    | "incorrect_account_holder_address"
    | "incorrect_account_holder_name"
    | "incorrect_account_holder_tax_id"
    | "insufficient_funds"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
};

/**
 * @internal
 * TreasuryInboundTransfersResourceFailureDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryInboundTransfersResourceFailureDetails = {
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "debit_not_authorized"
    | "incorrect_account_holder_address"
    | "incorrect_account_holder_name"
    | "incorrect_account_holder_tax_id"
    | "insufficient_funds"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryInboundTransfersResourceFailureDetails
 */
const SchemaIn$TreasuryInboundTransfersResourceFailureDetails: z.ZodType<
  TreasuryInboundTransfersResourceFailureDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z.enum([
      "account_closed",
      "account_frozen",
      "bank_account_restricted",
      "bank_ownership_changed",
      "debit_not_authorized",
      "incorrect_account_holder_address",
      "incorrect_account_holder_name",
      "incorrect_account_holder_tax_id",
      "insufficient_funds",
      "invalid_account_number",
      "invalid_currency",
      "no_account",
      "other",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryInboundTransfersResourceFailureDetails
 */
const SchemaOut$TreasuryInboundTransfersResourceFailureDetails: z.ZodType<
  External$TreasuryInboundTransfersResourceFailureDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryInboundTransfersResourceFailureDetails // the object to be transformed
> = z
  .object({
    code: z.enum([
      "account_closed",
      "account_frozen",
      "bank_account_restricted",
      "bank_ownership_changed",
      "debit_not_authorized",
      "incorrect_account_holder_address",
      "incorrect_account_holder_name",
      "incorrect_account_holder_tax_id",
      "insufficient_funds",
      "invalid_account_number",
      "invalid_currency",
      "no_account",
      "other",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
    });
  });

export const Schemas$TreasuryInboundTransfersResourceFailureDetails = {
  in: SchemaIn$TreasuryInboundTransfersResourceFailureDetails,
  out: SchemaOut$TreasuryInboundTransfersResourceFailureDetails,
};
