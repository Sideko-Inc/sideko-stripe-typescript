import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeCanceledEvidence = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: (string | File) | undefined;
  /**
   * Date when order was canceled.
   */
  canceledAt?: number | null | undefined;
  /**
   * Whether the cardholder was provided with a cancellation policy.
   */
  cancellationPolicyProvided?: boolean | null | undefined;
  /**
   * Reason for canceling the order.
   */
  cancellationReason?: string | null | undefined;
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
  /**
   * Result of cardholder's attempt to return the product.
   */
  returnStatus?: ("merchant_rejected" | "successful") | null | undefined;
  /**
   * Date when the product was returned or attempted to be returned.
   */
  returnedAt?: number | null | undefined;
};

/**
 * @internal
 * IssuingDisputeCanceledEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCanceledEvidence = {
  additional_documentation?: (string | External$File) | undefined;
  canceled_at?: number | null | undefined;
  cancellation_policy_provided?: boolean | null | undefined;
  cancellation_reason?: string | null | undefined;
  expected_at?: number | null | undefined;
  explanation?: string | null | undefined;
  product_description?: string | null | undefined;
  product_type?: ("merchandise" | "service") | null | undefined;
  return_status?: ("merchant_rejected" | "successful") | null | undefined;
  returned_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCanceledEvidence
 */
const SchemaIn$IssuingDisputeCanceledEvidence: z.ZodType<
  IssuingDisputeCanceledEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    canceled_at: z.number().int().nullable().optional(),
    cancellation_policy_provided: z.boolean().nullable().optional(),
    cancellation_reason: z.string().nullable().optional(),
    expected_at: z.number().int().nullable().optional(),
    explanation: z.string().nullable().optional(),
    product_description: z.string().nullable().optional(),
    product_type: z.enum(["merchandise", "service"]).nullable().optional(),
    return_status: z
      .enum(["merchant_rejected", "successful"])
      .nullable()
      .optional(),
    returned_at: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCanceledEvidence
 */
const SchemaOut$IssuingDisputeCanceledEvidence: z.ZodType<
  External$IssuingDisputeCanceledEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCanceledEvidence // the object to be transformed
> = z
  .object({
    additionalDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    canceledAt: z.number().int().nullable().optional(),
    cancellationPolicyProvided: z.boolean().nullable().optional(),
    cancellationReason: z.string().nullable().optional(),
    expectedAt: z.number().int().nullable().optional(),
    explanation: z.string().nullable().optional(),
    productDescription: z.string().nullable().optional(),
    productType: z.enum(["merchandise", "service"]).nullable().optional(),
    returnStatus: z
      .enum(["merchant_rejected", "successful"])
      .nullable()
      .optional(),
    returnedAt: z.number().int().nullable().optional(),
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

export const Schemas$IssuingDisputeCanceledEvidence = {
  in: SchemaIn$IssuingDisputeCanceledEvidence,
  out: SchemaOut$IssuingDisputeCanceledEvidence,
};
