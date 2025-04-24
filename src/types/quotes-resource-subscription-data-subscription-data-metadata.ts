import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
 */
export type QuotesResourceSubscriptionDataSubscriptionDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * QuotesResourceSubscriptionDataSubscriptionDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceSubscriptionDataSubscriptionDataMetadata = {
  [additionalProperty: string]:
    | (External$QuotesResourceSubscriptionDataSubscriptionDataMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceSubscriptionDataSubscriptionDataMetadata
 */
const SchemaIn$QuotesResourceSubscriptionDataSubscriptionDataMetadata: z.ZodType<
  QuotesResourceSubscriptionDataSubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceSubscriptionDataSubscriptionDataMetadata
 */
const SchemaOut$QuotesResourceSubscriptionDataSubscriptionDataMetadata: z.ZodType<
  External$QuotesResourceSubscriptionDataSubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceSubscriptionDataSubscriptionDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$QuotesResourceSubscriptionDataSubscriptionDataMetadata = {
  in: SchemaIn$QuotesResourceSubscriptionDataSubscriptionDataMetadata,
  out: SchemaOut$QuotesResourceSubscriptionDataSubscriptionDataMetadata,
};
