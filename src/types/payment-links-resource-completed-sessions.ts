import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCompletedSessions = {
  /**
   * The current number of checkout sessions that have been completed on the payment link which count towards the `completed_sessions` restriction to be met.
   */
  count: number;
  /**
   * The maximum number of checkout sessions that can be completed for the `completed_sessions` restriction to be met.
   */
  limit: number;
};

/**
 * @internal
 * PaymentLinksResourceCompletedSessions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCompletedSessions = {
  count: number;
  limit: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCompletedSessions
 */
const SchemaIn$PaymentLinksResourceCompletedSessions: z.ZodType<
  PaymentLinksResourceCompletedSessions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    count: z.number().int(),
    limit: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      limit: "limit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCompletedSessions
 */
const SchemaOut$PaymentLinksResourceCompletedSessions: z.ZodType<
  External$PaymentLinksResourceCompletedSessions, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCompletedSessions // the object to be transformed
> = z
  .object({
    count: z.number().int(),
    limit: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      limit: "limit",
    });
  });

export const Schemas$PaymentLinksResourceCompletedSessions = {
  in: SchemaIn$PaymentLinksResourceCompletedSessions,
  out: SchemaOut$PaymentLinksResourceCompletedSessions,
};
