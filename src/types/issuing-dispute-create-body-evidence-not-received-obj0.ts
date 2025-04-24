import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBodyEvidenceNotReceivedObj0
 */
export type IssuingDisputeCreateBodyEvidenceNotReceivedObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  expectedAt?: (number | string) | undefined;
  explanation?: (string | string) | undefined;
  productDescription?: (string | string) | undefined;
  productType?: ("merchandise" | "service") | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidenceNotReceivedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidenceNotReceivedObj0 = {
  additional_documentation?: (string | string) | undefined;
  expected_at?: (number | string) | undefined;
  explanation?: (string | string) | undefined;
  product_description?: (string | string) | undefined;
  product_type?: ("merchandise" | "service") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidenceNotReceivedObj0
 */
const SchemaIn$IssuingDisputeCreateBodyEvidenceNotReceivedObj0: z.ZodType<
  IssuingDisputeCreateBodyEvidenceNotReceivedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidenceNotReceivedObj0
 */
const SchemaOut$IssuingDisputeCreateBodyEvidenceNotReceivedObj0: z.ZodType<
  External$IssuingDisputeCreateBodyEvidenceNotReceivedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidenceNotReceivedObj0 // the object to be transformed
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

export const Schemas$IssuingDisputeCreateBodyEvidenceNotReceivedObj0 = {
  in: SchemaIn$IssuingDisputeCreateBodyEvidenceNotReceivedObj0,
  out: SchemaOut$IssuingDisputeCreateBodyEvidenceNotReceivedObj0,
};
