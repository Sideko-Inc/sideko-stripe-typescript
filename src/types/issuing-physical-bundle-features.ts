import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingPhysicalBundleFeatures = {
  /**
   * The policy for how to use card logo images in a card design with this physical bundle.
   */
  cardLogo: "optional" | "required" | "unsupported";
  /**
   * The policy for how to use carrier letter text in a card design with this physical bundle.
   */
  carrierText: "optional" | "required" | "unsupported";
  /**
   * The policy for how to use a second line on a card with this physical bundle.
   */
  secondLine: "optional" | "required" | "unsupported";
};

/**
 * @internal
 * IssuingPhysicalBundleFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPhysicalBundleFeatures = {
  card_logo: "optional" | "required" | "unsupported";
  carrier_text: "optional" | "required" | "unsupported";
  second_line: "optional" | "required" | "unsupported";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPhysicalBundleFeatures
 */
const SchemaIn$IssuingPhysicalBundleFeatures: z.ZodType<
  IssuingPhysicalBundleFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_logo: z.enum(["optional", "required", "unsupported"]),
    carrier_text: z.enum(["optional", "required", "unsupported"]),
    second_line: z.enum(["optional", "required", "unsupported"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_logo: "cardLogo",
      carrier_text: "carrierText",
      second_line: "secondLine",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPhysicalBundleFeatures
 */
const SchemaOut$IssuingPhysicalBundleFeatures: z.ZodType<
  External$IssuingPhysicalBundleFeatures, // output type of this zod object
  z.ZodTypeDef,
  IssuingPhysicalBundleFeatures // the object to be transformed
> = z
  .object({
    cardLogo: z.enum(["optional", "required", "unsupported"]),
    carrierText: z.enum(["optional", "required", "unsupported"]),
    secondLine: z.enum(["optional", "required", "unsupported"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardLogo: "card_logo",
      carrierText: "carrier_text",
      secondLine: "second_line",
    });
  });

export const Schemas$IssuingPhysicalBundleFeatures = {
  in: SchemaIn$IssuingPhysicalBundleFeatures,
  out: SchemaOut$IssuingPhysicalBundleFeatures,
};
