import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPauseCollectionObj0
 */
export type CustomerSubscriptionModifyBodyPauseCollectionObj0 = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumesAt?: number | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyPauseCollectionObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPauseCollectionObj0 = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumes_at?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPauseCollectionObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyPauseCollectionObj0: z.ZodType<
  CustomerSubscriptionModifyBodyPauseCollectionObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPauseCollectionObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyPauseCollectionObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyPauseCollectionObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPauseCollectionObj0 // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyPauseCollectionObj0 = {
  in: SchemaIn$CustomerSubscriptionModifyBodyPauseCollectionObj0,
  out: SchemaOut$CustomerSubscriptionModifyBodyPauseCollectionObj0,
};
