import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandateBacsDebit = {
  /**
   * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
   */
  networkStatus: "accepted" | "pending" | "refused" | "revoked";
  /**
   * The unique reference identifying the mandate on the Bacs network.
   */
  reference: string;
  /**
   * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
   */
  revocationReason?:
    | (
        | "account_closed"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
      )
    | null
    | undefined;
  /**
   * The URL that will contain the mandate that the customer has signed.
   */
  url: string;
};

/**
 * @internal
 * MandateBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandateBacsDebit = {
  network_status: "accepted" | "pending" | "refused" | "revoked";
  reference: string;
  revocation_reason?:
    | (
        | "account_closed"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
      )
    | null
    | undefined;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandateBacsDebit
 */
const SchemaIn$MandateBacsDebit: z.ZodType<
  MandateBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    network_status: z.enum(["accepted", "pending", "refused", "revoked"]),
    reference: z.string(),
    revocation_reason: z
      .enum([
        "account_closed",
        "bank_account_restricted",
        "bank_ownership_changed",
        "could_not_process",
        "debit_not_authorized",
      ])
      .nullable()
      .optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network_status: "networkStatus",
      reference: "reference",
      revocation_reason: "revocationReason",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandateBacsDebit
 */
const SchemaOut$MandateBacsDebit: z.ZodType<
  External$MandateBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  MandateBacsDebit // the object to be transformed
> = z
  .object({
    networkStatus: z.enum(["accepted", "pending", "refused", "revoked"]),
    reference: z.string(),
    revocationReason: z
      .enum([
        "account_closed",
        "bank_account_restricted",
        "bank_ownership_changed",
        "could_not_process",
        "debit_not_authorized",
      ])
      .nullable()
      .optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      networkStatus: "network_status",
      reference: "reference",
      revocationReason: "revocation_reason",
      url: "url",
    });
  });

export const Schemas$MandateBacsDebit = {
  in: SchemaIn$MandateBacsDebit,
  out: SchemaOut$MandateBacsDebit,
};
