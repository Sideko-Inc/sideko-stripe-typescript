import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBodyEvidenceFraudulentObj0
 */
export type IssuingDisputeUpdateBodyEvidenceFraudulentObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyEvidenceFraudulentObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyEvidenceFraudulentObj0 = {
  additional_documentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyEvidenceFraudulentObj0
 */
const SchemaIn$IssuingDisputeUpdateBodyEvidenceFraudulentObj0: z.ZodType<
  IssuingDisputeUpdateBodyEvidenceFraudulentObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      explanation: "explanation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyEvidenceFraudulentObj0
 */
const SchemaOut$IssuingDisputeUpdateBodyEvidenceFraudulentObj0: z.ZodType<
  External$IssuingDisputeUpdateBodyEvidenceFraudulentObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyEvidenceFraudulentObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      explanation: "explanation",
    });
  });

export const Schemas$IssuingDisputeUpdateBodyEvidenceFraudulentObj0 = {
  in: SchemaIn$IssuingDisputeUpdateBodyEvidenceFraudulentObj0,
  out: SchemaOut$IssuingDisputeUpdateBodyEvidenceFraudulentObj0,
};
