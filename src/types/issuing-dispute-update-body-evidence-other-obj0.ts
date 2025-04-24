import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBodyEvidenceOtherObj0
 */
export type IssuingDisputeUpdateBodyEvidenceOtherObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
  productDescription?: (string | string) | undefined;
  productType?: ("merchandise" | "service") | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyEvidenceOtherObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyEvidenceOtherObj0 = {
  additional_documentation?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
  product_description?: (string | string) | undefined;
  product_type?: ("merchandise" | "service") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyEvidenceOtherObj0
 */
const SchemaIn$IssuingDisputeUpdateBodyEvidenceOtherObj0: z.ZodType<
  IssuingDisputeUpdateBodyEvidenceOtherObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    product_description: z.union([z.string(), z.string()]).optional(),
    product_type: z.enum(["merchandise", "service"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      explanation: "explanation",
      product_description: "productDescription",
      product_type: "productType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyEvidenceOtherObj0
 */
const SchemaOut$IssuingDisputeUpdateBodyEvidenceOtherObj0: z.ZodType<
  External$IssuingDisputeUpdateBodyEvidenceOtherObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyEvidenceOtherObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    productDescription: z.union([z.string(), z.string()]).optional(),
    productType: z.enum(["merchandise", "service"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      explanation: "explanation",
      productDescription: "product_description",
      productType: "product_type",
    });
  });

export const Schemas$IssuingDisputeUpdateBodyEvidenceOtherObj0 = {
  in: SchemaIn$IssuingDisputeUpdateBodyEvidenceOtherObj0,
  out: SchemaOut$IssuingDisputeUpdateBodyEvidenceOtherObj0,
};
