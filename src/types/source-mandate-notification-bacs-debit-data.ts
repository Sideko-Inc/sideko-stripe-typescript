import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceMandateNotificationBacsDebitData = {
  /**
   * Last 4 digits of the account number associated with the debit.
   */
  last4?: string | undefined;
};

/**
 * @internal
 * SourceMandateNotificationBacsDebitData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceMandateNotificationBacsDebitData = {
  last4?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceMandateNotificationBacsDebitData
 */
const SchemaIn$SourceMandateNotificationBacsDebitData: z.ZodType<
  SourceMandateNotificationBacsDebitData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    last4: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceMandateNotificationBacsDebitData
 */
const SchemaOut$SourceMandateNotificationBacsDebitData: z.ZodType<
  External$SourceMandateNotificationBacsDebitData, // output type of this zod object
  z.ZodTypeDef,
  SourceMandateNotificationBacsDebitData // the object to be transformed
> = z
  .object({
    last4: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      last4: "last4",
    });
  });

export const Schemas$SourceMandateNotificationBacsDebitData = {
  in: SchemaIn$SourceMandateNotificationBacsDebitData,
  out: SchemaOut$SourceMandateNotificationBacsDebitData,
};
