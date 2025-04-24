import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPauseCollectionObj0
 */
export type SubscriptionUpdateBodyPauseCollectionObj0 = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumesAt?: number | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyPauseCollectionObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPauseCollectionObj0 = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumes_at?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPauseCollectionObj0
 */
const SchemaIn$SubscriptionUpdateBodyPauseCollectionObj0: z.ZodType<
  SubscriptionUpdateBodyPauseCollectionObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    behavior: z.enum(["keep_as_draft", "mark_uncollectible", "void"]),
    resumes_at: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      behavior: "behavior",
      resumes_at: "resumesAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPauseCollectionObj0
 */
const SchemaOut$SubscriptionUpdateBodyPauseCollectionObj0: z.ZodType<
  External$SubscriptionUpdateBodyPauseCollectionObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPauseCollectionObj0 // the object to be transformed
> = z
  .object({
    behavior: z.enum(["keep_as_draft", "mark_uncollectible", "void"]),
    resumesAt: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      behavior: "behavior",
      resumesAt: "resumes_at",
    });
  });

export const Schemas$SubscriptionUpdateBodyPauseCollectionObj0 = {
  in: SchemaIn$SubscriptionUpdateBodyPauseCollectionObj0,
  out: SchemaOut$SubscriptionUpdateBodyPauseCollectionObj0,
};
