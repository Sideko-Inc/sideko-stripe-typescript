import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about a returned OutboundTransfer.
 */
export type TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails = {
  code?:
    | (
        | "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "declined"
        | "incorrect_account_holder_name"
        | "invalid_account_number"
        | "invalid_currency"
        | "no_account"
        | "other"
      )
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails =
  {
    code?:
      | (
          | "account_closed"
          | "account_frozen"
          | "bank_account_restricted"
          | "bank_ownership_changed"
          | "declined"
          | "incorrect_account_holder_name"
          | "invalid_account_number"
          | "invalid_currency"
          | "no_account"
          | "other"
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
 */
const SchemaIn$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails: z.ZodType<
  TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails, // output type of this zod object
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
        "declined",
        "incorrect_account_holder_name",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
 */
const SchemaOut$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails: z.ZodType<
  External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails // the object to be transformed
> = z
  .object({
    code: z
      .enum([
        "account_closed",
        "account_frozen",
        "bank_account_restricted",
        "bank_ownership_changed",
        "declined",
        "incorrect_account_holder_name",
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

export const Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails =
  {
    in: SchemaIn$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
    out: SchemaOut$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
  };
