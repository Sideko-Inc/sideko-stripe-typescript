import { External$File, File, Schemas$File } from "./file";
import {
  External$IssuingPersonalizationDesignCarrierText,
  IssuingPersonalizationDesignCarrierText,
  Schemas$IssuingPersonalizationDesignCarrierText,
} from "./issuing-personalization-design-carrier-text";
import {
  External$IssuingPersonalizationDesignMetadata,
  IssuingPersonalizationDesignMetadata,
  Schemas$IssuingPersonalizationDesignMetadata,
} from "./issuing-personalization-design-metadata";
import {
  External$IssuingPersonalizationDesignPreferences,
  IssuingPersonalizationDesignPreferences,
  Schemas$IssuingPersonalizationDesignPreferences,
} from "./issuing-personalization-design-preferences";
import {
  External$IssuingPersonalizationDesignRejectionReasons,
  IssuingPersonalizationDesignRejectionReasons,
  Schemas$IssuingPersonalizationDesignRejectionReasons,
} from "./issuing-personalization-design-rejection-reasons";
import {
  External$IssuingPhysicalBundle,
  IssuingPhysicalBundle,
  Schemas$IssuingPhysicalBundle,
} from "./issuing-physical-bundle";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Personalization Design is a logical grouping of a Physical Bundle, card logo, and carrier text that represents a product line.
 */
export type IssuingPersonalizationDesign = {
  /**
   * The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
   */
  cardLogo?: (string | File) | undefined;
  carrierText?: IssuingPersonalizationDesignCarrierText | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingPersonalizationDesignMetadata;
  /**
   * Friendly display name.
   */
  name?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.personalization_design";
  /**
   * The physical bundle object belonging to this personalization design.
   */
  physicalBundle: string | IssuingPhysicalBundle;
  preferences: IssuingPersonalizationDesignPreferences;
  rejectionReasons: IssuingPersonalizationDesignRejectionReasons;
  /**
   * Whether this personalization design can be used to create cards.
   */
  status: "active" | "inactive" | "rejected" | "review";
};

/**
 * @internal
 * IssuingPersonalizationDesign without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesign = {
  card_logo?: (string | External$File) | undefined;
  carrier_text?: External$IssuingPersonalizationDesignCarrierText | undefined;
  created: number;
  id: string;
  livemode: boolean;
  lookup_key?: string | null | undefined;
  metadata: External$IssuingPersonalizationDesignMetadata;
  name?: string | null | undefined;
  object: "issuing.personalization_design";
  physical_bundle: string | External$IssuingPhysicalBundle;
  preferences: External$IssuingPersonalizationDesignPreferences;
  rejection_reasons: External$IssuingPersonalizationDesignRejectionReasons;
  status: "active" | "inactive" | "rejected" | "review";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesign
 */
const SchemaIn$IssuingPersonalizationDesign: z.ZodType<
  IssuingPersonalizationDesign, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_logo: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
    carrier_text: Schemas$IssuingPersonalizationDesignCarrierText.in.optional(),
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    lookup_key: z.string().nullable().optional(),
    metadata: Schemas$IssuingPersonalizationDesignMetadata.in,
    name: z.string().nullable().optional(),
    object: z.enum(["issuing.personalization_design"]),
    physical_bundle: z.union([z.string(), Schemas$IssuingPhysicalBundle.in]),
    preferences: Schemas$IssuingPersonalizationDesignPreferences.in,
    rejection_reasons: Schemas$IssuingPersonalizationDesignRejectionReasons.in,
    status: z.enum(["active", "inactive", "rejected", "review"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_logo: "cardLogo",
      carrier_text: "carrierText",
      created: "created",
      id: "id",
      livemode: "livemode",
      lookup_key: "lookupKey",
      metadata: "metadata",
      name: "name",
      object: "object",
      physical_bundle: "physicalBundle",
      preferences: "preferences",
      rejection_reasons: "rejectionReasons",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesign
 */
const SchemaOut$IssuingPersonalizationDesign: z.ZodType<
  External$IssuingPersonalizationDesign, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesign // the object to be transformed
> = z
  .object({
    cardLogo: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
    carrierText: Schemas$IssuingPersonalizationDesignCarrierText.out.optional(),
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    lookupKey: z.string().nullable().optional(),
    metadata: Schemas$IssuingPersonalizationDesignMetadata.out,
    name: z.string().nullable().optional(),
    object: z.enum(["issuing.personalization_design"]),
    physicalBundle: z.union([z.string(), Schemas$IssuingPhysicalBundle.out]),
    preferences: Schemas$IssuingPersonalizationDesignPreferences.out,
    rejectionReasons: Schemas$IssuingPersonalizationDesignRejectionReasons.out,
    status: z.enum(["active", "inactive", "rejected", "review"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardLogo: "card_logo",
      carrierText: "carrier_text",
      created: "created",
      id: "id",
      livemode: "livemode",
      lookupKey: "lookup_key",
      metadata: "metadata",
      name: "name",
      object: "object",
      physicalBundle: "physical_bundle",
      preferences: "preferences",
      rejectionReasons: "rejection_reasons",
      status: "status",
    });
  });

export const Schemas$IssuingPersonalizationDesign = {
  in: SchemaIn$IssuingPersonalizationDesign,
  out: SchemaOut$IssuingPersonalizationDesign,
};
