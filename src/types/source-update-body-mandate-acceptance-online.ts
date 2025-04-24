import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceUpdateBodyMandateAcceptanceOnline
 */
export type SourceUpdateBodyMandateAcceptanceOnline = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * SourceUpdateBodyMandateAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodyMandateAcceptanceOnline = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodyMandateAcceptanceOnline
 */
const SchemaIn$SourceUpdateBodyMandateAcceptanceOnline: z.ZodType<
  SourceUpdateBodyMandateAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    user_agent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodyMandateAcceptanceOnline
 */
const SchemaOut$SourceUpdateBodyMandateAcceptanceOnline: z.ZodType<
  External$SourceUpdateBodyMandateAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodyMandateAcceptanceOnline // the object to be transformed
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    userAgent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      userAgent: "user_agent",
    });
  });

export const Schemas$SourceUpdateBodyMandateAcceptanceOnline = {
  in: SchemaIn$SourceUpdateBodyMandateAcceptanceOnline,
  out: SchemaOut$SourceUpdateBodyMandateAcceptanceOnline,
};
