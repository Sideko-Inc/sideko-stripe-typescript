import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBodyEvidenceNotReceivedObj0
 */
export type IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  expectedAt?: (number | string) | undefined;
  explanation?: (string | string) | undefined;
  productDescription?: (string | string) | undefined;
  productType?: ("merchandise" | "service") | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 = {
  additional_documentation?: (string | string) | undefined;
  expected_at?: (number | string) | undefined;
  explanation?: (string | string) | undefined;
  product_description?: (string | string) | undefined;
  product_type?: ("merchandise" | "service") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyEvidenceNotReceivedObj0
 */
const SchemaIn$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0: z.ZodType<
  IssuingDisputeUpdateBodyEvidenceNotReceivedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    expected_at: z.union([z.number().int(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    product_description: z.union([z.string(), z.string()]).optional(),
    product_type: z.enum(["merchandise", "service"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      expected_at: "expectedAt",
      explanation: "explanation",
      product_description: "productDescription",
      product_type: "productType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0
 */
const SchemaOut$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0: z.ZodType<
  External$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    expectedAt: z.union([z.number().int(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    productDescription: z.union([z.string(), z.string()]).optional(),
    productType: z.enum(["merchandise", "service"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      expectedAt: "expected_at",
      explanation: "explanation",
      productDescription: "product_description",
      productType: "product_type",
    });
  });

export const Schemas$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0 = {
  in: SchemaIn$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0,
  out: SchemaOut$IssuingDisputeUpdateBodyEvidenceNotReceivedObj0,
};
