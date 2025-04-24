import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBodyEvidenceFraudulentObj0
 */
export type IssuingDisputeCreateBodyEvidenceFraudulentObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidenceFraudulentObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidenceFraudulentObj0 = {
  additional_documentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidenceFraudulentObj0
 */
const SchemaIn$IssuingDisputeCreateBodyEvidenceFraudulentObj0: z.ZodType<
  IssuingDisputeCreateBodyEvidenceFraudulentObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidenceFraudulentObj0
 */
const SchemaOut$IssuingDisputeCreateBodyEvidenceFraudulentObj0: z.ZodType<
  External$IssuingDisputeCreateBodyEvidenceFraudulentObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidenceFraudulentObj0 // the object to be transformed
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

export const Schemas$IssuingDisputeCreateBodyEvidenceFraudulentObj0 = {
  in: SchemaIn$IssuingDisputeCreateBodyEvidenceFraudulentObj0,
  out: SchemaOut$IssuingDisputeCreateBodyEvidenceFraudulentObj0,
};
