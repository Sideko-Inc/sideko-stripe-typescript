import {
  External$QuotesResourceRecurring,
  QuotesResourceRecurring,
  Schemas$QuotesResourceRecurring,
} from "./quotes-resource-recurring";
import {
  External$QuotesResourceUpfront,
  QuotesResourceUpfront,
  Schemas$QuotesResourceUpfront,
} from "./quotes-resource-upfront";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceComputed = {
  recurring?: QuotesResourceRecurring | undefined;
  upfront: QuotesResourceUpfront;
};

/**
 * @internal
 * QuotesResourceComputed without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceComputed = {
  recurring?: External$QuotesResourceRecurring | undefined;
  upfront: External$QuotesResourceUpfront;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceComputed
 */
const SchemaIn$QuotesResourceComputed: z.ZodType<
  QuotesResourceComputed, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    recurring: z.lazy(() => Schemas$QuotesResourceRecurring.in.optional()),
    upfront: z.lazy(() => Schemas$QuotesResourceUpfront.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      recurring: "recurring",
      upfront: "upfront",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceComputed
 */
const SchemaOut$QuotesResourceComputed: z.ZodType<
  External$QuotesResourceComputed, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceComputed // the object to be transformed
> = z
  .object({
    recurring: z.lazy(() => Schemas$QuotesResourceRecurring.out.optional()),
    upfront: z.lazy(() => Schemas$QuotesResourceUpfront.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      recurring: "recurring",
      upfront: "upfront",
    });
  });

export const Schemas$QuotesResourceComputed = {
  in: SchemaIn$QuotesResourceComputed,
  out: SchemaOut$QuotesResourceComputed,
};
