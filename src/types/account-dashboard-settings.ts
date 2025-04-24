import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountDashboardSettings = {
  /**
   * The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
   */
  displayName?: string | null | undefined;
  /**
   * The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
   */
  timezone?: string | null | undefined;
};

/**
 * @internal
 * AccountDashboardSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountDashboardSettings = {
  display_name?: string | null | undefined;
  timezone?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountDashboardSettings
 */
const SchemaIn$AccountDashboardSettings: z.ZodType<
  AccountDashboardSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_name: z.string().nullable().optional(),
    timezone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_name: "displayName",
      timezone: "timezone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountDashboardSettings
 */
const SchemaOut$AccountDashboardSettings: z.ZodType<
  External$AccountDashboardSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountDashboardSettings // the object to be transformed
> = z
  .object({
    displayName: z.string().nullable().optional(),
    timezone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayName: "display_name",
      timezone: "timezone",
    });
  });

export const Schemas$AccountDashboardSettings = {
  in: SchemaIn$AccountDashboardSettings,
  out: SchemaOut$AccountDashboardSettings,
};
