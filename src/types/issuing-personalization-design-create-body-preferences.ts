import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information on whether this personalization design is used to create cards when one is not specified.
 */
export type IssuingPersonalizationDesignCreateBodyPreferences = {
  isDefault: boolean;
};

/**
 * @internal
 * IssuingPersonalizationDesignCreateBodyPreferences without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignCreateBodyPreferences = {
  is_default: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignCreateBodyPreferences
 */
const SchemaIn$IssuingPersonalizationDesignCreateBodyPreferences: z.ZodType<
  IssuingPersonalizationDesignCreateBodyPreferences, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignCreateBodyPreferences
 */
const SchemaOut$IssuingPersonalizationDesignCreateBodyPreferences: z.ZodType<
  External$IssuingPersonalizationDesignCreateBodyPreferences, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignCreateBodyPreferences // the object to be transformed
> = z
  .object({
    isDefault: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      isDefault: "is_default",
    });
  });

export const Schemas$IssuingPersonalizationDesignCreateBodyPreferences = {
  in: SchemaIn$IssuingPersonalizationDesignCreateBodyPreferences,
  out: SchemaOut$IssuingPersonalizationDesignCreateBodyPreferences,
};
