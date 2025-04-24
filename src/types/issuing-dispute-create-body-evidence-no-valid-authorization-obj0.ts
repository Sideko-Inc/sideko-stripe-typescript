import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0
 */
export type IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0 =
  {
    additional_documentation?: (string | string) | undefined;
    explanation?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0
 */
const SchemaIn$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0: z.ZodType<
  IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0
 */
const SchemaOut$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0: z.ZodType<
  External$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0 // the object to be transformed
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

export const Schemas$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0 =
  {
    in: SchemaIn$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0,
    out: SchemaOut$IssuingDisputeCreateBodyEvidenceNoValidAuthorizationObj0,
  };
