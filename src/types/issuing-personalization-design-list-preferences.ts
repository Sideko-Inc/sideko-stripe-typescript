import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Only return personalization designs with the given preferences.
 */
export type IssuingPersonalizationDesignListPreferences = {
  isDefault?: boolean | undefined;
  isPlatformDefault?: boolean | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignListPreferences without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignListPreferences = {
  is_default?: boolean | undefined;
  is_platform_default?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignListPreferences
 */
const SchemaIn$IssuingPersonalizationDesignListPreferences: z.ZodType<
  IssuingPersonalizationDesignListPreferences, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    is_default: z.boolean().optional(),
    is_platform_default: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      is_default: "isDefault",
      is_platform_default: "isPlatformDefault",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignListPreferences
 */
const SchemaOut$IssuingPersonalizationDesignListPreferences: z.ZodType<
  External$IssuingPersonalizationDesignListPreferences, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignListPreferences // the object to be transformed
> = z
  .object({
    isDefault: z.boolean().optional(),
    isPlatformDefault: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      isDefault: "is_default",
      isPlatformDefault: "is_platform_default",
    });
  });

export const Schemas$IssuingPersonalizationDesignListPreferences = {
  in: SchemaIn$IssuingPersonalizationDesignListPreferences,
  out: SchemaOut$IssuingPersonalizationDesignListPreferences,
};
