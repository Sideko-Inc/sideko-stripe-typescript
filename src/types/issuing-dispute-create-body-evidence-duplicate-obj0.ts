import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBodyEvidenceDuplicateObj0
 */
export type IssuingDisputeCreateBodyEvidenceDuplicateObj0 = {
  additionalDocumentation?: (string | string) | undefined;
  cardStatement?: (string | string) | undefined;
  cashReceipt?: (string | string) | undefined;
  checkImage?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
  originalTransaction?: string | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBodyEvidenceDuplicateObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBodyEvidenceDuplicateObj0 = {
  additional_documentation?: (string | string) | undefined;
  card_statement?: (string | string) | undefined;
  cash_receipt?: (string | string) | undefined;
  check_image?: (string | string) | undefined;
  explanation?: (string | string) | undefined;
  original_transaction?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBodyEvidenceDuplicateObj0
 */
const SchemaIn$IssuingDisputeCreateBodyEvidenceDuplicateObj0: z.ZodType<
  IssuingDisputeCreateBodyEvidenceDuplicateObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z.union([z.string(), z.string()]).optional(),
    card_statement: z.union([z.string(), z.string()]).optional(),
    cash_receipt: z.union([z.string(), z.string()]).optional(),
    check_image: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    original_transaction: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_documentation: "additionalDocumentation",
      card_statement: "cardStatement",
      cash_receipt: "cashReceipt",
      check_image: "checkImage",
      explanation: "explanation",
      original_transaction: "originalTransaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBodyEvidenceDuplicateObj0
 */
const SchemaOut$IssuingDisputeCreateBodyEvidenceDuplicateObj0: z.ZodType<
  External$IssuingDisputeCreateBodyEvidenceDuplicateObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBodyEvidenceDuplicateObj0 // the object to be transformed
> = z
  .object({
    additionalDocumentation: z.union([z.string(), z.string()]).optional(),
    cardStatement: z.union([z.string(), z.string()]).optional(),
    cashReceipt: z.union([z.string(), z.string()]).optional(),
    checkImage: z.union([z.string(), z.string()]).optional(),
    explanation: z.union([z.string(), z.string()]).optional(),
    originalTransaction: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocumentation: "additional_documentation",
      cardStatement: "card_statement",
      cashReceipt: "cash_receipt",
      checkImage: "check_image",
      explanation: "explanation",
      originalTransaction: "original_transaction",
    });
  });

export const Schemas$IssuingDisputeCreateBodyEvidenceDuplicateObj0 = {
  in: SchemaIn$IssuingDisputeCreateBodyEvidenceDuplicateObj0,
  out: SchemaOut$IssuingDisputeCreateBodyEvidenceDuplicateObj0,
};
