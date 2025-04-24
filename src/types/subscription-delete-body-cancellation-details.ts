import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about why this subscription was cancelled
 */
export type SubscriptionDeleteBodyCancellationDetails = {
  comment?: (string | string) | undefined;
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
    | undefined;
};

/**
 * @internal
 * SubscriptionDeleteBodyCancellationDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionDeleteBodyCancellationDetails = {
  comment?: (string | string) | undefined;
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
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionDeleteBodyCancellationDetails
 */
const SchemaIn$SubscriptionDeleteBodyCancellationDetails: z.ZodType<
  SubscriptionDeleteBodyCancellationDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    comment: z.union([z.string(), z.string()]).optional(),
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
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      comment: "comment",
      feedback: "feedback",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionDeleteBodyCancellationDetails
 */
const SchemaOut$SubscriptionDeleteBodyCancellationDetails: z.ZodType<
  External$SubscriptionDeleteBodyCancellationDetails, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionDeleteBodyCancellationDetails // the object to be transformed
> = z
  .object({
    comment: z.union([z.string(), z.string()]).optional(),
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
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      comment: "comment",
      feedback: "feedback",
    });
  });

export const Schemas$SubscriptionDeleteBodyCancellationDetails = {
  in: SchemaIn$SubscriptionDeleteBodyCancellationDetails,
  out: SchemaOut$SubscriptionDeleteBodyCancellationDetails,
};
