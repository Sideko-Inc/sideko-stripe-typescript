import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundDestinationDetailsBrBankTransfer = {
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
 * RefundDestinationDetailsBrBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundDestinationDetailsBrBankTransfer = {
  reference?: string | null | undefined;
  reference_status?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundDestinationDetailsBrBankTransfer
 */
const SchemaIn$RefundDestinationDetailsBrBankTransfer: z.ZodType<
  RefundDestinationDetailsBrBankTransfer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundDestinationDetailsBrBankTransfer
 */
const SchemaOut$RefundDestinationDetailsBrBankTransfer: z.ZodType<
  External$RefundDestinationDetailsBrBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  RefundDestinationDetailsBrBankTransfer // the object to be transformed
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

export const Schemas$RefundDestinationDetailsBrBankTransfer = {
  in: SchemaIn$RefundDestinationDetailsBrBankTransfer,
  out: SchemaOut$RefundDestinationDetailsBrBankTransfer,
};
