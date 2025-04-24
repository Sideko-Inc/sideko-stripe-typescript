import {
  External$IssuingPersonalizationDesignCreateBodyCarrierText,
  IssuingPersonalizationDesignCreateBodyCarrierText,
  Schemas$IssuingPersonalizationDesignCreateBodyCarrierText,
} from "./issuing-personalization-design-create-body-carrier-text";
import {
  External$IssuingPersonalizationDesignCreateBodyMetadata,
  IssuingPersonalizationDesignCreateBodyMetadata,
  Schemas$IssuingPersonalizationDesignCreateBodyMetadata,
} from "./issuing-personalization-design-create-body-metadata";
import {
  External$IssuingPersonalizationDesignCreateBodyPreferences,
  IssuingPersonalizationDesignCreateBodyPreferences,
  Schemas$IssuingPersonalizationDesignCreateBodyPreferences,
} from "./issuing-personalization-design-create-body-preferences";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingPersonalizationDesignCreateBody
 */
export type IssuingPersonalizationDesignCreateBody = {
  /**
   * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
   */
  cardLogo?: string | undefined;
  /**
   * Hash containing carrier text, for use with physical bundles that support carrier text.
   */
  carrierText?: IssuingPersonalizationDesignCreateBodyCarrierText | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingPersonalizationDesignCreateBodyMetadata | undefined;
  /**
   * Friendly display name.
   */
  name?: string | undefined;
  /**
   * The physical bundle object belonging to this personalization design.
   */
  physicalBundle: string;
  /**
   * Information on whether this personalization design is used to create cards when one is not specified.
   */
  preferences?: IssuingPersonalizationDesignCreateBodyPreferences | undefined;
  /**
   * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
   */
  transferLookupKey?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (IssuingPersonalizationDesignCreateBodyCarrierText | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (IssuingPersonalizationDesignCreateBodyMetadata | undefined)
    | (string | undefined)
    | string
    | (IssuingPersonalizationDesignCreateBodyPreferences | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignCreateBody = {
  card_logo?: string | undefined;
  carrier_text?:
    | External$IssuingPersonalizationDesignCreateBodyCarrierText
    | undefined;
  expand?: string[] | undefined;
  lookup_key?: string | undefined;
  metadata?:
    | External$IssuingPersonalizationDesignCreateBodyMetadata
    | undefined;
  name?: string | undefined;
  physical_bundle: string;
  preferences?:
    | External$IssuingPersonalizationDesignCreateBodyPreferences
    | undefined;
  transfer_lookup_key?: boolean | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (External$IssuingPersonalizationDesignCreateBodyCarrierText | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$IssuingPersonalizationDesignCreateBodyMetadata | undefined)
    | (string | undefined)
    | string
    | (External$IssuingPersonalizationDesignCreateBodyPreferences | undefined)
    | (boolean | undefined)
    | External$IssuingPersonalizationDesignCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignCreateBody
 */
const SchemaIn$IssuingPersonalizationDesignCreateBody: z.ZodType<
  IssuingPersonalizationDesignCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_logo: z.string().optional(),
    carrier_text:
      Schemas$IssuingPersonalizationDesignCreateBodyCarrierText.in.optional(),
    expand: z.array(z.string()).optional(),
    lookup_key: z.string().optional(),
    metadata:
      Schemas$IssuingPersonalizationDesignCreateBodyMetadata.in.optional(),
    name: z.string().optional(),
    physical_bundle: z.string(),
    preferences:
      Schemas$IssuingPersonalizationDesignCreateBodyPreferences.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignCreateBody
 */
const SchemaOut$IssuingPersonalizationDesignCreateBody: z.ZodType<
  External$IssuingPersonalizationDesignCreateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignCreateBody // the object to be transformed
> = z
  .object({
    cardLogo: z.string().optional(),
    carrierText:
      Schemas$IssuingPersonalizationDesignCreateBodyCarrierText.out.optional(),
    expand: z.array(z.string()).optional(),
    lookupKey: z.string().optional(),
    metadata:
      Schemas$IssuingPersonalizationDesignCreateBodyMetadata.out.optional(),
    name: z.string().optional(),
    physicalBundle: z.string(),
    preferences:
      Schemas$IssuingPersonalizationDesignCreateBodyPreferences.out.optional(),
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

export const Schemas$IssuingPersonalizationDesignCreateBody = {
  in: SchemaIn$IssuingPersonalizationDesignCreateBody,
  out: SchemaOut$IssuingPersonalizationDesignCreateBody,
};
