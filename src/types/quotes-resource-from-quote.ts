import { External$Quote, Quote, Schemas$Quote } from "./quote";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceFromQuote = {
  /**
   * Whether this quote is a revision of a different quote.
   */
  isRevision: boolean;
  /**
   * The quote that was cloned.
   */
  quote: string | Quote;
};

/**
 * @internal
 * QuotesResourceFromQuote without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceFromQuote = {
  is_revision: boolean;
  quote: string | External$Quote;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceFromQuote
 */
const SchemaIn$QuotesResourceFromQuote: z.ZodType<
  QuotesResourceFromQuote, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    is_revision: z.boolean(),
    quote: z.union([z.string(), z.lazy(() => Schemas$Quote.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      is_revision: "isRevision",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceFromQuote
 */
const SchemaOut$QuotesResourceFromQuote: z.ZodType<
  External$QuotesResourceFromQuote, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceFromQuote // the object to be transformed
> = z
  .object({
    isRevision: z.boolean(),
    quote: z.union([z.string(), z.lazy(() => Schemas$Quote.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      isRevision: "is_revision",
      quote: "quote",
    });
  });

export const Schemas$QuotesResourceFromQuote = {
  in: SchemaIn$QuotesResourceFromQuote,
  out: SchemaOut$QuotesResourceFromQuote,
};
