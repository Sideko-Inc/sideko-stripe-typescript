import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingPersonalizationDesignRejectionReasons = {
  /**
   * The reason(s) the card logo was rejected.
   */
  cardLogo?:
    | (
        | "geographic_location"
        | "inappropriate"
        | "network_name"
        | "non_binary_image"
        | "non_fiat_currency"
        | "other"
        | "other_entity"
        | "promotional_material"
      )[]
    | null
    | undefined;
  /**
   * The reason(s) the carrier text was rejected.
   */
  carrierText?:
    | (
        | "geographic_location"
        | "inappropriate"
        | "network_name"
        | "non_fiat_currency"
        | "other"
        | "other_entity"
        | "promotional_material"
      )[]
    | null
    | undefined;
};

/**
 * @internal
 * IssuingPersonalizationDesignRejectionReasons without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPersonalizationDesignRejectionReasons = {
  card_logo?:
    | (
        | "geographic_location"
        | "inappropriate"
        | "network_name"
        | "non_binary_image"
        | "non_fiat_currency"
        | "other"
        | "other_entity"
        | "promotional_material"
      )[]
    | null
    | undefined;
  carrier_text?:
    | (
        | "geographic_location"
        | "inappropriate"
        | "network_name"
        | "non_fiat_currency"
        | "other"
        | "other_entity"
        | "promotional_material"
      )[]
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPersonalizationDesignRejectionReasons
 */
const SchemaIn$IssuingPersonalizationDesignRejectionReasons: z.ZodType<
  IssuingPersonalizationDesignRejectionReasons, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_logo: z
      .array(
        z.enum([
          "geographic_location",
          "inappropriate",
          "network_name",
          "non_binary_image",
          "non_fiat_currency",
          "other",
          "other_entity",
          "promotional_material",
        ]),
      )
      .nullable()
      .optional(),
    carrier_text: z
      .array(
        z.enum([
          "geographic_location",
          "inappropriate",
          "network_name",
          "non_fiat_currency",
          "other",
          "other_entity",
          "promotional_material",
        ]),
      )
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_logo: "cardLogo",
      carrier_text: "carrierText",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPersonalizationDesignRejectionReasons
 */
const SchemaOut$IssuingPersonalizationDesignRejectionReasons: z.ZodType<
  External$IssuingPersonalizationDesignRejectionReasons, // output type of this zod object
  z.ZodTypeDef,
  IssuingPersonalizationDesignRejectionReasons // the object to be transformed
> = z
  .object({
    cardLogo: z
      .array(
        z.enum([
          "geographic_location",
          "inappropriate",
          "network_name",
          "non_binary_image",
          "non_fiat_currency",
          "other",
          "other_entity",
          "promotional_material",
        ]),
      )
      .nullable()
      .optional(),
    carrierText: z
      .array(
        z.enum([
          "geographic_location",
          "inappropriate",
          "network_name",
          "non_fiat_currency",
          "other",
          "other_entity",
          "promotional_material",
        ]),
      )
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardLogo: "card_logo",
      carrierText: "carrier_text",
    });
  });

export const Schemas$IssuingPersonalizationDesignRejectionReasons = {
  in: SchemaIn$IssuingPersonalizationDesignRejectionReasons,
  out: SchemaOut$IssuingPersonalizationDesignRejectionReasons,
};
