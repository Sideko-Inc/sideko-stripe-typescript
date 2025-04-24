import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsBranding
 */
export type AccountCreateBodySettingsBranding = {
  icon?: string | undefined;
  logo?: string | undefined;
  primaryColor?: string | undefined;
  secondaryColor?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsBranding without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsBranding = {
  icon?: string | undefined;
  logo?: string | undefined;
  primary_color?: string | undefined;
  secondary_color?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsBranding
 */
const SchemaIn$AccountCreateBodySettingsBranding: z.ZodType<
  AccountCreateBodySettingsBranding, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    icon: z.string().optional(),
    logo: z.string().optional(),
    primary_color: z.string().optional(),
    secondary_color: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      icon: "icon",
      logo: "logo",
      primary_color: "primaryColor",
      secondary_color: "secondaryColor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsBranding
 */
const SchemaOut$AccountCreateBodySettingsBranding: z.ZodType<
  External$AccountCreateBodySettingsBranding, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsBranding // the object to be transformed
> = z
  .object({
    icon: z.string().optional(),
    logo: z.string().optional(),
    primaryColor: z.string().optional(),
    secondaryColor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      icon: "icon",
      logo: "logo",
      primaryColor: "primary_color",
      secondaryColor: "secondary_color",
    });
  });

export const Schemas$AccountCreateBodySettingsBranding = {
  in: SchemaIn$AccountCreateBodySettingsBranding,
  out: SchemaOut$AccountCreateBodySettingsBranding,
};
