import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountBrandingSettings = {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
   */
  icon?: (string | File) | undefined;
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
   */
  logo?: (string | File) | undefined;
  /**
   * A CSS hex color value representing the primary branding color for this account
   */
  primaryColor?: string | null | undefined;
  /**
   * A CSS hex color value representing the secondary branding color for this account
   */
  secondaryColor?: string | null | undefined;
};

/**
 * @internal
 * AccountBrandingSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBrandingSettings = {
  icon?: (string | External$File) | undefined;
  logo?: (string | External$File) | undefined;
  primary_color?: string | null | undefined;
  secondary_color?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBrandingSettings
 */
const SchemaIn$AccountBrandingSettings: z.ZodType<
  AccountBrandingSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    icon: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
    logo: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
    primary_color: z.string().nullable().optional(),
    secondary_color: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBrandingSettings
 */
const SchemaOut$AccountBrandingSettings: z.ZodType<
  External$AccountBrandingSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountBrandingSettings // the object to be transformed
> = z
  .object({
    icon: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
    logo: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
    primaryColor: z.string().nullable().optional(),
    secondaryColor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      icon: "icon",
      logo: "logo",
      primaryColor: "primary_color",
      secondaryColor: "secondary_color",
    });
  });

export const Schemas$AccountBrandingSettings = {
  in: SchemaIn$AccountBrandingSettings,
  out: SchemaOut$AccountBrandingSettings,
};
