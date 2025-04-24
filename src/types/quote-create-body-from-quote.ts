import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
 */
export type QuoteCreateBodyFromQuote = {
  isRevision?: boolean | undefined;
  quote: string;
};

/**
 * @internal
 * QuoteCreateBodyFromQuote without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyFromQuote = {
  is_revision?: boolean | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyFromQuote
 */
const SchemaIn$QuoteCreateBodyFromQuote: z.ZodType<
  QuoteCreateBodyFromQuote, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    is_revision: z.boolean().optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      is_revision: "isRevision",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyFromQuote
 */
const SchemaOut$QuoteCreateBodyFromQuote: z.ZodType<
  External$QuoteCreateBodyFromQuote, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyFromQuote // the object to be transformed
> = z
  .object({
    isRevision: z.boolean().optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      isRevision: "is_revision",
      quote: "quote",
    });
  });

export const Schemas$QuoteCreateBodyFromQuote = {
  in: SchemaIn$QuoteCreateBodyFromQuote,
  out: SchemaOut$QuoteCreateBodyFromQuote,
};
