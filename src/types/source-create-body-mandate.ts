import {
  External$SourceCreateBodyMandateAcceptance,
  Schemas$SourceCreateBodyMandateAcceptance,
  SourceCreateBodyMandateAcceptance,
} from "./source-create-body-mandate-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
 */
export type SourceCreateBodyMandate = {
  acceptance?: SourceCreateBodyMandateAcceptance | undefined;
  amount?: (number | string) | undefined;
  currency?: string | undefined;
  interval?: ("one_time" | "scheduled" | "variable") | undefined;
  notificationMethod?:
    | ("deprecated_none" | "email" | "manual" | "none" | "stripe_email")
    | undefined;
};

/**
 * @internal
 * SourceCreateBodyMandate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyMandate = {
  acceptance?: External$SourceCreateBodyMandateAcceptance | undefined;
  amount?: (number | string) | undefined;
  currency?: string | undefined;
  interval?: ("one_time" | "scheduled" | "variable") | undefined;
  notification_method?:
    | ("deprecated_none" | "email" | "manual" | "none" | "stripe_email")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyMandate
 */
const SchemaIn$SourceCreateBodyMandate: z.ZodType<
  SourceCreateBodyMandate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acceptance: Schemas$SourceCreateBodyMandateAcceptance.in.optional(),
    amount: z.union([z.number().int(), z.string()]).optional(),
    currency: z.string().optional(),
    interval: z.enum(["one_time", "scheduled", "variable"]).optional(),
    notification_method: z
      .enum(["deprecated_none", "email", "manual", "none", "stripe_email"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acceptance: "acceptance",
      amount: "amount",
      currency: "currency",
      interval: "interval",
      notification_method: "notificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyMandate
 */
const SchemaOut$SourceCreateBodyMandate: z.ZodType<
  External$SourceCreateBodyMandate, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyMandate // the object to be transformed
> = z
  .object({
    acceptance: Schemas$SourceCreateBodyMandateAcceptance.out.optional(),
    amount: z.union([z.number().int(), z.string()]).optional(),
    currency: z.string().optional(),
    interval: z.enum(["one_time", "scheduled", "variable"]).optional(),
    notificationMethod: z
      .enum(["deprecated_none", "email", "manual", "none", "stripe_email"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acceptance: "acceptance",
      amount: "amount",
      currency: "currency",
      interval: "interval",
      notificationMethod: "notification_method",
    });
  });

export const Schemas$SourceCreateBodyMandate = {
  in: SchemaIn$SourceCreateBodyMandate,
  out: SchemaOut$SourceCreateBodyMandate,
};
