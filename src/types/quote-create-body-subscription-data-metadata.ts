import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteCreateBodySubscriptionDataMetadata
 */
export type QuoteCreateBodySubscriptionDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * QuoteCreateBodySubscriptionDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodySubscriptionDataMetadata = {
  [additionalProperty: string]:
    | External$QuoteCreateBodySubscriptionDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodySubscriptionDataMetadata
 */
const SchemaIn$QuoteCreateBodySubscriptionDataMetadata: z.ZodType<
  QuoteCreateBodySubscriptionDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodySubscriptionDataMetadata
 */
const SchemaOut$QuoteCreateBodySubscriptionDataMetadata: z.ZodType<
  External$QuoteCreateBodySubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodySubscriptionDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$QuoteCreateBodySubscriptionDataMetadata = {
  in: SchemaIn$QuoteCreateBodySubscriptionDataMetadata,
  out: SchemaOut$QuoteCreateBodySubscriptionDataMetadata,
};
