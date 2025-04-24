import {
  External$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions,
  PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions,
  Schemas$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions,
} from "./payment-link-update-body-restrictions-obj0-completed-sessions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyRestrictionsObj0
 */
export type PaymentLinkUpdateBodyRestrictionsObj0 = {
  completedSessions: PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions;
};

/**
 * @internal
 * PaymentLinkUpdateBodyRestrictionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyRestrictionsObj0 = {
  completed_sessions: External$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyRestrictionsObj0
 */
const SchemaIn$PaymentLinkUpdateBodyRestrictionsObj0: z.ZodType<
  PaymentLinkUpdateBodyRestrictionsObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    completed_sessions:
      Schemas$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completed_sessions: "completedSessions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyRestrictionsObj0
 */
const SchemaOut$PaymentLinkUpdateBodyRestrictionsObj0: z.ZodType<
  External$PaymentLinkUpdateBodyRestrictionsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyRestrictionsObj0 // the object to be transformed
> = z
  .object({
    completedSessions:
      Schemas$PaymentLinkUpdateBodyRestrictionsObj0CompletedSessions.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completedSessions: "completed_sessions",
    });
  });

export const Schemas$PaymentLinkUpdateBodyRestrictionsObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodyRestrictionsObj0,
  out: SchemaOut$PaymentLinkUpdateBodyRestrictionsObj0,
};
