import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceMandateNotificationAcssDebitData = {
  /**
   * The statement descriptor associate with the debit.
   */
  statementDescriptor?: string | undefined;
};

/**
 * @internal
 * SourceMandateNotificationAcssDebitData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceMandateNotificationAcssDebitData = {
  statement_descriptor?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceMandateNotificationAcssDebitData
 */
const SchemaIn$SourceMandateNotificationAcssDebitData: z.ZodType<
  SourceMandateNotificationAcssDebitData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    statement_descriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceMandateNotificationAcssDebitData
 */
const SchemaOut$SourceMandateNotificationAcssDebitData: z.ZodType<
  External$SourceMandateNotificationAcssDebitData, // output type of this zod object
  z.ZodTypeDef,
  SourceMandateNotificationAcssDebitData // the object to be transformed
> = z
  .object({
    statementDescriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceMandateNotificationAcssDebitData = {
  in: SchemaIn$SourceMandateNotificationAcssDebitData,
  out: SchemaOut$SourceMandateNotificationAcssDebitData,
};
