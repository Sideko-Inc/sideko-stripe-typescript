import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceMandateNotificationSepaDebitData = {
  /**
   * SEPA creditor ID.
   */
  creditorIdentifier?: string | undefined;
  /**
   * Last 4 digits of the account number associated with the debit.
   */
  last4?: string | undefined;
  /**
   * Mandate reference associated with the debit.
   */
  mandateReference?: string | undefined;
};

/**
 * @internal
 * SourceMandateNotificationSepaDebitData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceMandateNotificationSepaDebitData = {
  creditor_identifier?: string | undefined;
  last4?: string | undefined;
  mandate_reference?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceMandateNotificationSepaDebitData
 */
const SchemaIn$SourceMandateNotificationSepaDebitData: z.ZodType<
  SourceMandateNotificationSepaDebitData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    creditor_identifier: z.string().optional(),
    last4: z.string().optional(),
    mandate_reference: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditor_identifier: "creditorIdentifier",
      last4: "last4",
      mandate_reference: "mandateReference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceMandateNotificationSepaDebitData
 */
const SchemaOut$SourceMandateNotificationSepaDebitData: z.ZodType<
  External$SourceMandateNotificationSepaDebitData, // output type of this zod object
  z.ZodTypeDef,
  SourceMandateNotificationSepaDebitData // the object to be transformed
> = z
  .object({
    creditorIdentifier: z.string().optional(),
    last4: z.string().optional(),
    mandateReference: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditorIdentifier: "creditor_identifier",
      last4: "last4",
      mandateReference: "mandate_reference",
    });
  });

export const Schemas$SourceMandateNotificationSepaDebitData = {
  in: SchemaIn$SourceMandateNotificationSepaDebitData,
  out: SchemaOut$SourceMandateNotificationSepaDebitData,
};
