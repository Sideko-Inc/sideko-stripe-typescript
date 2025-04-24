import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeDuplicateEvidence = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: (string | File) | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
   */
  cardStatement?: (string | File) | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
   */
  cashReceipt?: (string | File) | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
   */
  checkImage?: (string | File) | undefined;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string | null | undefined;
  /**
   * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
   */
  originalTransaction?: string | null | undefined;
};

/**
 * @internal
 * IssuingDisputeDuplicateEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeDuplicateEvidence = {
  additional_documentation?: (string | External$File) | undefined;
  card_statement?: (string | External$File) | undefined;
  cash_receipt?: (string | External$File) | undefined;
  check_image?: (string | External$File) | undefined;
  explanation?: string | null | undefined;
  original_transaction?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeDuplicateEvidence
 */
const SchemaIn$IssuingDisputeDuplicateEvidence: z.ZodType<
  IssuingDisputeDuplicateEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_documentation: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    card_statement: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    cash_receipt: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    check_image: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
    explanation: z.string().nullable().optional(),
    original_transaction: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeDuplicateEvidence
 */
const SchemaOut$IssuingDisputeDuplicateEvidence: z.ZodType<
  External$IssuingDisputeDuplicateEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeDuplicateEvidence // the object to be transformed
> = z
  .object({
    additionalDocumentation: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    cardStatement: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    cashReceipt: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    checkImage: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
    explanation: z.string().nullable().optional(),
    originalTransaction: z.string().nullable().optional(),
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

export const Schemas$IssuingDisputeDuplicateEvidence = {
  in: SchemaIn$IssuingDisputeDuplicateEvidence,
  out: SchemaOut$IssuingDisputeDuplicateEvidence,
};
