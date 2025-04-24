import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundDestinationDetailsGbBankTransfer = {
  /**
   * The reference assigned to the refund.
   */
  reference?: string | null | undefined;
  /**
   * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string | null | undefined;
};

/**
 * @internal
 * RefundDestinationDetailsGbBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundDestinationDetailsGbBankTransfer = {
  reference?: string | null | undefined;
  reference_status?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundDestinationDetailsGbBankTransfer
 */
const SchemaIn$RefundDestinationDetailsGbBankTransfer: z.ZodType<
  RefundDestinationDetailsGbBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().nullable().optional(),
    reference_status: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      reference_status: "referenceStatus",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundDestinationDetailsGbBankTransfer
 */
const SchemaOut$RefundDestinationDetailsGbBankTransfer: z.ZodType<
  External$RefundDestinationDetailsGbBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  RefundDestinationDetailsGbBankTransfer // the object to be transformed
> = z
  .object({
    reference: z.string().nullable().optional(),
    referenceStatus: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      referenceStatus: "reference_status",
    });
  });

export const Schemas$RefundDestinationDetailsGbBankTransfer = {
  in: SchemaIn$RefundDestinationDetailsGbBankTransfer,
  out: SchemaOut$RefundDestinationDetailsGbBankTransfer,
};
