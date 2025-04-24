import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeNotReceivedEvidence = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: (string | File) | undefined;
  /**
   * Date when the cardholder expected to receive the product.
   */
  expectedAt?: number | null | undefined;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string | null | undefined;
  /**
   * Description of the merchandise or service that was purchased.
   */
  productDescription?: string | null | undefined;
  /**
   * Whether the product was a merchandise or service.
   */
  productType?: ("merchandise" | "service") | null | undefined;
};

/**
 * @internal
 * IssuingDisputeNotReceivedEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeNotReceivedEvidence = {
  additional_documentation?: (string | External$File) | undefined;
  expected_at?: number | null | undefined;
  explanation?: string | null | undefined;
  product_description?: string | null | undefined;
  product_type?: ("merchandise" | "service") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeNotReceivedEvidence
 */
const SchemaIn$IssuingDisputeNotReceivedEvidence: z.ZodType<
  IssuingDisputeNotReceivedEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    expected_at: z.number().int().nullable().optional(),
    explanation: z.string().nullable().optional(),
    product_description: z.string().nullable().optional(),
    product_type: z.enum(["merchandise", "service"]).nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeNotReceivedEvidence
 */
const SchemaOut$IssuingDisputeNotReceivedEvidence: z.ZodType<
  External$IssuingDisputeNotReceivedEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeNotReceivedEvidence // the object to be transformed
> = z
  .object({
    additionalDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    expectedAt: z.number().int().nullable().optional(),
    explanation: z.string().nullable().optional(),
    productDescription: z.string().nullable().optional(),
    productType: z.enum(["merchandise", "service"]).nullable().optional(),
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

export const Schemas$IssuingDisputeNotReceivedEvidence = {
  in: SchemaIn$IssuingDisputeNotReceivedEvidence,
  out: SchemaOut$IssuingDisputeNotReceivedEvidence,
};
