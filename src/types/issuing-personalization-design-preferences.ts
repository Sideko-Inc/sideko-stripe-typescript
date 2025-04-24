import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingPersonalizationDesignPreferences = {
  /**
   * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
   */
  isDefault: boolean;
  /**
   * Whether this personalization design is used to create cards when one is not specified and a default for this connected account does not exist.
   */
  isPlatformDefault?: boolean | null | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignPreferences without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignPreferences = {
  is_default: boolean;
  is_platform_default?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignPreferences
 */
const SchemaIn$IssuingPersonalizationDesignPreferences: z.ZodType<
  IssuingPersonalizationDesignPreferences, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    is_default: z.boolean(),
    is_platform_default: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      is_default: "isDefault",
      is_platform_default: "isPlatformDefault",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignPreferences
 */
const SchemaOut$IssuingPersonalizationDesignPreferences: z.ZodType<
  External$IssuingPersonalizationDesignPreferences, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignPreferences // the object to be transformed
> = z
  .object({
    isDefault: z.boolean(),
    isPlatformDefault: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      isDefault: "is_default",
      isPlatformDefault: "is_platform_default",
    });
  });

export const Schemas$IssuingPersonalizationDesignPreferences = {
  in: SchemaIn$IssuingPersonalizationDesignPreferences,
  out: SchemaOut$IssuingPersonalizationDesignPreferences,
};
