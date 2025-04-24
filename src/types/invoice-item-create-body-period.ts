import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
 */
export type InvoiceItemCreateBodyPeriod = {
  end: number;
  start: number;
};

/**
 * @internal
 * InvoiceItemCreateBodyPeriod without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemCreateBodyPeriod = {
  end: number;
  start: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemCreateBodyPeriod
 */
const SchemaIn$InvoiceItemCreateBodyPeriod: z.ZodType<
  InvoiceItemCreateBodyPeriod, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemCreateBodyPeriod
 */
const SchemaOut$InvoiceItemCreateBodyPeriod: z.ZodType<
  External$InvoiceItemCreateBodyPeriod, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemCreateBodyPeriod // the object to be transformed
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

export const Schemas$InvoiceItemCreateBodyPeriod = {
  in: SchemaIn$InvoiceItemCreateBodyPeriod,
  out: SchemaOut$InvoiceItemCreateBodyPeriod,
};
