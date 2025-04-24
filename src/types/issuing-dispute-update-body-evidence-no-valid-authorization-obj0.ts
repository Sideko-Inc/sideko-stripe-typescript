import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0
 */
export type IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0 =
  {
    additional_documentation?: (string | string) | undefined;
    explanation?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0
 */
const SchemaIn$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0: z.ZodType<
  IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0
 */
const SchemaOut$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0: z.ZodType<
  External$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0 // the object to be transformed
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

export const Schemas$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0 =
  {
    in: SchemaIn$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0,
    out: SchemaOut$IssuingDisputeUpdateBodyEvidenceNoValidAuthorizationObj0,
  };
