import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundDestinationDetailsSwish = {
  /**
   * For refunds declined by the network, a decline code provided by the network which indicates the reason the refund failed.
   */
  networkDeclineCode?: string | null | undefined;
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
 * RefundDestinationDetailsSwish without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundDestinationDetailsSwish = {
  network_decline_code?: string | null | undefined;
  reference?: string | null | undefined;
  reference_status?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundDestinationDetailsSwish
 */
const SchemaIn$RefundDestinationDetailsSwish: z.ZodType<
  RefundDestinationDetailsSwish, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    network_decline_code: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
    reference_status: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network_decline_code: "networkDeclineCode",
      reference: "reference",
      reference_status: "referenceStatus",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundDestinationDetailsSwish
 */
const SchemaOut$RefundDestinationDetailsSwish: z.ZodType<
  External$RefundDestinationDetailsSwish, // output type of this zod object
  z.ZodTypeDef,
  RefundDestinationDetailsSwish // the object to be transformed
> = z
  .object({
    networkDeclineCode: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
    referenceStatus: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      networkDeclineCode: "network_decline_code",
      reference: "reference",
      referenceStatus: "reference_status",
    });
  });

export const Schemas$RefundDestinationDetailsSwish = {
  in: SchemaIn$RefundDestinationDetailsSwish,
  out: SchemaOut$RefundDestinationDetailsSwish,
};
