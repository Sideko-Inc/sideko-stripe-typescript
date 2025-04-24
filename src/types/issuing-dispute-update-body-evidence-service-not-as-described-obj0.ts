import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0
 */
export type IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  canceledAt?: (number | string) | undefined;
  cancellationReason?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
  receivedAt?: (number | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0 =
  {
    additional_documentation?: (string | string) | undefined;
    canceled_at?: (number | string) | undefined;
    cancellation_reason?: (string | string) | undefined;
    explanation?: (string | string) | undefined;
    received_at?: (number | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0
 */
const SchemaIn$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0: z.ZodType<
  IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    canceled_at: z.union([z.number().int(), z.string()]).optional(),
    cancellation_reason: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    received_at: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      canceled_at: "canceledAt",
      cancellation_reason: "cancellationReason",
      explanation: "explanation",
      received_at: "receivedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0
 */
const SchemaOut$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0: z.ZodType<
  External$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    canceledAt: z.union([z.number().int(), z.string()]).optional(),
    cancellationReason: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    receivedAt: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      canceledAt: "canceled_at",
      cancellationReason: "cancellation_reason",
      explanation: "explanation",
      receivedAt: "received_at",
    });
  });

export const Schemas$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0 =
  {
    in: SchemaIn$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0,
    out: SchemaOut$IssuingDisputeUpdateBodyEvidenceServiceNotAsDescribedObj0,
  };
