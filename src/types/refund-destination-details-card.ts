import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundDestinationDetailsCard = {
  /**
   * Value of the reference number assigned to the refund.
   */
  reference?: string | undefined;
  /**
   * Status of the reference number on the refund. This can be `pending`, `available` or `unavailable`.
   */
  referenceStatus?: string | undefined;
  /**
   * Type of the reference number assigned to the refund.
   */
  referenceType?: string | undefined;
  /**
   * The type of refund. This can be `refund`, `reversal`, or `pending`.
   */
  type: "pending" | "refund" | "reversal";
};

/**
 * @internal
 * RefundDestinationDetailsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundDestinationDetailsCard = {
  reference?: string | undefined;
  reference_status?: string | undefined;
  reference_type?: string | undefined;
  type: "pending" | "refund" | "reversal";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundDestinationDetailsCard
 */
const SchemaIn$RefundDestinationDetailsCard: z.ZodType<
  RefundDestinationDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().optional(),
    reference_status: z.string().optional(),
    reference_type: z.string().optional(),
    type: z.enum(["pending", "refund", "reversal"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      reference_status: "referenceStatus",
      reference_type: "referenceType",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundDestinationDetailsCard
 */
const SchemaOut$RefundDestinationDetailsCard: z.ZodType<
  External$RefundDestinationDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  RefundDestinationDetailsCard // the object to be transformed
> = z
  .object({
    reference: z.string().optional(),
    referenceStatus: z.string().optional(),
    referenceType: z.string().optional(),
    type: z.enum(["pending", "refund", "reversal"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      referenceStatus: "reference_status",
      referenceType: "reference_type",
      type: "type",
    });
  });

export const Schemas$RefundDestinationDetailsCard = {
  in: SchemaIn$RefundDestinationDetailsCard,
  out: SchemaOut$RefundDestinationDetailsCard,
};
