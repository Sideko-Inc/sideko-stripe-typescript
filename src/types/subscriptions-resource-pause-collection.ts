import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The Pause Collection settings determine how we will pause collection for this subscription and for how long the subscription
 * should be paused.
 */
export type SubscriptionsResourcePauseCollection = {
  /**
   * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
   */
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  /**
   * The time after which the subscription will resume collecting payments.
   */
  resumesAt?: number | null | undefined;
};

/**
 * @internal
 * SubscriptionsResourcePauseCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionsResourcePauseCollection = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumes_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionsResourcePauseCollection
 */
const SchemaIn$SubscriptionsResourcePauseCollection: z.ZodType<
  SubscriptionsResourcePauseCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    behavior: z.enum(["keep_as_draft", "mark_uncollectible", "void"]),
    resumes_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      behavior: "behavior",
      resumes_at: "resumesAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionsResourcePauseCollection
 */
const SchemaOut$SubscriptionsResourcePauseCollection: z.ZodType<
  External$SubscriptionsResourcePauseCollection, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionsResourcePauseCollection // the object to be transformed
> = z
  .object({
    behavior: z.enum(["keep_as_draft", "mark_uncollectible", "void"]),
    resumesAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      behavior: "behavior",
      resumesAt: "resumes_at",
    });
  });

export const Schemas$SubscriptionsResourcePauseCollection = {
  in: SchemaIn$SubscriptionsResourcePauseCollection,
  out: SchemaOut$SubscriptionsResourcePauseCollection,
};
