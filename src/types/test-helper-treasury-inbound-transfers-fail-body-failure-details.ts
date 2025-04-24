import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about a failed InboundTransfer.
 */
export type TestHelperTreasuryInboundTransfersFailBodyFailureDetails = {
  code?:
    | (
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
        | "other"
      )
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryInboundTransfersFailBodyFailureDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails =
  {
    code?:
      | (
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
          | "other"
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryInboundTransfersFailBodyFailureDetails
 */
const SchemaIn$TestHelperTreasuryInboundTransfersFailBodyFailureDetails: z.ZodType<
  TestHelperTreasuryInboundTransfersFailBodyFailureDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum([
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
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails
 */
const SchemaOut$TestHelperTreasuryInboundTransfersFailBodyFailureDetails: z.ZodType<
  External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryInboundTransfersFailBodyFailureDetails // the object to be transformed
> = z
  .object({
    code: z
      .enum([
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
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
    });
  });

export const Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails =
  {
    in: SchemaIn$TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
    out: SchemaOut$TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
  };
