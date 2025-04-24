import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingPersonalizationDesignCreateBodyCarrierText,
  IssuingPersonalizationDesignCreateBodyCarrierText,
  Schemas$IssuingPersonalizationDesignCreateBodyCarrierText,
} from "@sideko-inc/stripe/types/issuing-personalization-design-create-body-carrier-text";
import {
  External$IssuingPersonalizationDesignCreateBodyMetadata,
  IssuingPersonalizationDesignCreateBodyMetadata,
  Schemas$IssuingPersonalizationDesignCreateBodyMetadata,
} from "@sideko-inc/stripe/types/issuing-personalization-design-create-body-metadata";
import {
  External$IssuingPersonalizationDesignCreateBodyPreferences,
  IssuingPersonalizationDesignCreateBodyPreferences,
  Schemas$IssuingPersonalizationDesignCreateBodyPreferences,
} from "@sideko-inc/stripe/types/issuing-personalization-design-create-body-preferences";
import {
  External$IssuingPersonalizationDesignListPreferences,
  IssuingPersonalizationDesignListPreferences,
  Schemas$IssuingPersonalizationDesignListPreferences,
} from "@sideko-inc/stripe/types/issuing-personalization-design-list-preferences";
import {
  External$IssuingPersonalizationDesignUpdateBody,
  IssuingPersonalizationDesignUpdateBody,
  Schemas$IssuingPersonalizationDesignUpdateBody,
} from "@sideko-inc/stripe/types/issuing-personalization-design-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * Only return personalization designs with the given lookup keys.
   */
  lookupKeys?: string[] | undefined;
  /**
   * Only return personalization designs with the given preferences.
   */
  preferences?: IssuingPersonalizationDesignListPreferences | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return personalization designs with the given status.
   */
  status?: ("active" | "inactive" | "rejected" | "review") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  lookup_keys?: string[] | undefined;
  preferences?:
    | External$IssuingPersonalizationDesignListPreferences
    | undefined;
  starting_after?: string | undefined;
  status?: ("active" | "inactive" | "rejected" | "review") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    lookup_keys: z.array(z.string()).optional(),
    preferences:
      Schemas$IssuingPersonalizationDesignListPreferences.in.optional(),
    starting_after: z.string().optional(),
    status: z.enum(["active", "inactive", "rejected", "review"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      lookup_keys: "lookupKeys",
      preferences: "preferences",
      starting_after: "startingAfter",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    lookupKeys: z.array(z.string()).optional(),
    preferences:
      Schemas$IssuingPersonalizationDesignListPreferences.out.optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["active", "inactive", "rejected", "review"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      lookupKeys: "lookup_keys",
      preferences: "preferences",
      startingAfter: "starting_after",
      status: "status",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  personalizationDesign: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  personalization_design: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    personalization_design: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      personalization_design: "personalizationDesign",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    personalizationDesign: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      personalizationDesign: "personalization_design",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: IssuingPersonalizationDesignUpdateBody | undefined;
  personalizationDesign: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IssuingPersonalizationDesignUpdateBody | undefined;
  personalization_design: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IssuingPersonalizationDesignUpdateBody.in.optional(),
    personalization_design: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      personalization_design: "personalizationDesign",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IssuingPersonalizationDesignUpdateBody.out.optional(),
    personalizationDesign: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      personalizationDesign: "personalization_design",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
