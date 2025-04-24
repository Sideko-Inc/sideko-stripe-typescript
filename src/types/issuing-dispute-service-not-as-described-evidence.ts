import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeServiceNotAsDescribedEvidence = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: (string | File) | undefined;
  /**
   * Date when order was canceled.
   */
  canceledAt?: number | null | undefined;
  /**
   * Reason for canceling the order.
   */
  cancellationReason?: string | null | undefined;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string | null | undefined;
  /**
   * Date when the product was received.
   */
  receivedAt?: number | null | undefined;
};

/**
 * @internal
 * IssuingDisputeServiceNotAsDescribedEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeServiceNotAsDescribedEvidence = {
  additional_documentation?: (string | External$File) | undefined;
  canceled_at?: number | null | undefined;
  cancellation_reason?: string | null | undefined;
  explanation?: string | null | undefined;
  received_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeServiceNotAsDescribedEvidence
 */
const SchemaIn$IssuingDisputeServiceNotAsDescribedEvidence: z.ZodType<
  IssuingDisputeServiceNotAsDescribedEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    canceled_at: z.number().int().nullable().optional(),
    cancellation_reason: z.string().nullable().optional(),
    explanation: z.string().nullable().optional(),
    received_at: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeServiceNotAsDescribedEvidence
 */
const SchemaOut$IssuingDisputeServiceNotAsDescribedEvidence: z.ZodType<
  External$IssuingDisputeServiceNotAsDescribedEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeServiceNotAsDescribedEvidence // the object to be transformed
> = z
  .object({
    additionalDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    canceledAt: z.number().int().nullable().optional(),
    cancellationReason: z.string().nullable().optional(),
    explanation: z.string().nullable().optional(),
    receivedAt: z.number().int().nullable().optional(),
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

export const Schemas$IssuingDisputeServiceNotAsDescribedEvidence = {
  in: SchemaIn$IssuingDisputeServiceNotAsDescribedEvidence,
  out: SchemaOut$IssuingDisputeServiceNotAsDescribedEvidence,
};
