import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Optional hash to set the return code.
 */
export type TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails = {
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
 * TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails =
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
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
 */
const SchemaIn$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails: z.ZodType<
  TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
 */
const SchemaOut$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails: z.ZodType<
  External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails // the object to be transformed
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

export const Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails =
  {
    in: SchemaIn$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
    out: SchemaOut$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
  };
