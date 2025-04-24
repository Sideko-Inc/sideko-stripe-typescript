import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information on whether this personalization design is used to create cards when one is not specified.
 */
export type IssuingPersonalizationDesignUpdateBodyPreferences = {
  isDefault: boolean;
};

/**
 * @internal
 * IssuingPersonalizationDesignUpdateBodyPreferences without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignUpdateBodyPreferences = {
  is_default: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignUpdateBodyPreferences
 */
const SchemaIn$IssuingPersonalizationDesignUpdateBodyPreferences: z.ZodType<
  IssuingPersonalizationDesignUpdateBodyPreferences, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    is_default: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      is_default: "isDefault",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignUpdateBodyPreferences
 */
const SchemaOut$IssuingPersonalizationDesignUpdateBodyPreferences: z.ZodType<
  External$IssuingPersonalizationDesignUpdateBodyPreferences, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignUpdateBodyPreferences // the object to be transformed
> = z
  .object({
    isDefault: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      isDefault: "is_default",
    });
  });

export const Schemas$IssuingPersonalizationDesignUpdateBodyPreferences = {
  in: SchemaIn$IssuingPersonalizationDesignUpdateBodyPreferences,
  out: SchemaOut$IssuingPersonalizationDesignUpdateBodyPreferences,
};
