import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about why this subscription was cancelled
 */
export type CustomerSubscriptionModifyBodyCancellationDetails = {
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
 * CustomerSubscriptionModifyBodyCancellationDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyCancellationDetails = {
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
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyCancellationDetails
 */
const SchemaIn$CustomerSubscriptionModifyBodyCancellationDetails: z.ZodType<
  CustomerSubscriptionModifyBodyCancellationDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyCancellationDetails
 */
const SchemaOut$CustomerSubscriptionModifyBodyCancellationDetails: z.ZodType<
  External$CustomerSubscriptionModifyBodyCancellationDetails, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyCancellationDetails // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyCancellationDetails = {
  in: SchemaIn$CustomerSubscriptionModifyBodyCancellationDetails,
  out: SchemaOut$CustomerSubscriptionModifyBodyCancellationDetails,
};
