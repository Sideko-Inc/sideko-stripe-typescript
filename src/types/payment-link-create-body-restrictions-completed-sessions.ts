import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyRestrictionsCompletedSessions
 */
export type PaymentLinkCreateBodyRestrictionsCompletedSessions = {
  limit: number;
};

/**
 * @internal
 * PaymentLinkCreateBodyRestrictionsCompletedSessions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyRestrictionsCompletedSessions = {
  limit: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyRestrictionsCompletedSessions
 */
const SchemaIn$PaymentLinkCreateBodyRestrictionsCompletedSessions: z.ZodType<
  PaymentLinkCreateBodyRestrictionsCompletedSessions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    limit: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      limit: "limit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyRestrictionsCompletedSessions
 */
const SchemaOut$PaymentLinkCreateBodyRestrictionsCompletedSessions: z.ZodType<
  External$PaymentLinkCreateBodyRestrictionsCompletedSessions, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyRestrictionsCompletedSessions // the object to be transformed
> = z
  .object({
    limit: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      limit: "limit",
    });
  });

export const Schemas$PaymentLinkCreateBodyRestrictionsCompletedSessions = {
  in: SchemaIn$PaymentLinkCreateBodyRestrictionsCompletedSessions,
  out: SchemaOut$PaymentLinkCreateBodyRestrictionsCompletedSessions,
};
