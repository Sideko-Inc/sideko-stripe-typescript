import {
  External$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0,
  IssuingPersonalizationDesignUpdateBodyCarrierTextObj0,
  Schemas$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0,
} from "./issuing-personalization-design-update-body-carrier-text-obj0";
import {
  External$IssuingPersonalizationDesignUpdateBodyMetadata,
  IssuingPersonalizationDesignUpdateBodyMetadata,
  Schemas$IssuingPersonalizationDesignUpdateBodyMetadata,
} from "./issuing-personalization-design-update-body-metadata";
import {
  External$IssuingPersonalizationDesignUpdateBodyPreferences,
  IssuingPersonalizationDesignUpdateBodyPreferences,
  Schemas$IssuingPersonalizationDesignUpdateBodyPreferences,
} from "./issuing-personalization-design-update-body-preferences";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingPersonalizationDesignUpdateBody
 */
export type IssuingPersonalizationDesignUpdateBody = {
  /**
   * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
   */
  cardLogo?: (string | string) | undefined;
  /**
   * Hash containing carrier text, for use with physical bundles that support carrier text.
   */
  carrierText?:
    | (IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: (string | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingPersonalizationDesignUpdateBodyMetadata | undefined;
  /**
   * Friendly display name. Providing an empty string will set the field to null.
   */
  name?: (string | string) | undefined;
  /**
   * The physical bundle object belonging to this personalization design.
   */
  physicalBundle?: string | undefined;
  /**
   * Information on whether this personalization design is used to create cards when one is not specified.
   */
  preferences?: IssuingPersonalizationDesignUpdateBodyPreferences | undefined;
  /**
   * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
   */
  transferLookupKey?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((string | string) | undefined)
    | (
        | (IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 | string)
        | undefined
      )
    | (string[] | undefined)
    | ((string | string) | undefined)
    | (IssuingPersonalizationDesignUpdateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (string | undefined)
    | (IssuingPersonalizationDesignUpdateBodyPreferences | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignUpdateBody = {
  card_logo?: (string | string) | undefined;
  carrier_text?:
    | (External$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0 | string)
    | undefined;
  expand?: string[] | undefined;
  lookup_key?: (string | string) | undefined;
  metadata?:
    | External$IssuingPersonalizationDesignUpdateBodyMetadata
    | undefined;
  name?: (string | string) | undefined;
  physical_bundle?: string | undefined;
  preferences?:
    | External$IssuingPersonalizationDesignUpdateBodyPreferences
    | undefined;
  transfer_lookup_key?: boolean | undefined;

  [additionalProperty: string]:
    | ((string | string) | undefined)
    | (
        | (
            | External$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0
            | string
          )
        | undefined
      )
    | (string[] | undefined)
    | ((string | string) | undefined)
    | (External$IssuingPersonalizationDesignUpdateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (string | undefined)
    | (External$IssuingPersonalizationDesignUpdateBodyPreferences | undefined)
    | (boolean | undefined)
    | External$IssuingPersonalizationDesignUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignUpdateBody
 */
const SchemaIn$IssuingPersonalizationDesignUpdateBody: z.ZodType<
  IssuingPersonalizationDesignUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_logo: z.union([z.string(), z.string()]).optional(),
    carrier_text: z
      .union([
        Schemas$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0.in,
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    lookup_key: z.union([z.string(), z.string()]).optional(),
    metadata:
      Schemas$IssuingPersonalizationDesignUpdateBodyMetadata.in.optional(),
    name: z.union([z.string(), z.string()]).optional(),
    physical_bundle: z.string().optional(),
    preferences:
      Schemas$IssuingPersonalizationDesignUpdateBodyPreferences.in.optional(),
    transfer_lookup_key: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      card_logo: "cardLogo",
      carrier_text: "carrierText",
      expand: "expand",
      lookup_key: "lookupKey",
      metadata: "metadata",
      name: "name",
      physical_bundle: "physicalBundle",
      preferences: "preferences",
      transfer_lookup_key: "transferLookupKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignUpdateBody
 */
const SchemaOut$IssuingPersonalizationDesignUpdateBody: z.ZodType<
  External$IssuingPersonalizationDesignUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignUpdateBody // the object to be transformed
> = z
  .object({
    cardLogo: z.union([z.string(), z.string()]).optional(),
    carrierText: z
      .union([
        Schemas$IssuingPersonalizationDesignUpdateBodyCarrierTextObj0.out,
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    lookupKey: z.union([z.string(), z.string()]).optional(),
    metadata:
      Schemas$IssuingPersonalizationDesignUpdateBodyMetadata.out.optional(),
    name: z.union([z.string(), z.string()]).optional(),
    physicalBundle: z.string().optional(),
    preferences:
      Schemas$IssuingPersonalizationDesignUpdateBodyPreferences.out.optional(),
    transferLookupKey: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cardLogo: "card_logo",
      carrierText: "carrier_text",
      expand: "expand",
      lookupKey: "lookup_key",
      metadata: "metadata",
      name: "name",
      physicalBundle: "physical_bundle",
      preferences: "preferences",
      transferLookupKey: "transfer_lookup_key",
    });
  });

export const Schemas$IssuingPersonalizationDesignUpdateBody = {
  in: SchemaIn$IssuingPersonalizationDesignUpdateBody,
  out: SchemaOut$IssuingPersonalizationDesignUpdateBody,
};
