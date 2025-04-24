import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions
 */
export type PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions = {
  limit: number;
};

/**
 * @internal
 * PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions = {
  limit: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions
 */
const SchemaIn$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions: z.ZodType<
  PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions
 */
const SchemaOut$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions: z.ZodType<
  External$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions // the object to be transformed
> = z
  .object({
    limit: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      limit: "limit",
    });
  });

export const Schemas$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions = {
  in: SchemaIn$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions,
  out: SchemaOut$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions,
};
