import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CancellationDetails = {
  /**
   * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
   */
  comment?: string | null | undefined;
  /**
   * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
   */
  feedback?:
    | (
        | "customer_service"
        | "low_quality"
        | "missing_features"
        | "other"
        | "switched_service"
        | "too_complex"
        | "too_expensive"
        | "unused"
      )
    | null
    | undefined;
  /**
   * Why this subscription was canceled.
   */
  reason?:
    | ("cancellation_requested" | "payment_disputed" | "payment_failed")
    | null
    | undefined;
};

/**
 * @internal
 * CancellationDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancellationDetails = {
  comment?: string | null | undefined;
  feedback?:
    | (
        | "customer_service"
        | "low_quality"
        | "missing_features"
        | "other"
        | "switched_service"
        | "too_complex"
        | "too_expensive"
        | "unused"
      )
    | null
    | undefined;
  reason?:
    | ("cancellation_requested" | "payment_disputed" | "payment_failed")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancellationDetails
 */
const SchemaIn$CancellationDetails: z.ZodType<
  CancellationDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    comment: z.string().nullable().optional(),
    feedback: z
      .enum([
        "customer_service",
        "low_quality",
        "missing_features",
        "other",
        "switched_service",
        "too_complex",
        "too_expensive",
        "unused",
      ])
      .nullable()
      .optional(),
    reason: z
      .enum(["cancellation_requested", "payment_disputed", "payment_failed"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      comment: "comment",
      feedback: "feedback",
      reason: "reason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancellationDetails
 */
const SchemaOut$CancellationDetails: z.ZodType<
  External$CancellationDetails, // output type of this zod object
  z.ZodTypeDef,
  CancellationDetails // the object to be transformed
> = z
  .object({
    comment: z.string().nullable().optional(),
    feedback: z
      .enum([
        "customer_service",
        "low_quality",
        "missing_features",
        "other",
        "switched_service",
        "too_complex",
        "too_expensive",
        "unused",
      ])
      .nullable()
      .optional(),
    reason: z
      .enum(["cancellation_requested", "payment_disputed", "payment_failed"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      comment: "comment",
      feedback: "feedback",
      reason: "reason",
    });
  });

export const Schemas$CancellationDetails = {
  in: SchemaIn$CancellationDetails,
  out: SchemaOut$CancellationDetails,
};
