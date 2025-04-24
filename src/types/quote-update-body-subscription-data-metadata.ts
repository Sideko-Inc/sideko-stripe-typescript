import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodySubscriptionDataMetadata
 */
export type QuoteUpdateBodySubscriptionDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * QuoteUpdateBodySubscriptionDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodySubscriptionDataMetadata = {
  [additionalProperty: string]:
    | External$QuoteUpdateBodySubscriptionDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodySubscriptionDataMetadata
 */
const SchemaIn$QuoteUpdateBodySubscriptionDataMetadata: z.ZodType<
  QuoteUpdateBodySubscriptionDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodySubscriptionDataMetadata
 */
const SchemaOut$QuoteUpdateBodySubscriptionDataMetadata: z.ZodType<
  External$QuoteUpdateBodySubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodySubscriptionDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$QuoteUpdateBodySubscriptionDataMetadata = {
  in: SchemaIn$QuoteUpdateBodySubscriptionDataMetadata,
  out: SchemaOut$QuoteUpdateBodySubscriptionDataMetadata,
};
