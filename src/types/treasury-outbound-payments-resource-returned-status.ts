import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundPaymentsResourceReturnedStatus = {
  /**
   * Reason for the return.
   */
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "declined"
    | "incorrect_account_holder_name"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
  /**
   * The Transaction associated with this object.
   */
  transaction: string | TreasuryTransaction;
};

/**
 * @internal
 * TreasuryOutboundPaymentsResourceReturnedStatus without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentsResourceReturnedStatus = {
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "declined"
    | "incorrect_account_holder_name"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
  transaction: string | External$TreasuryTransaction;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentsResourceReturnedStatus
 */
const SchemaIn$TreasuryOutboundPaymentsResourceReturnedStatus: z.ZodType<
  TreasuryOutboundPaymentsResourceReturnedStatus, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z.enum([
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
    ]),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$TreasuryTransaction.in),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentsResourceReturnedStatus
 */
const SchemaOut$TreasuryOutboundPaymentsResourceReturnedStatus: z.ZodType<
  External$TreasuryOutboundPaymentsResourceReturnedStatus, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentsResourceReturnedStatus // the object to be transformed
> = z
  .object({
    code: z.enum([
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
    ]),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$TreasuryTransaction.out),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      transaction: "transaction",
    });
  });

export const Schemas$TreasuryOutboundPaymentsResourceReturnedStatus = {
  in: SchemaIn$TreasuryOutboundPaymentsResourceReturnedStatus,
  out: SchemaOut$TreasuryOutboundPaymentsResourceReturnedStatus,
};
