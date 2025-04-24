import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeFraudulentEvidence = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: (string | File) | undefined;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string | null | undefined;
};

/**
 * @internal
 * IssuingDisputeFraudulentEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeFraudulentEvidence = {
  additional_documentation?: (string | External$File) | undefined;
  explanation?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeFraudulentEvidence
 */
const SchemaIn$IssuingDisputeFraudulentEvidence: z.ZodType<
  IssuingDisputeFraudulentEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    explanation: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      explanation: "explanation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeFraudulentEvidence
 */
const SchemaOut$IssuingDisputeFraudulentEvidence: z.ZodType<
  External$IssuingDisputeFraudulentEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeFraudulentEvidence // the object to be transformed
> = z
  .object({
    additionalDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    explanation: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      explanation: "explanation",
    });
  });

export const Schemas$IssuingDisputeFraudulentEvidence = {
  in: SchemaIn$IssuingDisputeFraudulentEvidence,
  out: SchemaOut$IssuingDisputeFraudulentEvidence,
};
