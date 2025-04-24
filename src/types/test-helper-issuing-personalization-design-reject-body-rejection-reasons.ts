import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The reason(s) the personalization design was rejected.
 */
export type TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons = {
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
    | undefined;
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
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons =
  {
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
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons
 */
const SchemaIn$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons: z.ZodType<
  TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons
 */
const SchemaOut$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons: z.ZodType<
  External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons // the object to be transformed
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
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardLogo: "card_logo",
      carrierText: "carrier_text",
    });
  });

export const Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons =
  {
    in: SchemaIn$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
    out: SchemaOut$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
  };
