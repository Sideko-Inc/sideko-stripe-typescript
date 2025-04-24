import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBodyEvidenceCanceledObj0
 */
export type IssuingDisputeCreateBodyEvidenceCanceledObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  canceledAt?: (number | string) | undefined;
  cancellationPolicyProvided?: (boolean | string) | undefined;
  cancellationReason?: (string | string) | undefined;
  expectedAt?: (number | string) | undefined;
  explanation?: (string | string) | undefined;
  productDescription?: (string | string) | undefined;
  productType?: ("merchandise" | "service") | undefined;
  returnStatus?: ("merchant_rejected" | "successful") | undefined;
  returnedAt?: (number | string) | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidenceCanceledObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidenceCanceledObj0 = {
  additional_documentation?: (string | string) | undefined;
  canceled_at?: (number | string) | undefined;
  cancellation_policy_provided?: (boolean | string) | undefined;
  cancellation_reason?: (string | string) | undefined;
  expected_at?: (number | string) | undefined;
  explanation?: (string | string) | undefined;
  product_description?: (string | string) | undefined;
  product_type?: ("merchandise" | "service") | undefined;
  return_status?: ("merchant_rejected" | "successful") | undefined;
  returned_at?: (number | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidenceCanceledObj0
 */
const SchemaIn$IssuingDisputeCreateBodyEvidenceCanceledObj0: z.ZodType<
  IssuingDisputeCreateBodyEvidenceCanceledObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    canceled_at: z.union([z.number().int(), z.string()]).optional(),
    cancellation_policy_provided: z.union([z.boolean(), z.string()]).optional(),
    cancellation_reason: z.union([z.string(), z.string()]).optional(),
    expected_at: z.union([z.number().int(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    product_description: z.union([z.string(), z.string()]).optional(),
    product_type: z.enum(["merchandise", "service"]).optional(),
    return_status: z.enum(["merchant_rejected", "successful"]).optional(),
    returned_at: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      canceled_at: "canceledAt",
      cancellation_policy_provided: "cancellationPolicyProvided",
      cancellation_reason: "cancellationReason",
      expected_at: "expectedAt",
      explanation: "explanation",
      product_description: "productDescription",
      product_type: "productType",
      return_status: "returnStatus",
      returned_at: "returnedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidenceCanceledObj0
 */
const SchemaOut$IssuingDisputeCreateBodyEvidenceCanceledObj0: z.ZodType<
  External$IssuingDisputeCreateBodyEvidenceCanceledObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidenceCanceledObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    canceledAt: z.union([z.number().int(), z.string()]).optional(),
    cancellationPolicyProvided: z.union([z.boolean(), z.string()]).optional(),
    cancellationReason: z.union([z.string(), z.string()]).optional(),
    expectedAt: z.union([z.number().int(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    productDescription: z.union([z.string(), z.string()]).optional(),
    productType: z.enum(["merchandise", "service"]).optional(),
    returnStatus: z.enum(["merchant_rejected", "successful"]).optional(),
    returnedAt: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      canceledAt: "canceled_at",
      cancellationPolicyProvided: "cancellation_policy_provided",
      cancellationReason: "cancellation_reason",
      expectedAt: "expected_at",
      explanation: "explanation",
      productDescription: "product_description",
      productType: "product_type",
      returnStatus: "return_status",
      returnedAt: "returned_at",
    });
  });

export const Schemas$IssuingDisputeCreateBodyEvidenceCanceledObj0 = {
  in: SchemaIn$IssuingDisputeCreateBodyEvidenceCanceledObj0,
  out: SchemaOut$IssuingDisputeCreateBodyEvidenceCanceledObj0,
};
