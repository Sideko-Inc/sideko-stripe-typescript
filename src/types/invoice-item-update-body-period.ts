import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
 */
export type InvoiceItemUpdateBodyPeriod = {
  end: number;
  start: number;
};

/**
 * @internal
 * InvoiceItemUpdateBodyPeriod without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemUpdateBodyPeriod = {
  end: number;
  start: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemUpdateBodyPeriod
 */
const SchemaIn$InvoiceItemUpdateBodyPeriod: z.ZodType<
  InvoiceItemUpdateBodyPeriod, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end: z.number().int(),
    start: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemUpdateBodyPeriod
 */
const SchemaOut$InvoiceItemUpdateBodyPeriod: z.ZodType<
  External$InvoiceItemUpdateBodyPeriod, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemUpdateBodyPeriod // the object to be transformed
> = z
  .object({
    end: z.number().int(),
    start: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
    });
  });

export const Schemas$InvoiceItemUpdateBodyPeriod = {
  in: SchemaIn$InvoiceItemUpdateBodyPeriod,
  out: SchemaOut$InvoiceItemUpdateBodyPeriod,
};
